import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { UpdateJobsRequest } from '../../requests/UpdateJobsRequest'
import { updateJob } from '../../businessLogic/Jobs'
import { createLogger } from '../../utils/logger'
// import { getUserId } from '../../utils'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('updateTodo')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing updateTodo event', { event })

    // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
    // const userId = getUserId(event)
    const userId = event.pathParameters.userId
    const jobId = event.pathParameters.jobId
    const updatedTodo: UpdateJobsRequest = JSON.parse(event.body)

    await updateJob(userId, jobId, updatedTodo)

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
