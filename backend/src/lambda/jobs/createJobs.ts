import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import 'source-map-support/register'

import * as uuid from 'uuid'
import { CreateJobsRequest } from '../../requests/CreateJobsRequest'
import { createJob } from '../../businessLogic/Jobs'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../../utils/getUserId'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('createJob')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing createJob event', { event })

    const userId = getUserId(event)
    // const userId = uuid.v4()
    // const userId = '8cbb4b6d-93a5-4c42-82fe-fa05ae3a3466'
    const newJobs: CreateJobsRequest = JSON.parse(event.body)
    const newItem = await createJob(userId, newJobs)

    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        item: newItem,
      }),
    }
  }
)

handler.use(
  cors({
    credentials: true,
  })
)
