import axios from 'axios'
import { currencyFormatter } from '../../util/currencyFormatter'
import { useEffect, useState } from 'react'

export function useJobs(status) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshed, setRefreshed] = useState(0)

  const fetchJobsByStatus = async (status) => {
    try {
      let response = await axios.post('/api/jobs/status', {
        status: status,
      })
      setJobs(response.data.jobs)
      setLoading(false)
    } catch (error) {
      console.log('Hook', error.message)
    }
  }

  const editJob = async (jobId, data) => {
    await axios.put('/api/jobs/update', {
      jobId,
      ...data,
    })
  }

  const deleteJob = async (jobId) => {
    await axios.delete('/api/jobs/update')
  }

  useEffect(async () => {
    fetchJobsByStatus(status)
  }, [])

  return { jobs, editJob, loading }
}
