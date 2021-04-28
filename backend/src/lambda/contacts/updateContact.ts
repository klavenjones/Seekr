import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { UpdateContactsRequest } from '../../requests/UpdateContactsRequest'
import { updateContact } from '../../businessLogic/Contacts'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../../utils/getUserId'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('updateTodo')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing updateTodo event', { event })

    // TODO: Update a TODO item with the provided id using values in the "updatedContact" object
    const userId = getUserId(event)
    // const userId = event.pathParameters.userId
    const contactId = event.pathParameters.contactId
    const updatedContact: UpdateContactsRequest = JSON.parse(event.body)

    await updateContact(userId, contactId, updatedContact)

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
