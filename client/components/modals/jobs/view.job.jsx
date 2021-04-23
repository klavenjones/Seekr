import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

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
      <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6'>
        <div className='bg-white overflow-hidden sm:rounded-lg'>
          <div className='px-3 py-5'>
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
                  {job.salary ? job.salary : 'Not Assigned'}
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

export function Test() {
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
      <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
        <div>
          <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
            <CheckIcon className='h-6 w-6 text-green-600' aria-hidden='true' />
          </div>
          <div className='mt-3 text-center sm:mt-5'>
            <Dialog.Title
              as='h3'
              className='text-lg leading-6 font-medium text-gray-900'
            >
              Payment successful
            </Dialog.Title>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-5 sm:mt-6'>
          <button
            type='button'
            className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm'
            onClick={() => setOpen(false)}
          >
            Go back to dashboard
          </button>
        </div>
      </div>
    </Transition.Child>
  )
}
