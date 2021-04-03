
import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { deleteActivity } from '../../businessLogic/Activity'
import { createLogger } from '../../utils/logger'
// import { getUserId } from '../../utils/logger'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('deleteActivity')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing deleteActivity event', { event })
    // const userId = getUserId(event)
    const userId = event.pathParameters.userId
    const activityId = event.pathParameters.activityId

    // TODO: Remove a TODO item by id
    await deleteActivity(userId, activityId)

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
