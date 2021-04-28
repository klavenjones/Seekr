import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { getAllContacts } from '../../businessLogic/Contacts'
import { createLogger } from '../../utils/logger'
// import { getUserId } from '../../utils/getUserId'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('getContacts')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing getTodos event', { event })
    // TODO: Get all TODO items for a current user
    // const userId = getUserId(event)
    const userId = event.pathParameters.userId
    const contacts = await getAllContacts(userId)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        items: contacts,
      }),
    }
  }
)

handler.use(
  cors({
    credentials: true,
  })
)
