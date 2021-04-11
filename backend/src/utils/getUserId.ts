import { APIGatewayProxyEvent } from 'aws-lambda'

/**
 * Get a user id from an API Gateway event
 * @param event an event from API Gateway
 *
 * @returns a user id from the client
 */

export function getUserId(event: APIGatewayProxyEvent): string {
  const data = JSON.parse(event.body)
  const userId = data.userId
  return userId
}
