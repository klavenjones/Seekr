import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as uuid from 'uuid'
import { CreateJobsRequest } from '../../requests/CreateJobsRequest'
import { createJob } from '../../businessLogic/Jobs'
import { createLogger } from '../../utils/logger'
// import { getUserId } from '../../utils'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('createJob')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing createJob event', { event })

    // const userId = getUserId(event)
    const userId = uuid.v4()
    const newJobs: CreateJobsRequest = JSON.parse(event.body)
    const newItem = await createJob(userId, newJobs)

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