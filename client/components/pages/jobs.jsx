import { Navigation } from '../navigation'
import { JobList } from '../listitems'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Jobs({ jobs }) {
  return (
    <div>
      <Navigation />
      {/* Page Header */}
      <header className='bg-white'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-5xl'>
            <h1 className='text-4xl max-w-5xl font-medium leading-tight text-gray-900'>
              Jobs
            </h1>
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
