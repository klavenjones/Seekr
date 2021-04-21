import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import { useJobs } from '../../../hooks/useJobs'
import { JobList } from '../../../listitems'
import { Loader } from '../../../loader'

export function Offers() {
  const { jobs, loading } = useJobs('offers')
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
          Job Offers
        </h2>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {loading ? <Loader /> : <JobList jobs={jobs} />}
        </ul>
      </div>
    </>
  )
}
