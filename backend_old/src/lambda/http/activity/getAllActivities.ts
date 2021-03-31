import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { getAllActivities } from '../../../businessLogic/Activity'
import { createLogger } from '../../../utils/logger'
import { getUserId } from '../../utils'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('getActivities')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing getTodos event', { event })
    // TODO: Get all TODO items for a current user
    const userId = getUserId(event)
    const activities = await getAllActivities(userId)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        items: activities,
      }),
    }
  }
)

handler.use(
  cors({
    credentials: true,
  })
)
