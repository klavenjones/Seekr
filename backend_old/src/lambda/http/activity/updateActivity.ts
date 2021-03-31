import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { UpdateActivityRequest } from '../../../requests/UpdateActivityRequest'
import { updateActivity } from '../../../businessLogic/Activity'
import { createLogger } from '../../../utils/logger'
import { getUserId } from '../../utils'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('updateTodo')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing updateTodo event', { event })

    // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
    const userId = getUserId(event)
    const activityId = event.pathParameters.activityId
    const updatedTodo: UpdateActivityRequest = JSON.parse(event.body)

    await updateActivity(userId, activityId, updatedTodo)

    return {
      statusCode: 200,
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
