
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { deleteJob } from '../../businessLogic/Jobs'
import { createLogger } from '../../utils/logger'
// import { getUserId } from '../../utils/logger'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('deleteJob')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing deleteJob event', { event })
    // const userId = getUserId(event)
    const userId = event.pathParameters.userId
    const jobId = event.pathParameters.jobId

    // TODO: Remove a TODO item by id
    await deleteJob(userId, jobId)

    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: '',
    }
  }
)

handler.use(
  cors({
    credentials: true,
  })
)
