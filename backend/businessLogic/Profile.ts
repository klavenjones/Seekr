
import { ProfileDataAccess } from '../dataLayer/ProfileDataAccess'
import { UserBucketStorage } from '../dataLayer/BucketStorage'
import { Profile } from '../models/Profile'
import { ProfileUpdate } from '../models/ProfileUpdate'

import { CreateProfileRequest } from '../requests/CreateProfileRequest'
import { UpdateProfileRequest } from '../requests/UpdateProfileRequest'
import { createLogger } from '../utils/logger'

const logger = createLogger('Todos')

const dataAccess = new ProfileDataAccess()
const storage = new UserBucketStorage()

export async function getTodos(userId: string): Promise<Profile> {
  logger.info(`Retrieving user profilefor user ${userId}`, { userId })
  return await dataAccess.getProfile(userId)
}

export async function createProfile(
  userId: string,
  createProfileRequest: CreateProfileRequest
): Promise<Profile> {
  const newItem: Profile = {
    userId,
    createdAt: new Date().toISOString(),
    profilePhotoUrl: null,
    ...createProfileRequest,
  }

  logger.info(`Creating todo for user ${userId}`, {
    userId,
    profile: newItem,
  })

  await dataAccess.createProfile(newItem)

  return newItem
}

export async function updateTodo(
  userId: string,
  todoId: string,
  updateProfileRequest: UpdateProfileRequest
) {
  logger.info(`Updating todo ${todoId} for user ${userId}`, {
    userId,
    todoId,
    updateProfile: updateProfileRequest,
  })

  const item = await dataAccess.getProfile(userId)

  if (!item) throw new Error('Item not found') //404

  if (item.userId !== userId) {
    logger.error(
      `User ${userId} does not have permission to update todo ${todoId}`
    )
    throw new Error('User is not authorized to update item') // 403
  }

  dataAccess.updateProfile(userId, updateProfileRequest as ProfileUpdate)
}


export async function deleteTodo(userId: string) {
  logger.info(`Deleting profile for user ${userId}`, { userId })

  const item = await dataAccess.getProfile(userId)

  if (!item) throw new Error('Item not found') // FIXME: 404?

  if (item.userId !== userId) {
    logger.error(`User ${userId} does not have permission to delete profile`)
    throw new Error('User is not authorized to delete item') // FIXME: 403?
  }

  dataAccess.deleteProfile(userId)
}

export async function updateAttachmentUrl(
  userId: string,
  attachmentId: string
) {
  logger.info(`Generating attachment URL for attachment ${attachmentId}`)

  const attachmentUrl = await storage.getAttachmentUrl(attachmentId)

  logger.info(`Updating todo  with attachment URL ${attachmentUrl}`, {
    userId,
    attachmentId,
  })

  const item = await dataAccess.getProfile(userId)

  if (!item) throw new Error('Item not found') //404

  if (item.userId !== userId) {
    logger.error(`User ${userId} does not have permission to update profile`)
    throw new Error('User is not authorized to update item') //403
  }
  await dataAccess.updateAttachmentURL(userId, attachmentUrl)
}

export async function generateUploadUrl(attachmentId: string): Promise<string> {
  logger.info(`Generating upload URL for attachment ${attachmentId}`)
  const uploadUrl = await storage.getUploadUrl(attachmentId)
  return uploadUrl
}
