// This is an example of to protect an API route
import { getSession } from 'next-auth/client'
import { currencyFormatter } from '../../../util/currencyFormatter'
import axios from 'axios'

export default async (req, res) => {
  const session = await getSession({ req })
  const {
    user: { userId },
  } = session

  const { jobId } = req.body
  console.log("Job ID", jobId)
  const deleteUrl = `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/jobs/${jobId}`

  //Delete Job
  if (session) {
    let response = await axios.delete(deleteUrl, {
      data: {
           userId: userId 
       },
    })
    res.send({ success: 'Successfully created user' })
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    })
  }
}
