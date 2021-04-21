import { useState } from 'react'
import JobDropdown from '../dropdowns/dropdown'
import JobModal from '../modals/job'

function JobItem({ job }) {
  const [show, setShow] = useState(false)
  const [type, setType] = useState('Edit')
  return (
    <>
      <JobModal show={show} handleShow={setShow} modalType={type} job={job} />
      <li className='col-span-1 flex shadow-sm rounded-md relative'>
        <div className='flex-shrink-0 flex items-center justify-center w-16 bg-indigo-600 text-white text-sm font-medium rounded-l-md'>
          GA
        </div>
        <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
          <div className='flex-1 px-4 py-2 text-sm truncate'>
            <a
              href='#'
              className='text-gray-900 font-medium hover:text-gray-600'
            >
              {job.title}
            </a>
            <p className='text-gray-500'>{job.company}</p>
          </div>
          <div className='flex-shrink-0 pr-2'>
            <JobDropdown
              handleModal={setShow}
              handleType={setType}
              showModal={show}
              job={job}
            />
          </div>
        </div>
      </li>
    </>
  )
}

export function JobList({ jobs, handleRefresh }) {
  return (
    <>
      {jobs.map((job, i) => (
        <JobItem job={job} />
      ))}
    </>
  )
}
