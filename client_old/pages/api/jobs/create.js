// This is an example of to protect an API route
import { getSession } from 'next-auth/client'
import axios from 'axios'

const url = 'https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/jobs'

export default async (req, res) => {
  const session = await getSession({ req })
  const {
    user: { userId },
  } = session

  const {
    company,
    jobTitle,
    status: { value },
  } = req.body

  if (session) {
    //Add Job
    let response = await axios.post(url, {
      userId: userId,
      company: company,
      title: jobTitle,
      status: value,
    })
    res.send({ success: 'Successfully created user', user: response.data })
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    })
  }
}
