import { useState } from 'react'
import Select from 'react-select'
import { BsPaperclip } from 'react-icons/bs'
import { useForm, useController } from 'react-hook-form'
import { useSession } from 'next-auth/client'
import { Activities } from './activities'
import { Contacts } from './contacts'
import { Notes } from './notes'
import axios from 'axios'

export function JobForm({ handleShow, show, job }) {
  const { register, handleSubmit, watch, errors, control, reset } = useForm({
    defaultValues: {
      jobTitle: job.title,
      company: job.company,
    },
  })

  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'status',
    control,
    defaultValue: job.status ? job.status : null,
  })

  const onSubmit = (data) => console.log(data)

  return (
    <>
      {' '}
      {/* ROW 1 */}
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
              id='company'
              {...register('company')}
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
              {...register('jobTitle')}
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
              {...register('deadline')}
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
              {...register('jobURL')}
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
              {...register('source')}
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
              {...register('salary')}
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
              placeholder={0.0}
              aria-describedby='salary-currency'
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <span className='text-gray-500 sm:text-sm' id='salary-currency'>
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
              {...register('location')}
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
            {/* <Controller
                name='status'
                control={control}
                defaultValue={false}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
                onChange={([selected]) => {
                  // React Select return object instead of value for selection
                  return { value: selected }
                }}
                as={Select}
              /> */}
            <Select
              {...inputProps}
              inputRef={ref}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              isSearchable={false}
              name='status'
              id='status'
              placeholder='Select Job Status'
            />
          </div>
        </div>
      </div>
      {/* ROW 4 */}
      <div className='grid grid-cols-1 gap-4 py-2 my-3 sm:grid-cols-3'>
        <div>
          <label
            htmlFor='resume'
            className='block text-sm font-medium text-gray-700'
          >
            Resume
          </label>
          <div className='mt-1'>
            <input
              type='file'
              name='resume'
              id='resume'
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='Brooklyn, NY'
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
              {...register('description')}
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='Brief Description'
            ></textarea>
          </div>
        </div>
      </div>
      <div className='mt-8 sm:mt-6 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
          onClick={handleSubmit(onSubmit)}
          className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'
        >
          Save
        </button>
        <button
          type='button'
          onClick={() => handleShow(!show)}
          className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export function EditJob({ handleShow, show, job }) {
  const [tabs, setTab] = useState('Info')

  return (
    <>
      <div className='sm:flex sm:items-start'>
        <div className='mt-3 text-center  space-y-1 space-y-2 sm:mt-0  sm:text-left'>
          <h3
            className='text-2xl sm:text-3xl leading-6 font-medium text-gray-900'
            id='modal-title'
          >
            Web Developer
          </h3>
          <p className='text-lg font-regular text-gray-900' id='modal-title'>
            Company name
          </p>
          <div className='mt-6'></div>
        </div>
      </div>
      {/* Tabs */}
      <div className='mt-3 mb-2'>
        <div className='sm:hidden'>
          <label htmlFor='tabs' className='sr-only'>
            Select a tab
          </label>
          <select
            id='tabs'
            name='tabs'
            onChange={(e) => setTab(e.target.value)}
            className='block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
          >
            <option selected={tabs === 'Info'}>Job Info</option>
            <option selected={tabs === 'Activities'}>Activities</option>
            <option selected={tabs === 'Notes'}>Notes</option>
            <option selected={tabs === 'Contacts'}>Contacts</option>
          </select>
        </div>
        <div className='hidden sm:block'>
          <nav className='flex space-x-4' aria-label='Tabs'>
            {/* Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" */}
            <button
              onClick={() => setTab('Info')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Info'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Job Info
            </button>
            <button
              onClick={() => setTab('Activities')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Activities'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Activities
            </button>
            <button
              onClick={() => setTab('Notes')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Notes'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
              aria-current='page'
            >
              Notes
            </button>
            <button
              onClick={() => setTab('Contacts')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Contacts'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Contacts
            </button>
          </nav>
        </div>
      </div>
      {tabs === 'Info' && (
        <JobForm handleShow={handleShow} show={show} job={job} />
      )}
      {tabs === 'Activities' && (
        <Activities handleShow={handleShow} show={show} />
      )}
      {tabs === 'Contacts' && <Contacts handleShow={handleShow} show={show} />}
      {tabs === 'Notes' && <Notes handleShow={handleShow} show={show} />}
    </>
  )
}

export function AddJob({ handleShow, show }) {
  const { register, handleSubmit, watch, errors, control, reset } = useForm()
  const [session, loading] = useSession()
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'status',
    control,
    defaultValue: '',
  })

  const onSubmit = async (data) => {
    let response = await axios.post('/api/jobs/create', data)
    reset({ company: '', jobTitle: '', status: '' })
    handleShow(false)
  }

  return (
    <>
      <div className=''>
        <div className='mt-3 text-center space-y-1 sm:mt-0 '>
          <h3
            className='text-2xl sm:text-3xl leading-6 font-medium text-gray-900'
            id='modal-title'
          >
            Add Job
          </h3>

          <div className='mt-6'></div>
        </div>
      </div>
      {/* ROW 1 */}
      <div className='grid grid-cols-1 gap-4 py-2 my-3'>
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
              {...register('company')}
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
              {...register('jobTitle')}
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='Web Developer'
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
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              isSearchable={false}
              name='status'
              id='status'
              placeholder='Select Job Status'
            />
          </div>
        </div>
      </div>
      <div className='mt-8 sm:mt-6 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
          onClick={handleSubmit(onSubmit)}
          className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'
        >
          Save
        </button>
        <button
          type='button'
          onClick={() => handleShow(!show)}
          className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
        >
          Cancel
        </button>
      </div>
    </>
  )
}

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
                {job.salary ? `$${job.salary}` : 'Not Assigned'}
              </dd>
            </div>
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>Description</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                {job.description ? job.description : ''}
              </dd>
            </div>
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>Resume</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                <ul className='rounded-md space-y-0'>
                  <li className='pl- pr-4 py-3 flex items-center justify-between text-sm'>
                    <div className='w-0 flex-1 flex items-center'>
                      <BsPaperclip className='flex-shrink-0 h-5 w-5 text-gray-600' />
                      <span className='ml-2 flex-1 w-0 truncate'>
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
