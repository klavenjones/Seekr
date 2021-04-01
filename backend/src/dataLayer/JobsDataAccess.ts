// Importing AWS components
import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
//Import Models
import { Jobs } from '../models/Jobs'
import { JobsUpdate } from '../models/JobsUpdate'
//Import Logger
import { createLogger } from '../utils/logger'

const logger = createLogger('JobsDataAccess')
export class JobsDataAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly jobsTable = process.env.JOBS_TABLE
  ) {}

  async getAllJobs(userId: string): Promise<Jobs[]> {
    logger.info(
      `Getting all jobs from the ${this.jobsTable} for this user: ${userId}`
    )

    const result = await this.docClient
      .query({
        TableName: this.jobsTable,
        // IndexName: this.jobsByUserIndex,
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
          ':userId': userId,
        },
      })
      .promise()

    const jobs = result.Items

    logger.info(
      `Found ${jobs?.length} from ${this.jobsTable} for the user: ${userId}`
    )

    return jobs as Jobs[]
  }

  //GET Job
  async getJob(userId: string, jobId: string): Promise<Jobs> {
    logger.info(`Getting jobs from this user: ${userId}`)

    const result = await this.docClient
      .get({
        TableName: this.jobsTable,
        Key: {
          userId,
          jobId,
        },
      })
      .promise()

    const jobs = result.Item
    return jobs as Jobs
  }

  //Create Jobs
  async createJob(job: Jobs) {
    logger.info(`Creating job (${job}) into ${this.jobsTable}`)
    await this.docClient
      .put({
        TableName: this.jobsTable,
        Item: job,
      })
      .promise()
  }
  //Update Jobs
  async updateJob(userId: string, jobId: string, jobsUpdate: JobsUpdate) {
    logger.info(`Updating jobs for user: ${userId}`)
    await this.docClient
      .update({
        TableName: this.jobsTable,
        Key: {
          userId,
          jobId,
        },
        UpdateExpression:
          'set #company = :company, #location = :location, #title = :title, #url = :url, #description = :description, #platform = :platform, #status = :status',
        ExpressionAttributeNames: {
          '#title': 'title',
        },
        ExpressionAttributeValues: {
          ':company': jobsUpdate.company,
          ':description': jobsUpdate.description,
          ':location': jobsUpdate.location,
          ':title': jobsUpdate.title,
          ':url': jobsUpdate.url,
          ':platform': jobsUpdate.platform,
          ':status': jobsUpdate.status,
        },
      })
      .promise()
  }
  //Delete Jobs
  async deleteJob(userId: string, jobId: string) {
    logger.info(`Deleting Jobs for user: ${userId}`)
    await this.docClient.delete({
      TableName: this.jobsTable,
      Key: {
        userId,
        jobId,
      },
    })
  }
}
