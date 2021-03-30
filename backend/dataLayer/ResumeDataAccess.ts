// Importing AWS components
import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
//Import Models
import { Resume } from '../models/Resume'
import { ResumeUpdate } from '../models/ResumeUpdate'
//Import Logger
import { createLogger } from '../utils/logger'

const logger = createLogger('resumeDataAccess')
export class ResumeDataAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly resumeTable = process.env.RESUME_TABLE
  ) {}

  //GET Resume
  async getResume(userId: string): Promise<Resume> {
    logger.info(`Getting resume for this user: ${userId}`)

    const result = await this.docClient
      .get({
        TableName: this.resumeTable,
        Key: {
          userId,
        },
      })
      .promise()

    const resume = result.Item
    return resume as Resume
  }

    //Get All Resumes
  async getAllResumes(userId: string, resumeId: string): Promise<Resume[]> {
    logger.info(`Getting resume for this user: ${userId}`)

    const result = await this.docClient
      .get({
        TableName: this.resumeTable,
        Key: {
          userId,
          resumeId
        },
      })
      .promise()

    const resume = result.Item
    return resume as Resume[]
  }

//Get Resume Associated with the job
  async getJobResume(jobId: string, resumeId: string): Promise<Resume> {
    logger.info(`Getting resume for this job: ${jobId}`)

    const result = await this.docClient
      .get({
        TableName: this.resumeTable,
        Key: {
          jobId,
          resumeId
        },
      })
      .promise()

    const resume = result.Item
    return resume as Resume
  }

  //Create Resume
  async createResume(resume: Resume) {
    logger.info(`Creating resume (${resume}) into ${this.resumeTable}`)
    await this.docClient
      .put({
        TableName: this.resumeTable,
        Item: resume,
      })
      .promise()
  }
  
  //Update Resume
  async updateResume(userId: string, resumeUpdate: ResumeUpdate) {
    logger.info(`Updating resume for user: ${userId}`)
    await this.docClient
      .update({
        TableName: this.resumeTable,
        Key: {
          userId,
        },
        UpdateExpression:
          'set #name = :name, #jobTitle = :jobTitle, #url = :url'
        ExpressionAttributeNames: {
          '#name': 'name',
        },
        ExpressionAttributeValues: {
          ':name': resumeUpdate.name,
          ':url': resumeUpdate.url,
          ':jobTitle': resumeUpdate.jobTitle,
        },
      })
      .promise()
  }

  //Delete Resume
  async deleteResume(userId: string, resumeId: string) {
    logger.info(`Deleting Resume for user: ${userId}`)
    await this.docClient.delete({
      TableName: this.resumeTable,
      Key: {
        userId,
      },
    })
  }
  //Update Photo
  async updateAttachmentURL(userId: string, url: string) {
    logger.info(
      `Update resume url from ${this.resumeTable}`
    )
    await this.docClient
      .update({
        TableName: this.resumeTable,
        Key: {
          userId,
        },
        UpdateExpression: 'set #url = :url',
        ExpressionAttributeValues: {
          ':url': url,
        },
      })
      .promise()
  }
}
