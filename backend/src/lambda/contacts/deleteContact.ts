import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { deleteContact } from '../../businessLogic/Contacts'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../../utils/getUserId'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('deleteContact')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing deleteContact event', { event })
    const userId = getUserId(event)
    // const userId = event.pathParameters.userId
    const contactId = event.pathParameters.contactId

    // TODO: Remove a TODO item by id
    await deleteContact(userId, contactId)

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
