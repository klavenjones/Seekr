// This is an example of to protect an API route
import { getSession } from 'next-auth/client'
import { currencyFormatter } from '../../../util/currencyFormatter'
import axios from 'axios'

export default async (req, res) => {
  const session = await getSession({ req })
  const {
    user: { userId },
  } = session

  const {
    jobId,
    jobTitle,
    company,
    deadline,
    location,
    url,
    source,
    salary,
    jobURL,
    description,
    status: { value },
  } = req.body

  const updateUrl = `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/jobs/${jobId}`

  //Update Job
  if (session) {
    let response = await axios.put(updateUrl, {
      ...req.body,
      salary: currencyFormatter(Number(salary)),
      userId: userId,
      jobId: jobId,
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
