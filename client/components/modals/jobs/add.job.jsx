import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { useForm, useController } from 'react-hook-form'
import Select from 'react-select'
import { refreshData } from '../../../lib'

export function AddJob({ setOpen }) {
  const { register, handleSubmit, errors, control, reset } = useForm()
  const [session, loading] = useSession()
  const router = useRouter()
  const url = 'https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/jobs'

  const {
    user: { userId }
  } = session

  const {
    field: { ref, ...inputProps }
  } = useController({
    name: 'status',
    control
  })

  const addJob = async (data) => {
    try {
      const {
        company,
        jobTitle,
        status: { value }
      } = data

      let newJob = {
        userId: userId,
        title: jobTitle,
        company: company,
        status: value
      }

      let response = await axios.post(url, newJob)

      reset({ company: '', jobTitle: '', status: '' })
      setOpen(false)
      refreshData(router)
    } catch (error) {
      console.log(error.message)
    }
  }

  const onSubmit = (data) => console.log(data)

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
      <div className='inline-block w-full align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:p-6'>
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
        <div className='bg-white sm:rounded-lg'>
          <div className='mt-6 px-3 py-3'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Add Job
            </h3>
          </div>
          <div className='px-4 py-3'>
            <div className='grid grid-cols-1 gap-4 py-2 my-3 sm:grid-cols-4 relative'>
              {/* Row 1 */}
              <div className='col-span-1 sm:col-span-2'>
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
                    {...register('company')}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Company Name'
                  />
                </div>
              </div>
              {/* Row 2 */}
              <div className='col-span-1 sm:col-span-2'>
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
                    {...register('jobTitle')}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Web Developer'
                  />
                </div>
              </div>
              {/* Row 3 */}
              <div className='col-span-1 sm:col-span-4'>
                <label
                  htmlFor='status'
                  className='block text-sm font-medium text-gray-700'
                >
                  Status
                </label>
                <div className='mt-1 relative'>
                  <Select
                    {...inputProps}
                    inputRef={ref}
                    options={[
                      { value: 'wishlist', label: 'Wishlist' },
                      { value: 'applied', label: 'Applied' },
                      { value: 'interviews', label: 'Interviews' },
                      { value: 'offers', label: 'Offers' },
                      { value: 'rejected', label: 'Rejected' },
                      { value: 'ghosted', label: 'Ghosted' }
                    ]}
                    className='z-20 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    isSearchable={false}
                    name='status'
                    placeholder='Select Job Status'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='grid gap-4 grid-cols-2 mt-10 sm:mt-6'>
            <button
              type='button'
              className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none  sm:text-sm'
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type='button'
              className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-500 text-base font-medium text-white hover:bg-teal-700 focus:outline-none  sm:text-sm'
              onClick={handleSubmit(addJob)}
            >
              Add Job
            </button>
          </div>
        </div>
      </div>
    </Transition.Child>
  )
}
