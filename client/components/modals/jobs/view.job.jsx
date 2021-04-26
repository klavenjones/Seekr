import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export function ViewJob({ job, setOpen }) {
  return (
    <Transition.Child
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
      enterTo='opacity-100 translate-y-0 sm:scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 translate-y-0 sm:scale-100'
      leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
    >
      <div className='inline-block w-full align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:p-6'>
        <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-4'>
          <button
            type='button'
            className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
            onClick={() => setOpen(false)}
          >
            <span className='sr-only'>Close</span>
            <XIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='bg-white overflow-hidden sm:rounded-lg'>
          <div className='mt-6 px-3 py-5'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              {job.title}
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              {job.company}
            </p>
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
                  ${job.salary ? job.salary : 'Not Assigned'}
                </dd>
              </div>
              <div className='sm:col-span-2'>
                <dt className='text-sm font-medium text-gray-500'>
                  Description
                </dt>
                <dd className='mt-1 text-sm text-gray-900'>
                  {job.description ? job.description : ''}
                </dd>
              </div>
            </dl>
          </div>
          <div className='mt-10 sm:mt-6'>
            <button
              type='button'
              className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none  sm:text-sm'
              onClick={() => setOpen(false)}
            >
              Go back to dashboard
            </button>
          </div>
        </div>
      </div>
    </Transition.Child>
  )
}
