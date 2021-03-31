import * as uuid from 'uuid'

import { ResumeDataAccess } from '../dataLayer/ResumeDataAccess'
import { ResumeBucketStorage } from '../dataLayer/BucketStorage'
import { Resume } from '../models/Resume'
import { ResumeUpdate } from '../models/ResumeUpdate'

import { CreateResumeRequest } from '../requests/CreateResumeRequest'
import { UpdateResumeRequest } from '../requests/UpdateResumeRequest'
import { createLogger } from '../utils/logger'

const logger = createLogger('Resume')

const dataAccess = new ResumeDataAccess()
const storage = new ResumeBucketStorage()

//Get Resume
export async function getResume(userId: string, resumeId: string): Promise<Resume> {
  logger.info(`Retrieving user resumefor user ${userId}`, { userId })
  return await dataAccess.getResume(userId, resumeId)
}

//Create Resume
export async function createResume(
  userId: string,
  createResumeRequest: CreateResumeRequest,
  jobId?: string
): Promise<Resume> {
  const resumeId = uuid.v4()
  //If job Id exists
  if (jobId) {
    const newItem: Resume = {
      userId,
      resumeId,
      jobId,
      createdAt: new Date().toISOString(),
      url: null,
      ...createResumeRequest,
    }

    logger.info(`Creating todo for user ${userId}`, {
      userId,
      resume: newItem,
    })
    await dataAccess.createResume(newItem)
    return newItem
  }

  const newItem: Resume = {
    userId,
    resumeId,
    createdAt: new Date().toISOString(),
    url: null,
    ...createResumeRequest,
  }

  logger.info(`Creating todo for user ${userId}`, {
    userId,
    resume: newItem,
  })
  await dataAccess.createResume(newItem)
  return newItem
}


//Update Resume
export async function updateResume(
  userId: string,
  resumeId: string,
  updateResumeRequest: UpdateResumeRequest
) {
  logger.info(`Updating resume ${resumeId} for user ${userId}`, {
    userId,
    resumeId,
    updateResume: updateResumeRequest,
  })

  const item = await dataAccess.getResume(userId, resumeId)

  if (!item) throw new Error('Item not found') //404

  if (item.userId !== userId) {
    logger.error(
      `User ${userId} does not have permission to update todo ${resumeId}`
    )
    throw new Error('User is not authorized to update item') // 403
  }

  dataAccess.updateResume(userId, updateResumeRequest as ResumeUpdate)
}


//Delete Resume
export async function deleteTodo(userId: string, resumeId: string) {
  logger.info(`Deleting resume for user ${userId}`, { userId })

  const item = await dataAccess.getResume(userId, resumeId)

  if (!item) throw new Error('Item not found') // FIXME: 404?

  if (item.userId !== userId) {
    logger.error(`User ${userId} does not have permission to delete resume`)
    throw new Error('User is not authorized to delete item') // FIXME: 403?
  }

  dataAccess.deleteResume(userId, resumeId)
}

//Update Resume URL
export async function updateAttachmentUrl(
  userId: string,
  resumeId: string,
  attachmentId: string
) {
  logger.info(`Generating attachment URL for attachment ${attachmentId}`)

  const attachmentUrl = await storage.getAttachmentUrl(attachmentId)

  logger.info(`Updating resume  with attachment URL ${attachmentUrl}`, {
    userId,
    resumeId,
    attachmentId,
  })

  const item = await dataAccess.getResume(userId, resumeId)

  if (!item) throw new Error('Item not found') //404

  if (item.userId !== userId) {
    logger.error(`User ${userId} does not have permission to update resume`)
    throw new Error('User is not authorized to update item') //403
  }
  await dataAccess.updateAttachmentURL(userId, item.resumeId, attachmentUrl)
}


//Generate Url
export async function generateUploadUrl(attachmentId: string): Promise<string> {
  logger.info(`Generating upload URL for attachment ${attachmentId}`)
  const uploadUrl = await storage.getUploadUrl(attachmentId)
  return uploadUrl
}
