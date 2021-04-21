import axios from 'axios'
import { usePrevious } from './usePrevious'
import { useEffect, useState, useReducer } from 'react'

export function useJobs(status) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshed, setRefreshed] = useState(0)
  const [, forceUpdate] = useReducer((x) => x + 1, 0) // FORCE UPDATE HACK


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
    setRefreshed((refreshed) => refreshed + 1)
  }

  const deleteJob = async (jobId) => {
    try {
      await axios.delete(`/api/jobs/delete`, {
        data: {
          jobId: jobId,
        },
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(async () => {
    fetchJobsByStatus(status)
  }, [])

  return { jobs, editJob, deleteJob, loading }
}
