import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { useForm, useController } from 'react-hook-form'
import Select from 'react-select'

export function EditJob({ job, setOpen }) {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return <h1>Loading</h1>

  const {
    user: { userId },
  } = session

  const { register, handleSubmit, watch, errors, control, reset } = useForm({
    defaultValues: {
      jobTitle: job.title ? job.title : null,
      company: job.company ? job.company : null,
      deadline: job.deadline ? job.deadline : null,
      location: job.location ? job.location : null,
      url: job.url ? job.url : null,
      platform: job.platform ? job.platform : null,
      salary: job.salary ? job.salary : null,
      company: job.company ? job.company : null,
      description: job.description ? job.description : null,
      status: {
        value: job.status ? job.status : null,
        label: job.status
          ? `${job.status.charAt(0).toUpperCase()}${job.status.slice(1)}` //Capitilize Letter
          : null,
      },
    },
  })

  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'status',
    control,
  })

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const editJob = async (data) => {
    try {
      const updateUrl = `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/jobs/${job.jobId}`

      const {
        jobTitle,
        company,
        deadline,
        location,
        url,
        source,
        salary,
        description,
        status: { value },
      } = data

      let updatedJob = {
        ...data,
        userId: userId,
        jobId: job.jobId,
        title: jobTitle,
        status: value,
        platform: source,
        description: description,
        url: url,
        salary: salary,
      }

      let response = await axios.put(updateUrl, updatedJob)
      reset()
      setOpen(false)
      refreshData()
      
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
          <div className='mt-6 px-3 py-3'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Edit Job
            </h3>
          </div>
          <div className='px-4 py-3'>
            {/* Row 1 */}
            <div className='grid grid-cols-1 gap-4 py-2 my-3 sm:grid-cols-2 '>
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
                    {...register('company')}
                    className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
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
                    {...register('jobTitle')}
                    className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='Web Developer'
                  />
                </div>
              </div>
            </div>
            {/* Row 2 */}
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
                    {...register('salary')}
                    className='focus:ring-teal-500 focus:border-teal-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                    placeholder={'0.0'}
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
                    {...register('location')}
                    className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
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
                    {...inputProps}
                    inputRef={ref}
                    options={[
                      { value: 'wishlist', label: 'Wishlist' },
                      { value: 'applied', label: 'Applied' },
                      { value: 'interviews', label: 'Interviews' },
                      { value: 'offers', label: 'Offers' },
                      { value: 'rejected', label: 'Rejected' },
                      { value: 'ghosted', label: 'Ghosted' },
                    ]}
                    className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    isSearchable={false}
                    name='status'
                    placeholder='Select Job Status'
                  />
                </div>
              </div>
            </div>
            {/* Row 3 */}
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
                    {...register('deadline')}
                    className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
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
                    name='url'
                    {...register('url')}
                    className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
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
                    name='platform'
                    {...register('platform')}
                    className='shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    placeholder='LinkedIn'
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
              onClick={handleSubmit(editJob)}
            >
              Save Job
            </button>
          </div>
        </div>
      </div>
    </Transition.Child>
  )
}
