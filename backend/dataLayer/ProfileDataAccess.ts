// Importing AWS components
import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
//Import Models
import { Profile } from '../models/Profile'
import { ProfileUpdate } from '../models/ProfileUpdate'
//Import Logger
import { createLogger } from '../utils/logger'

const logger = createLogger('profileDataAccess')
export class ProfileDataAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly profileTable = process.env.PROFILE_TABLE
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
  //Update Profile
  async updateProfile(userId: string, profileUpdate: ProfileUpdate) {
    logger.info(`Updating profile for user: ${userId}`)
    await this.docClient
      .update({
        TableName: this.profileTable,
        Key: {
          userId,
        },
        UpdateExpression:
          'set #name = :name, #email = :email, #location = :location, #title = :title',
        ExpressionAttributeNames: {
          '#name': 'name',
        },
        ExpressionAttributeValues: {
          ':name': profileUpdate.name,
          ':email': profileUpdate.email,
          ':location': profileUpdate.location,
          ':title': profileUpdate.title,
        },
      })
      .promise()
  }
  //Delete Profile
  async deleteProfile(userId: string) {
    logger.info(`Deleting Profile for user: ${userId}`)
    await this.docClient.delete({
      TableName: this.profileTable,
      Key: {
        userId,
      },
    })
  }
  //Update Photo
  async updateAttachmentURL(userId: string, url: string) {
    logger.info(`Uploading photo attachment in todo into ${this.profileTable}`)

    await this.docClient
      .update({
        TableName: this.profileTable,
        Key: {
          userId,
        },
        UpdateExpression: 'set profilePhotoUrl = :url',
        ExpressionAttributeValues: {
          ':url': url,
        },
      })
      .promise()
  }
}
