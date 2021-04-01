// Importing AWS components
import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
//Import Models
import { Activity } from '../models/Activity'
import { ActivityUpdate } from '../models/ActivityUpdate'
//Import Logger
import { createLogger } from '../utils/logger'

const logger = createLogger('ActivityDataAccess')
export class ActivityDataAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly activityTable = process.env.ACTIVITY_TABLE
  ) {}

  //Get All Activities
  async getAllActivities(userId: string): Promise<Activity[]> {
    logger.info(
      `Getting all activities from the ${this.activityTable} associated with this user: ${userId}`
    )
    const result = await this.docClient
      .query({
        TableName: this.activityTable,
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
          ':userId': userId,
        },
      })
      .promise()

    const activity = result.Items

    logger.info(
      `Found ${activity?.length} from ${this.activityTable} for the user: ${userId}`
    )

    return activity as Activity[]
  }

  //Get All Activities Associated with a job
  async getAllJobActivities(jobId: string): Promise<Activity[]> {
    logger.info(
      `Getting all activities from the ${this.activityTable} associated with this job: ${jobId}`
    )
    const result = await this.docClient
      .query({
        TableName: this.activityTable,
        KeyConditionExpression: 'jobId = :jobId',
        ExpressionAttributeValues: {
          ':jobId': jobId,
        },
      })
      .promise()

    const activity = result.Items

    logger.info(
      `Found ${activity?.length} from ${this.activityTable} associated with the user: ${jobId}`
    )

    return activity as Activity[]
  }

  //Get All Activities Associated with a User by Type
  async getAllActivitiesByType(
    userId: string,
    type: string
  ): Promise<Activity[]> {
    logger.info(
      `Getting all activities from the ${this.activityTable} associated with this user: ${userId}`
    )
    const result = await this.docClient
      .query({
        TableName: this.activityTable,
        KeyConditionExpression: 'userId = :userId and type = :type',
        ExpressionAttributeValues: {
          ':type': type,
          ':userId': userId,
        },
      })
      .promise()

    const activity = result.Items

    logger.info(
      `Found ${activity?.length} from ${this.activityTable} for the user: ${userId}`
    )

    return activity as Activity[]
  }

  //GET Activity
  async getActivity(userId: string, activityId: string): Promise<Activity> {
    logger.info(`Getting activity from this user: ${userId}`)

    const result = await this.docClient
      .get({
        TableName: this.activityTable,
        Key: {
          userId,
          activityId,
        },
      })
      .promise()

    const activity = result.Item
    return activity as Activity
  }

  //Create Activity
  async createActivity(activity: Activity) {
    logger.info(`Putting activity (${activity}) into ${this.activityTable}`)
    await this.docClient
      .put({
        TableName: this.activityTable,
        Item: activity,
      })
      .promise()
  }

  //Update Activity
  async updateActivity(
    jobId: string,
    activityId: string,
    activityUpdate: ActivityUpdate
  ) {
    logger.info(`Updating activity for job: ${jobId}`)
    await this.docClient
      .update({
        TableName: this.activityTable,
        Key: {
          jobId,
          activityId,
        },
        UpdateExpression:
          'set #type = :type, #start = :start, #end = :end, #done = :done',
        ExpressionAttributeNames: {
          '#type': 'type',
        },
        ExpressionAttributeValues: {
          ':type': activityUpdate.type,
          ':start': activityUpdate.start,
          ':end': activityUpdate.end,
          ':done': activityUpdate.done,
        },
      })
      .promise()
  }

  //Delete Activity
  async deleteActivity(userId: string, activityId: string) {
    logger.info(`Deleting Activity from job: ${activityId}`)
    await this.docClient.delete({
      TableName: this.activityTable,
      Key: {
        activityId,
        userId,
      },
    })
  }
}
