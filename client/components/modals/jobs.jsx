import { useState } from 'react'
import Select from 'react-select'
import { BsPaperclip, BsX } from 'react-icons/bs'
import { FaPhoneAlt, FaEnvelope, FaEdit } from 'react-icons/fa'

function Activities() {
  return (
    <>
      <fieldset>
        <legend className='sr-only'>Activities</legend>
        <div className='relative rounded-md space-y-3'>
          <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-4'>
            <div className='flex items-center text-xs'>
              <input
                type='checkbox'
                name='completed'
                defaultValue='Startup'
                className='h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                aria-labelledby='pricing-plans-0-label'
                aria-describedby='pricing-plans-0-description-0 pricing-plans-0-description-1'
              />
              <span
                id='pricing-plans-0-label'
                className='ml-3 font-medium text-gray-900'
              >
                Activity Name
              </span>
            </div>
            <p
              id='pricing-plans-0-description-0'
              className='ml-6 pl-1 text-xs   md:ml-0 md:pl-0 md:text-center'
            >
              {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
              <span className='text-gray-900 font-medium'>Web Developer</span>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <span className='text-gray-500 ml-2'>(Google)</span>
            </p>
            <p
              id='pricing-plans-0-description-0'
              className='ml-6 pl-1 text-xs md:ml-0 md:pl-0 md:text-center'
            >
              {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
              <span className='text-gray-900 font-medium'>Activity Type</span>
            </p>
            {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
            <p
              id='pricing-plans-0-description-1'
              className='text-gray-400 ml-6 pl-1 text-xs md:ml-0 md:pl-0 md:text-right'
            >
              Due 4/30/2021
            </p>
          </label>
          <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-4'>
            <div className='flex items-center text-xs '>
              <input
                type='checkbox'
                name='completed'
                defaultValue='Startup'
                className='h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                aria-labelledby='pricing-plans-0-label'
                aria-describedby='pricing-plans-0-description-0 pricing-plans-0-description-1'
              />
              <span
                id='pricing-plans-0-label'
                className='ml-3 font-medium text-gray-900'
              >
                Activity Name
              </span>
            </div>
            <p
              id='pricing-plans-0-description-0'
              className='ml-6 pl-1 text-xs md:ml-0 md:pl-0 md:text-center'
            >
              {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
              <span className='text-gray-900 font-medium'>Web Developer</span>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <span className='text-gray-500 ml-2'>(Google)</span>
            </p>
            <p
              id='pricing-plans-0-description-0'
              className='ml-6 pl-1 text-xs md:ml-0 md:pl-0 md:text-center'
            >
              {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
              <span className='text-gray-900 font-medium'>Activity Type</span>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
            </p>
            {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
            <p
              id='pricing-plans-0-description-1'
              className='text-gray-400 ml-6 pl-1 text-xs md:ml-0 md:pl-0 md:text-right'
            >
              Due 4/30/2021
            </p>
          </label>
        </div>
      </fieldset>
    </>
  )
}



function Notes() {
  const [note, setNote] = useState(false)

  const NoteForm = () => {
    return (
      <div className='mb-3'>
        <label
          htmlFor='description'
          className='block text-sm font-medium text-gray-700'
        >
          Note
        </label>
        <div className='mt-1'>
          <textarea
            name='description'
            id='description'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='Add a Note'
          ></textarea>
          <div className='mt-2 flex md:justify-end'>
            <button
              type='button'
              onClick={() => setNote(false)}
              className='w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
            >
              Discard
            </button>
            <button
              type='button'
              className='w-full ml-2 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }

  const NoteButton = () => {
    return (
      <div className='flex md:justify-start'>
        <button
          type='button'
          onClick={() => setNote(true)}
          className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500  sm:w-auto sm:text-sm'
        >
          New Note
        </button>
      </div>
    )
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-4 my-4 py-2'>
        {note ? <NoteForm handleNote={setNote} /> : <NoteButton />}
      </div>
      <div>
        <p className='max-w-2xl text-sm text-gray-500'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          molestiae nemo praesentium quis assumenda, quaerat illo quo error
          reprehenderit, provident reiciendis nam culpa explicabo! Hic veniam
          corporis possimus rem! Praesentium?
        </p>
      </div>
    </>
  )
}





function Contacts() {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6'>
      {/* Contact Item */}

      <li className='col-span-1 bg-white rounded-lg border divide-y divide-gray-200'>
        <div className='w-full flex items-center justify-between p-6 space-x-6'>
          <div className='flex-1 truncate'>
            <div className='flex items-center space-x-3'>
              <h3 className='text-gray-900 text-sm font-medium truncate'>
                Jane Cooper
              </h3>
              <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                Admin
              </span>
            </div>
            <p className='mt-1 text-gray-500 text-sm truncate'>
              Regional Paradigm Technician
            </p>
          </div>
          <img
            className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
            alt
          />
        </div>
        <div>
          <div className='-mt-px flex divide-x divide-gray-200'>
            <div className='w-0 flex-1 flex'>
              <a
                href='mailto:janecooper@example.com'
                className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/mail */}
                <FaEnvelope className='w-5 h-5 text-gray-400' />
                <span className='ml-3'>Email</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-202-555-0170'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <FaPhoneAlt className='w-5 h-5 text-gray-400' />

                <span className='ml-3'>Call</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-202-555-0170'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <FaEdit className='w-5 h-5 text-gray-400' />
                <span className='ml-3'>Edit</span>
              </a>
            </div>
          </div>
        </div>
      </li>
      <li className='col-span-1 bg-white rounded-lg border divide-y divide-gray-200'>
        <div className='w-full flex items-center justify-between p-6 space-x-6'>
          <div className='flex-1 truncate'>
            <div className='flex items-center space-x-3'>
              <h3 className='text-gray-900 text-sm font-medium truncate'>
                Jane Cooper
              </h3>
              <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                Admin
              </span>
            </div>
            <p className='mt-1 text-gray-500 text-sm truncate'>
              Regional Paradigm Technician
            </p>
          </div>
          <img
            className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
            alt
          />
        </div>
        <div>
          <div className='-mt-px flex divide-x divide-gray-200'>
            <div className='w-0 flex-1 flex'>
              <a
                href='mailto:janecooper@example.com'
                className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/mail */}
                <FaEnvelope className='w-5 h-5 text-gray-400' />
                <span className='ml-3'>Email</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-202-555-0170'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <FaPhoneAlt className='w-5 h-5 text-gray-400' />

                <span className='ml-3'>Call</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-202-555-0170'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <FaEdit className='w-5 h-5 text-gray-400' />
                <span className='ml-3'>Edit</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

function JobForm({ handleShow, show }) {
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
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='Brief Description'
            ></textarea>
          </div>
        </div>
      </div>
      <div className='mt-8 sm:mt-6 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
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

function EditJob({ handleShow, show }) {
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
      {tabs === 'Info' && <JobForm handleShow={handleShow} show={show} />}
      {tabs === 'Activities' && (
        <Activities handleShow={handleShow} show={show} />
      )}
      {tabs === 'Contacts' && <Contacts handleShow={handleShow} show={show} />}
      {tabs === 'Notes' && <Notes handleShow={handleShow} show={show} />}
    </>
  )
}

function AddJob({ handleShow, show }) {
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
      <div className='mt-8 sm:mt-6 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
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




function ViewJob() {
  return (
    <>
      <div className='bg-white overflow-hidden sm:rounded-lg'>
        <div className='px-3 py-5'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Web Developer
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>Google</p>
        </div>
        <div className='px-3 py-5'>
          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Company</dt>
              <dd className='mt-1 text-sm text-gray-900'>Google</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Job Title</dt>
              <dd className='mt-1 text-sm text-gray-900'>Web Developer</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Post URL</dt>
              <dd className='mt-1 text-sm text-gray-900'>https://indeed.com</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Source</dt>
              <dd className='mt-1 text-sm text-gray-900'>Indeed</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Location</dt>
              <dd className='mt-1 text-sm text-gray-900'>Brooklyn, NY</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Status</dt>
              <dd className='mt-1 text-sm text-gray-900'>Wishlist</dd>
            </div>
            <div className='sm:col-span-1'>
              <dt className='text-sm font-medium text-gray-500'>Salary</dt>
              <dd className='mt-1 text-sm text-gray-900'>$80,000-$120,000</dd>
            </div>
            <div className='sm:col-span-2'>
              <dt className='text-sm font-medium text-gray-500'>Description</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
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

export default function JobModal({ show, handleShow, modalType }) {
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
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              show
                ? 'ease-out duration-300 opacity-100'
                : 'ease-in duration-200 opacity-0'
            }`}
            aria-hidden='true'
          />

          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            ​
          </span>

          <div
            className={`inline-block w-full align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-2xl sm:p-6 ${
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

                <BsX className='h-6 w-6' />
              </button>
            </div>
            {/* Modal Form and Title */}

            {modalType === 'Add' && (
              <AddJob handleShow={handleShow} show={show} />
            )}
            {modalType === 'View' && (
              <ViewJob handleShow={handleShow} show={show} />
            )}
            {modalType === 'Edit' && (
              <EditJob handleShow={handleShow} show={show} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
