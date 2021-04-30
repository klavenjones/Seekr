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
        // IndexName: 'IndexByUserId',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
          ':userId': userId
        }
      })
      .promise()

    const jobs = result.Items

    logger.info(
      `Found ${jobs?.length} from ${this.jobsTable} for the user: ${userId}`
    )

    return jobs as Jobs[]
  }

  async getAllJobsByStatus(userId: string, status: string): Promise<Jobs[]> {
    logger.info(
      `Getting all jobs from the ${this.jobsTable} for this user: ${userId}`
    )

    const result = await this.docClient
      .scan({
        TableName: this.jobsTable,
        // IndexName: 'IndexByJobID',
        FilterExpression: 'userId = :userId and #status = :status',
        ExpressionAttributeNames: {
          '#status': 'status'
        },
        ExpressionAttributeValues: {
          ':userId': userId,
          ':status': status
        }
      })
      .promise()

    const jobs = result.Items

    logger.info(
      `Found ${jobs?.length} from ${this.jobsTable} for the user: ${userId}`
    )

    return jobs as Jobs[]
  }

  //GET Jobs
  async getJob(userId: string, jobId: string): Promise<Jobs> {
    logger.info(`Getting job ${jobId} from this user: ${userId}`)

    const result = await this.docClient
      .get({
        TableName: this.jobsTable,
        Key: {
          userId,
          jobId
        }
      })
      .promise()
    logger.info(`Result from ${jobId}: ${result.Item}`)
    const jobs = result.Item
    return jobs as Jobs
  }

  //Create Jobs
  async createJob(job: Jobs) {
    logger.info(`Creating job (${job}) into ${this.jobsTable}`)
    await this.docClient
      .put({
        TableName: this.jobsTable,
        Item: job
      })
      .promise()
  }

  //Update Jobs
  async updateJob(userId: string, jobId: string, jobsUpdate: JobsUpdate) {
    logger.info(`Updating jobs for user: ${userId} with ${jobsUpdate}`)
    try {
      await this.docClient
        .update({
          TableName: this.jobsTable,
          Key: {
            userId: userId,
            jobId: jobId
          },
          UpdateExpression:
            'set #company = :company, #location = :location, #title = :title, #url = :url, #description = :description, #platform = :platform, #status = :status, #deadline = :deadline, #salary = :salary',
          ExpressionAttributeNames: {
            '#location': 'location',
            '#url': 'url',
            '#status': 'status',
            '#title': 'title',
            '#description': 'description',
            '#deadline': 'deadline',
            '#salary': 'salary',
            '#company': 'company',
            '#platform': 'platform'
          },
          ExpressionAttributeValues: {
            ':company': jobsUpdate.company,
            ':description': jobsUpdate.description,
            ':location': jobsUpdate.location,
            ':title': jobsUpdate.title,
            ':url': jobsUpdate.url,
            ':platform': jobsUpdate.platform,
            ':status': jobsUpdate.status,
            ':deadline': jobsUpdate.deadline,
            ':salary': jobsUpdate.salary
          }
        })
        .promise()
    } catch (error) {
      logger.info(`ERROR was found: ${error}`)
    }
  }
  //Delete Jobs
  async deleteJob(userId: string, jobId: string) {
    logger.info(`Deleting Jobs for user: ${userId}`)
    await this.docClient
      .delete({
        TableName: this.jobsTable,
        Key: {
          userId: userId,
          jobId: jobId
        }
      })
      .promise()
  }
}
