import { useState } from 'react'

function All() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide my-5'>
          All Activities
        </h2>
        <fieldset>
          <legend className='sr-only'>Activities</legend>
          <div className='relative rounded-md space-y-3'>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
          </div>
        </fieldset>
      </div>
    </>
  )
}
function Applications() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide my-5'>
          Application Activities
        </h2>
        <fieldset>
          <legend className='sr-only'>Application Activities</legend>
          <div className='relative rounded-md space-y-3'>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
          </div>
        </fieldset>
      </div>
    </>
  )
}
function Networking() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide my-5'>
          Networking Activities
        </h2>
        <fieldset>
          <legend className='sr-only'>Application Activities</legend>
          <div className='relative rounded-md space-y-3'>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
          </div>
        </fieldset>
      </div>
    </>
  )
}
function Interviews() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide my-5'>
          Interviewing Activities
        </h2>
        <fieldset>
          <legend className='sr-only'>Interviewing Activities</legend>
          <div className='relative rounded-md space-y-3'>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
          </div>
        </fieldset>
      </div>
    </>
  )
}

function Offers() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide my-5'>
          Offer Activities
        </h2>
        <fieldset>
          <legend className='sr-only'>Offer Activities</legend>
          <div className='relative rounded-md space-y-3'>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
            <label className='border border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-3'>
              <div className='flex items-center text-sm '>
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
                className='ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center'
              >
                {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
                <span className='text-gray-900 font-medium'>Web Developer</span>
                {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
                <span className='text-gray-500 ml-2'>(Google)</span>
              </p>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <p
                id='pricing-plans-0-description-1'
                className='text-gray-400 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
              >
                Due 4/30/2021
              </p>
            </label>
            {/* Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" */}
          </div>
        </fieldset>
      </div>
    </>
  )
}

function renderActivityPage(tab) {
  switch (tab) {
    case 'Networking':
      return <Networking />
      break
    case 'Applications':
      return <Applications />
      break
    case 'Interviews':
      return <Interviews />
      break
    case 'Offers':
      return <Offers />
      break
    default:
      return <All />
      break
  }
}

export default function Activities() {
  const [tabs, setTab] = useState('All')
  return (
    <div className='py-8'>
      {/* Header */}
      <div className='md:flex md:items-center md:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex-1 min-w-0'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
            Acitivities
          </h2>
        </div>
        <div className='mt-4 flex md:mt-0 md:ml-4'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add Activity
          </button>
        </div>
      </div>
      {/* Tabs  */}
      <div className='mt-8 max-w-7xl mx-auto px-4 sm:px-6 '>
        <div className='sm:hidden'>
          <label htmlFor='tabs' className='sr-only'>
            Select a tab
          </label>
          <select
            id='tabs'
            name='tabs'
            value={tabs}
            onChange={(e) => setTab(e.target.value)}
            className='block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
          >
            <option selected={tabs === 'All'}>All</option>
            <option selected={tabs === 'Networking'}>Networking</option>
            <option selected={tabs === 'Applications'}>Applications</option>
            <option selected={tabs === 'Interviews'}>Interview</option>
            <option selected={tabs === 'Offers'}>Offers</option>
          </select>
        </div>
        <div className='hidden sm:block'>
          <nav className='flex space-x-4' aria-label='Tabs'>
            {/* Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" */}
            <button
              onClick={() => setTab('All')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'All'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setTab('Applications')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Applications'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setTab('Networking')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Networking'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Networking
            </button>
            <button
              onClick={() => setTab('Interviews')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Interviews'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
              aria-current='page'
            >
              Interviews
            </button>
            <button
              onClick={() => setTab('Offers')}
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Offers'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Offers
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        {/* Replace with your content */}
        <div className='py-4'>{renderActivityPage(tabs)}</div>
        {/* /End replace */}
      </div>
    </div>
  )
}
