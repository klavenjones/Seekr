import * as uuid from 'uuid'
import { ActivityDataAccess } from '../dataLayer/ActivityDataAccess'

import { Activity } from '../models/Activity'
import { ActivityUpdate } from '../models/ActivityUpdate'

import { CreateActivityRequest } from '../requests/CreateActivityRequest'
import { UpdateActivityRequest } from '../requests/UpdateActivityRequest'

import { createLogger } from '../utils/logger'

const logger = createLogger('Activity')

const dataAccess = new ActivityDataAccess()

//Get Activity
export async function getAllActivities(userId: string): Promise<Activity[]> {
  logger.info(`Retrieving all Activities for user ${userId}`, { userId })
  return await dataAccess.getAllActivities(userId)
}

//Get All Activities Associated with a job
export async function getAllJobActivities(jobId: string): Promise<Activity[]> {
  logger.info(`Retrieving all activities for user ${jobId}`, { jobId })
  return await dataAccess.getAllJobActivities(jobId)
}

//Get All Activities Associated with user by Type
export async function getAllActivitiesByType(
  userId: string,
  type: string
): Promise<Activity[]> {
  logger.info(`Retrieving all activitie types for user ${userId}`, { userId })
  return await dataAccess.getAllActivitiesByType(userId, type)
}

//Get one activity
export async function getActivity(
  activityId: string,
  userId: string
): Promise<Activity> {
  logger.info(`Retrieving a single activities for user ${userId}`, { userId })
  return await dataAccess.getActivity(userId, activityId)
}

//Create Activity
export async function createActivity(
  userId: string,
  createActivityRequest: CreateActivityRequest,
  jobId?: string
): Promise<Activity> {
  const activityId = uuid.v4()
  //If job ID is present
  if (jobId) {
    const newItem: Activity = {
      userId,
      activityId,
      jobId,
      createdAt: new Date().toISOString(),
      ...createActivityRequest,
    }

    logger.info(
      `Creating activity ${activityId} associated with job ${jobId} for ${userId}`,
      {
        userId,
        jobId,
        activity: newItem,
      }
    )

    await dataAccess.createActivity(newItem)
    return newItem
  }

  const newItem: Activity = {
    userId,
    activityId,
    createdAt: new Date().toISOString(),
    ...createActivityRequest,
  }

  logger.info(`Creating activity ${activityId} for user ${userId}`, {
    userId,
    activityId,
    activity: newItem,
  })

  await dataAccess.createActivity(newItem)
  return newItem
}

//Update Activity
export async function updateActivity(
  userId: string,
  activityId: string,
  updateActivityRequest: UpdateActivityRequest
) {
  logger.info(`Updating activity ${activityId} for user ${userId}`, {
    userId,
    activityId,
    activityUpdate: updateActivityRequest,
  })

  const item = await dataAccess.getActivity(userId, activityId)

  if (!item) throw new Error('Item not found') //404

  if (item.userId !== userId) {
    logger.error(
      `User ${userId} does not have permission to update activity ${activityId}`
    )
    throw new Error('User is not authorized to update item') // 403
  }

  dataAccess.updateActivity(
    activityId,
    userId,
    updateActivityRequest as ActivityUpdate
  )
}
//Delete Activity
export async function deleteActivity(userId: string, activityId: string) {
  logger.info(`Deleting activity ${activityId} for user ${userId}`, {
    userId,
    activityId,
  })

  const item = await dataAccess.getActivity(userId, activityId)

  if (!item) throw new Error('Item not found') // FIXME: 404?

  if (item.userId !== userId) {
    logger.error(
      `User ${userId} does not have permission to delete activity ${activityId}`
    )
    throw new Error('User is not authorized to delete item') // FIXME: 403?
  }

  dataAccess.deleteActivity(userId, activityId)
}
