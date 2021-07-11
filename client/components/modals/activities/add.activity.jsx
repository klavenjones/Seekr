import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { useForm, useController } from 'react-hook-form'
import Select from 'react-select'
import { refreshData } from '../../../lib'

export function AddActivity({ setOpen, jobs }) {
  const { register, handleSubmit, errors, control, reset } = useForm()
  const [session, loading] = useSession()
  const router = useRouter()
  const url =
    'https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/activity'

  const jobsData = jobs.map((item, i) => {
    return {
      value: item.title,
      label: item.title,
      jobId: item.jobId,
      company: item.company
    }
  })

  const {
    user: { userId }
  } = session

  const {
    field: { ref, ...inputProps }
  } = useController({
    name: 'type',
    control
  })

  const {
    field: { jobRef, ...jobInputProps }
  } = useController({
    name: 'job',
    control
  })

  const addActivity = async (data) => {
    try {
      const {
        note,
        title,
        end,
        type: { label }
      } = data

      let newActivity = {
        userId: userId,
        title: title,
        end: end,
        note: note,
        type: label
      }

      await axios.post(url, newActivity)
      reset()
      setOpen(false)
      refreshData(router)
    } catch (error) {
      console.log(error.message)
    }
  }

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
              Add Activity
            </h3>
          </div>
          <div className='px-4 py-3'>
            <div className='grid grid-cols-1 gap-6 py-2 my-3 sm:grid-cols-4 relative'>
              {/* Row 1 */}
              <div className='col-span-1 sm:col-span-4'>
                <label
                  htmlFor='title'
                  className='block text-sm font-medium text-gray-700'
                >
                  Title
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='title'
                    {...register('title')}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Activity  Title'
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className='col-span-1 sm:col-span-4'>
                <label
                  htmlFor='type'
                  className='block text-sm font-medium text-gray-700'
                >
                  Type
                </label>
                <div className='mt-1 relative'>
                  <Select
                    {...inputProps}
                    inputRef={ref}
                    options={[
                      {
                        value: 'on site interview',
                        label: 'On Site Interview'
                      },
                      { value: 'apply', label: 'Apply' },
                      { value: 'follow up', label: 'Follow up' },
                      {
                        value: 'prep cover letter',
                        label: 'Prep Cover Letter'
                      },
                      { value: 'prep resume', label: 'Prep Resume' },
                      { value: 'reach out', label: 'Reach out' },
                      {
                        value: 'prep for interview',
                        label: 'Prep For Interview'
                      },
                      {
                        value: 'phone interview',
                        label: 'Phone Interview'
                      },
                      {
                        value: 'offer received',
                        label: 'Offer received'
                      },
                      {
                        value: 'accept offer',
                        label: 'Accept offer'
                      },
                      {
                        value: 'decline offer',
                        label: 'Decline offer'
                      },
                      {
                        value: 'rejected',
                        label: 'Rejected'
                      },
                      {
                        value: 'rejected',
                        label: 'Rejected'
                      },
                      {
                        value: 'send thank you',
                        label: 'Send thank you'
                      },
                      {
                        value: 'email',
                        label: 'Email'
                      },
                      {
                        value: 'meeting',
                        label: 'Meeting'
                      },
                      {
                        value: 'phone call',
                        label: 'Phone call'
                      },
                      {
                        value: 'get reference',
                        label: 'Get reference'
                      },
                      {
                        value: 'send availability',
                        label: 'Send Availability'
                      },
                      {
                        value: 'assignment',
                        label: 'Assignment'
                      },
                      {
                        value: 'networking event',
                        label: 'Networking event'
                      },
                      {
                        value: 'other',
                        label: 'Other'
                      },
                      {
                        value: 'application withdrawn',
                        label: 'Application Withdrawn'
                      }
                    ]}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    isSearchable={false}
                    name='type'
                    placeholder='Select Job Status'
                  />
                </div>
              </div>
              <div className='col-span-1 sm:col-span-2'>
                <label
                  htmlFor='type'
                  className='block text-sm font-medium text-gray-700'
                >
                  Job
                </label>
                <div className='mt-1 relative'>
                  <Select
                    {...jobInputProps}
                    inputRef={jobRef}
                    options={jobsData}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    isSearchable={false}
                    name='job'
                    placeholder='Select Job'
                  />
                </div>
              </div>
              {/* Row 3 */}
              <div className='col-span-1 sm:col-span-2'>
                <label
                  htmlFor='deadline'
                  className='block text-sm font-medium text-gray-700'
                >
                  Deadline
                </label>
                <div className='mt-1'>
                  <input
                    type='date'
                    name='end'
                    {...register('end')}
                    className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='01/22/22'
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className='col-span-1 sm:col-span-4'>
                <label
                  htmlFor='note'
                  className='block text-sm font-medium text-gray-700'
                >
                  Note
                </label>
                <div className='mt-1'>
                  <textarea
                    type='text'
                    name='note'
                    {...register('note')}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Web Developer'
                  ></textarea>
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
              onClick={handleSubmit(addActivity)}
            >
              Add Activity
            </button>
          </div>
        </div>
      </div>
    </Transition.Child>
  )
}
