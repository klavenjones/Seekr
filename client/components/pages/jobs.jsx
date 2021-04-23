import { useState } from 'react'
import { Navigation } from '../navigation'
import { JobList } from '../listitems'
import { JobModal } from '../modals'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Jobs({ jobs }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('add')

  return (
    <div>
      <JobModal open={open} setOpen={setOpen} type={type} />
      <Navigation />
      {/* Page Header */}
      <header className='bg-white'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto mt-6 md:flex md:items-center md:justify-between'>
            <div className='flex-1 min-w-0'>
              <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
                Jobs
              </h2>
            </div>
            <div className='mt-4 flex md:mt-0 md:ml-4'>
              <button
                type='button'
                onClick={() => {
                  setOpen(true)
                  setType('add')
                }}
                className='ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
              >
                Add Job
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Content */}
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          {/* Replace with your content */}
          <div className='px-4 py-4 sm:px-0'>
            {/* Content Container */}
            <div className='max-w-5xl mx-auto'>
              {/* Job List */}
              <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <JobList jobs={jobs} />
              </ul>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}
