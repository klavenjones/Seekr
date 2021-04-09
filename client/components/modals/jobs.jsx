import { useState } from 'react'
import Select from 'react-select'

export default function JobModal({ show, handleShow }) {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div
        className={`fixed inset-0 overflow-y-auto ${
          show ? 'visible z-101' : 'invisible z-10'
        }`}
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          {/* Background overlay */}
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              show
                ? 'ease-out duration-300 opacity-100'
                : 'ease-in duration-200 opacity-0'
            }`}
            aria-hidden='true'
          />
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            ​
          </span>
          {/*
        Modal panel, show/hide based on modal state.
        
        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            */}
          <div
            className={`inline-block w-full align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6 ${
              show
                ? 'ease-out duration-300 opacity-100 -translate-y-10 sm:scale-100'
                : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            }`}
          >
            <div className='flex justify-end items-center py-1'>
              <button
                type='button'
                onClick={() => handleShow(!show)}
                className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='sr-only'>Close</span>
                {/* Heroicon name: outline/x */}
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center sm:mt-0  sm:text-left'>
                <h3
                  className='text-lg leading-6 font-medium text-gray-900'
                  id='modal-title'
                >
                  Add Job
                </h3>
                <div className='mt-6'></div>
              </div>
            </div>
            {/* Form */}
            {/* ROW 1 */}
            <div className='grid grid-cols-1 gap-4 py-2 my-3 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium text-gray-700'
                >
                  Company
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='company'
                    id='company'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Company Name'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='jobTitle'
                  className='block text-sm font-medium text-gray-700'
                >
                  Job Title
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='jobTitle'
                    id='jobTitle'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Web Developer'
                  />
                </div>
              </div>
            </div>
            {/* ROW 2 */}
            <div className='grid grid-cols-1 gap-4 py-2 my-3 sm:grid-cols-3'>
              <div>
                <label
                  htmlFor='deadline'
                  className='block text-sm font-medium text-gray-700'
                >
                  Deadline
                </label>
                <div className='mt-1'>
                  <input
                    type='date'
                    name='deadline'
                    id='deadline'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='01/22/22'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='jobURL'
                  className='block text-sm font-medium text-gray-700'
                >
                  Post URL
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='jobURL'
                    id='jobURL'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='https://jobposting.com'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='source'
                  className='block text-sm font-medium text-gray-700'
                >
                  Source
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='source'
                    id='source'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='LinkedIN'
                  />
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className='grid grid-cols-1 gap-4 py-2 my-3 sm:grid-cols-3'>
              <div>
                <label
                  htmlFor='salary'
                  className='block text-sm font-medium text-gray-700'
                >
                  Salary
                </label>
                <div className='mt-1 relative rounded-md shadow-sm'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <span className='text-gray-500 sm:text-sm'>$</span>
                  </div>
                  <input
                    type='text'
                    name='salary'
                    id='salary'
                    className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                    placeholder={0.0}
                    aria-describedby='salary-currency'
                  />
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <span
                      className='text-gray-500 sm:text-sm'
                      id='salary-currency'
                    >
                      USD
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor='location'
                  className='block text-sm font-medium text-gray-700'
                >
                  Location
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='location'
                    id='location'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Brooklyn, NY'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='status'
                  className='block text-sm font-medium text-gray-700'
                >
                  Status
                </label>
                <div className='mt-1'>
                  <Select
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    isSearchable={false}
                    name='status'
                    id='status'
                    placeholder='Select Job Status'
                  />
                </div>
              </div>
            </div>
            {/* Row 4 */}
            <div className='grid grid-cols-1 gap-4 py-2 my-3'>
              <div>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <div className='mt-1'>
                  <textarea
                    name='description'
                    id='description'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Brief Description'
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='mt-8 sm:mt-6 sm:flex sm:flex-row-reverse'>
              <button
                type='button'
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
              >
                Deactivate
              </button>
              <button
                type='button'
                className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
