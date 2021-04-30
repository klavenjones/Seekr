import { useState } from 'react'
import { useSession } from 'next-auth/client'
import { Navigation } from '../navigation'
import { ActivityList } from '../listitems'
import { ActivityModal } from '../modals'
import { Loader } from '../loader'
import Select from 'react-select'

export function Activities({ activities, jobs }) {
  const [session, loading] = useSession()
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('add')
  const [query, setQuery] = useState('')

  function filter(rows) {
    if (query === 'all') {
      return activities
    }
    return rows.filter((row) => row.type.toLowerCase().indexOf(query) > -1)
  }

  if (loading) return <Loader />

  return (
    <>
      <ActivityModal open={open} setOpen={setOpen} type={type} jobs={jobs} />
      <Navigation page='Activities' />
      {/* Page Header */}
      <header className='bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto mt-6 md:flex md:items-center md:justify-between'>
            <div className='flex-1 min-w-0'>
              <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
                Activities
              </h2>
            </div>
            <div className='mt-4 flex md:mt-0 md:ml-4'>
              <button
                type='button'
                onClick={() => {
                  setOpen(true)
                  setType('add')
                }}
                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
              >
                Add Activity
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Filter */}
      <div>
        <div className='max-w-7xl mx-auto py-3 sm:px-6 lg:px-8'>
          {/* Replace with your content */}
          <div className='px-4 py-2 sm:px-0'>
            {/* Content Container */}
            <div className='max-w-5xl mx-auto'>
              {/* Job List */}
              <div className='mt-3 grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='col-span-4'>
                  <h2 className='sm:text-lg font-medium text-gray-400 uppercase'>
                    Filter Activities
                  </h2>
                </div>
                <div>
                  <label
                    htmlFor='filter_status'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Status
                  </label>
                  <div className='mt-3'>
                    <Select
                      options={[
                        {
                          value: 'all',
                          label: 'All',
                        },
                        {
                          value: 'on site interview',
                          label: 'On Site Interview',
                        },
                        { value: 'apply', label: 'Apply' },
                        { value: 'follow up', label: 'Follow up' },
                        {
                          value: 'prep cover letter',
                          label: 'Prep Cover Letter',
                        },
                        { value: 'prep resume', label: 'Prep Resume' },
                        { value: 'reach out', label: 'Reach out' },
                        {
                          value: 'prep for interview',
                          label: 'Prep For Interview',
                        },
                        {
                          value: 'phone interview',
                          label: 'Phone Interview',
                        },
                        {
                          value: 'offer received',
                          label: 'Offer received',
                        },
                        {
                          value: 'accept offer',
                          label: 'Accept offer',
                        },
                        {
                          value: 'decline offer',
                          label: 'Decline offer',
                        },
                        {
                          value: 'rejected',
                          label: 'Rejected',
                        },
                        {
                          value: 'rejected',
                          label: 'Rejected',
                        },
                        {
                          value: 'send thank you',
                          label: 'Send thank you',
                        },
                        {
                          value: 'email',
                          label: 'Email',
                        },
                        {
                          value: 'meeting',
                          label: 'Meeting',
                        },
                        {
                          value: 'phone call',
                          label: 'Phone call',
                        },
                        {
                          value: 'get reference',
                          label: 'Get reference',
                        },
                        {
                          value: 'send availability',
                          label: 'Send Availability',
                        },
                        {
                          value: 'assignment',
                          label: 'Assignment',
                        },
                        {
                          value: 'networking event',
                          label: 'Networking event',
                        },
                        {
                          value: 'other',
                          label: 'Other',
                        },
                        {
                          value: 'application withdrawn',
                          label: 'Application Withdrawn',
                        },
                      ]}
                      onChange={(data) => setQuery(data.value)}
                      className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
                      isSearchable={false}
                      name='filter_status'
                      placeholder='Select Activity Type'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <main className='pb-20'>
        <div className='max-w-7xl mx-auto  sm:px-6 lg:px-8'>
          {/* Replace with your content */}
          <div className='px-4 sm:px-0'>
            {/* Content Container */}
            <div className='max-w-5xl mx-auto'>
              {/* Activity List */}
              <ul className='mt-3 grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2'>
                <ActivityList activities={filter(activities)} jobs={jobs} />
              </ul>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  )
}
