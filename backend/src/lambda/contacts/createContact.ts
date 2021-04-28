import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as uuid from 'uuid'
import { CreateContactsRequest } from '../../requests/CreateContactsRequest'
import { createContact } from '../../businessLogic/Contacts'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../../utils/getUserId'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('createContact')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing createContact event', { event })

    const userId = getUserId(event)
    const newContact: CreateContactsRequest = JSON.parse(event.body)
    const newItem = await createContact(userId, newContact)

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
