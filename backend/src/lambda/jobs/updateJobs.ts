import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { UpdateJobsRequest } from '../../requests/UpdateJobsRequest'
import { updateJob } from '../../businessLogic/Jobs'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../../utils/getUserId'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('updateTodo')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing updateTodo event', { event })

    // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
    
    // const userId = '8cbb4b6d-93a5-4c42-82fe-fa05ae3a3466'
    const userId = getUserId(event)
    const jobId = event.pathParameters.jobId
    const updatedJob: UpdateJobsRequest = JSON.parse(event.body)
    logger.info('Processing updateTodo request', { ...updatedJob })

    let updatedItem = await updateJob(userId, jobId, updatedJob)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        item: updatedItem,
      }),
    }
  }
)

handler.use(
  cors({
    credentials: true,
  })
)
