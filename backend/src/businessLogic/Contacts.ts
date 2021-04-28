import * as uuid from 'uuid'
import { ContactsDataAccess } from '../dataLayer/ContactsDataAccess'

import { Contacts } from '../models/Contacts'
import { ContactsUpdate } from '../models/ContactsUpdate'

import { CreateContactsRequest } from '../requests/CreateContactsRequest'
import { UpdateContactsRequest } from '../requests/UpdateContactsRequest'

import { createLogger } from '../utils/logger'

const logger = createLogger('Contacts')

const dataAccess = new ContactsDataAccess()

//Get All Contacts
export async function getAllContacts(userId: string): Promise<Contacts[]> {
  logger.info(`Retrieving all contacts for user ${userId}`, { userId })
  return await dataAccess.getAllContacts(userId)
}

//Get All Contacts Associated with a job
export async function getAllJobContacts(jobId: string): Promise<Contacts[]> {
  logger.info(`Retrieving all contacts for user ${jobId}`, { jobId })
  return await dataAccess.getAllJobContacts(jobId)
}

//Get Contact
export async function getContact(
  userId: string,
  contactId: string
): Promise<Contacts> {
  logger.info(`Retrieving a single contacts for user ${userId}`, { userId })
  return await dataAccess.getContact(userId, contactId)
}

//Create Contact
export async function createContact(
  userId: string,
  createContactRequest: CreateContactsRequest,
  jobId?: string
): Promise<Contacts> {
  const contactId = uuid.v4()
  //If job ID is present
  if (jobId) {
    const newItem: Contacts = {
      userId,
      contactId,
      jobId,
      createdAt: new Date().toISOString(),
      ...createContactRequest,
    }

    logger.info(
      `Creating contact ${contactId} associated with job ${jobId} for ${userId}`,
      {
        userId,
        jobId,
        contact: newItem,
      }
    )

    await dataAccess.createContact(newItem)
    return newItem
  }

  const newItem: Contacts = {
    userId,
    contactId,
    createdAt: new Date().toISOString(),
    ...createContactRequest,
  }

  logger.info(`Creating contact ${contactId} for user ${userId}`, {
    userId,
    contactId,
    contact: newItem,
  })

  await dataAccess.createContact(newItem)
  return newItem
}

//Update Contact
export async function updateContact(
  userId: string,
  contactId: string,
  updateContactsRequest: UpdateContactsRequest
) {
  logger.info(`Updating contact ${contactId} for user ${userId}`, {
    userId,
    contactId,
    contactUpdate: updateContactsRequest,
  })

  const item = await dataAccess.getContact(userId, contactId)

  if (!item) throw new Error('Item not found') //404

  if (item.userId !== userId) {
    logger.error(
      `User ${userId} does not have permission to update contact ${contactId}`
    )
    throw new Error('User is not authorized to update item') // 403
  }

  dataAccess.updateContact(
    userId,
    contactId,
    updateContactsRequest as ContactsUpdate
  )
}
//Delete Contact
export async function deleteContact(
  userId: string,
  contactId: string,
  jobId?: string
) {
  logger.info(`Deleting contact ${contactId} for user ${userId}`, {
    userId,
    contactId,
  })

  const item = await dataAccess.getContact(userId, contactId)

  if (!item) throw new Error('Item not found') // FIXME: 404?

  if (item.userId !== userId) {
    logger.error(
      `User ${userId} does not have permission to delete contact ${contactId}`
    )
    throw new Error('User is not authorized to delete item') // FIXME: 403?
  }

  dataAccess.deleteContact(userId, contactId)
}
