// This is an example of to protect an API route
import { getSession } from 'next-auth/client'
import axios from 'axios'

export default async (req, res) => {
  const { status } = req.body
  const session = await getSession({ req })
  const {
    user: { userId },
  } = session
  const url = `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/jobs/status?status=${status}`

  if (session) {
    // Get All Jobs
    let response = await axios.post(url, {
      userId: userId,
    })

    res.send({
      success: 'Successfully got all Jobs',
      jobs: response.data.items,
    })
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    })
  }
}
