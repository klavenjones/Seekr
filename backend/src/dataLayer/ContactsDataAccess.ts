// Importing AWS components
import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
//Import Models
import { Contacts } from '../models/Contacts'
import { ContactsUpdate } from '../models/ContactsUpdate'
//Import Logger
import { createLogger } from '../utils/logger'

const logger = createLogger('ContactsDataAccess')

export class ContactsDataAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly contactsTable = process.env.CONTACTS_TABLE
  ) {}

  //Get All Contacts
  async getAllContacts(userId: string): Promise<Contacts[]> {
    logger.info(`Getting all contacts from the ${this.contactsTable}`)
    const result = await this.docClient
      .query({
        TableName: this.contactsTable,
      })
      .promise()

    const contacts = result.Items

    logger.info(
      `Found ${contacts?.length} from ${this.contactsTable} for the user: ${userId}`
    )

    return contacts as Contacts[]
  }

  //Get All Contacts Associated with a job
  async getAllJobContacts(jobId: string): Promise<Contacts[]> {
    logger.info(
      `Getting all activities from the ${this.contactsTable} associated with this job: ${jobId}`
    )
    const result = await this.docClient
      .query({
        TableName: this.contactsTable,
        KeyConditionExpression: 'jobId = :jobId',
        ExpressionAttributeValues: {
          ':jobId': jobId,
        },
      })
      .promise()

    const contacts = result.Items

    logger.info(
      `Found ${contacts?.length} from ${this.contactsTable} associated with the user: ${jobId}`
    )

    return contacts as Contacts[]
  }

  //GET Contact
  async getContact(contactId: string, userId: string): Promise<Contacts> {
    logger.info(`Getting contacts from this user: ${userId}`)

    const result = await this.docClient
      .get({
        TableName: this.contactsTable,
        Key: {
          userId,
          contactId,
        },
      })
      .promise()

    const contacts = result.Item
    return contacts as Contacts
  }

  //Create Contacts
  async createContact(contacts: Contacts) {
    logger.info(`Putting contacts (${contacts}) into ${this.contactsTable}`)
    await this.docClient
      .put({
        TableName: this.contactsTable,
        Item: contacts,
      })
      .promise()
  }

  //Update Contacts
  async updateContact(
    contactId: string,
    userId: string,
    contactsUpdate: ContactsUpdate
  ) {
    logger.info(`Updating contacts for user: ${userId}`)
    await this.docClient
      .update({
        TableName: this.contactsTable,
        Key: {
          contactId,
          userId,
        },
        UpdateExpression:
          'set #name = :name, #company = :company, #email = :email, #title = :title, #phone = :phone',
        ExpressionAttributeNames: {
          '#name': 'name',
        },
        ExpressionAttributeValues: {
          ':name': contactsUpdate.name,
          ':company': contactsUpdate.company,
          ':email': contactsUpdate.email,
          ':title': contactsUpdate.title,
          ':location': contactsUpdate.location,
          ':phone': contactsUpdate.phone,
        },
      })
      .promise()
  }

  //Delete Contacts
  async deleteContact(contactId: string, userId: string, jobId?: string) {
    logger.info(`Deleting Contacts from job: ${jobId}`)
    await this.docClient.delete({
      TableName: this.contactsTable,
      Key: {
        userId,
        contactId,
        jobId,
      },
    })
  }
}
