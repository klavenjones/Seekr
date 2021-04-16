import axios from 'axios'
import { useState, useEffect } from 'react'

import { JobList } from '../../../listitems'
import { Loader } from '../../../loader'

export function WishList() {
  const [jobs, setJobs] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    let response = await axios.post('/api/jobs/status', { status: 'wishlist' })
    if (response.data.jobs) {
      setLoading(false)
      setJobs(response.data.jobs)
    }
  }, [])

  useEffect(async () => {
    // let response = await axios.post('/api/jobs/status', { status: 'wishlist' })
    // if (response.data.jobs) {
    //   setLoading(false)
    //   setJobs(response.data.jobs)
    // }
  }, [])

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
          My Wishlist
        </h2>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {loading ? <Loader /> : <JobList jobs={jobs} />}
        </ul>
      </div>
    </>
  )
}
