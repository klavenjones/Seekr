import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { getAllJobs } from '../../businessLogic/Jobs'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../../utils/getUserId'

import * as middy from 'middy'
import { cors } from 'middy/middlewares'

const logger = createLogger('getJobs')

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing getTodos event', { event })
    // TODO: Get all TODO items for a current user
    
    // const userId = '8cbb4b6d-93a5-4c42-82fe-fa05ae3a3466'
    const userId = getUserId(event)
    const jobs = await getAllJobs(userId)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        items: jobs,
      }),
    }
  }
)

handler.use(
  cors({
    credentials: true,
  })
)
