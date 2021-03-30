import * as uuid from 'uuid'
import { JobsDataAccess } from '../dataLayer/JobsDataAccess'

import { Jobs } from '../models/Jobs'
import { JobsUpdate } from '../models/JobsUpdate'

import { CreateJobsRequest } from '../requests/CreateJobsRequest'
import { UpdateJobsRequest } from '../requests/UpdateJobsRequest'

import { createLogger } from '../utils/logger'

const logger = createLogger('Jobs')

const dataAccess = new JobsDataAccess()

//Get All Jobs
export async function getAllJobss(userId: string): Promise<Jobs[]> {
  logger.info(`Retrieving all Jobs for user ${userId}`, { userId })
  return await dataAccess.getAllJobs(userId)
}

//Get A Job
export async function getJobs(jobId: string, userId: string): Promise<Jobs> {
  logger.info(`Retrieving a single job for user ${userId}`, { userId })
  return await dataAccess.getJob(jobId, userId)
}

//Create a Job
export async function createJob(
  userId: string,
  createJobRequest: CreateJobsRequest
): Promise<Jobs> {
  const jobId = uuid.v4()

  const newItem: Jobs = {
    userId,
    jobId,
    createdAt: new Date().toISOString(),
    ...createJobRequest,
  }

  logger.info(`Creating Job ${jobId} for ${userId}`, {
    userId,
    jobId,
    job: newItem,
  })

  await dataAccess.createJob(newItem)
  return newItem
}

//Update a job
export async function updateJob(
  userId: string,
  jobId: string,
  updateJobsRequest: UpdateJobsRequest
) {
  logger.info(`Updating Job ${jobId} for user ${userId}`, {
    userId,
    jobId,
    jobUpdateRequest: updateJobsRequest,
  })

  const item = await dataAccess.getJob(userId, jobId)

  if (!item) throw new Error('Item not found') //404

  if (item.userId !== userId) {
    logger.error(
      `User ${userId} does not have permission to update Job ${jobId}`
    )
    throw new Error('User is not authorized to update item') // 403
  }

  dataAccess.updateJob(userId, jobId, updateJobsRequest as JobsUpdate)
}

//Delete Job
export async function deleteJob(userId: string, jobId: string) {
  logger.info(`Deleting job ${jobId} for user ${userId}`, {
    userId,
    jobId,
  })

  const item = await dataAccess.getJob(userId, jobId)

  if (!item) throw new Error('Item not found') // FIXME: 404?

  if (item.userId !== userId) {
    logger.error(
      `User ${userId} does not have permission to delete job ${jobId}`
    )
    throw new Error('User is not authorized to delete item') // FIXME: 403?
  }

  dataAccess.deleteJob(userId, jobId)
}
