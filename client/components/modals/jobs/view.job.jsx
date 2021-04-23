import React from 'react'

export function ViewJob({ job }) {
  return (
    <>
      <div className='bg-white overflow-hidden sm:rounded-lg'>
        <div className='px-3 py-5'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            {job.title}
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>{job.company}</p>
        </div>
        <div className='px-3 py-5'>
          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Company</dt>
              <dd className='mt-1 text-sm text-gray-900'>{job.company}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Job Title</dt>
              <dd className='mt-1 text-sm text-gray-900'>{job.title}</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Post URL</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {job.url ? job.url : 'Not Assigned'}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Source</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {job.platform ? job.platform : 'Not Assigned'}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Location</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {job.location ? job.location : 'Not Assigned'}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Status</dt>
              <dd className='mt-1 text-sm text-gray-900 capitalize'>
                {job.status ? job.status : 'Not Assigned'}
              </dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Salary</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {job.salary ? `${job.salary}` : 'Not Assigned'}
              </dd>
            </div>
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>Description</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {job.description ? job.description : ''}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
