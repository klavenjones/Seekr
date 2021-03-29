// Importing AWS components
import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
//Import Models
import { Profile } from '../models/Profile'
//Import Logger
import { createLogger } from '../utils/logger'

const logger = createLogger('profileDataAccess')
export class ProfileDataAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly profileTable: 'ProfileTable'
  ) {}

  //GET PROFILE
  async getProfile(userId: string): Promise<Profile> {
    logger.info(`Getting profile for this user: ${userId}`)

    const result = await this.docClient
      .get({
        TableName: this.profileTable,
        Key: {
          userId,
        },
      })
      .promise()

    const profile = result.Item
    return profile as Profile
  }
  //Create Profile
  async createProfile(profile: Profile) {
    logger.info(`Creating profile (${profile}) into ${this.profileTable}`)
    await this.docClient
      .put({
        TableName: this.profileTable,
        Item: profile,
      })
      .promise()
  }
}
