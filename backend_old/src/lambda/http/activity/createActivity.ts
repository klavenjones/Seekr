import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as uuid from 'uuid'
import { CreateActivityRequest } from '../../../requests/CreateActivityRequest'
import { createActivity } from '../../../businessLogic/Activity'
import { createLogger } from '../../../utils/logger'
// import { getUserId } from '../../utils'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('createActivity')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing createActivity event', { event })

    // const userId = getUserId(event)
    const userId = uuid.v4()
    const newActivity: CreateActivityRequest = JSON.parse(event.body)
    const newItem = await createActivity(userId, newActivity)

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
