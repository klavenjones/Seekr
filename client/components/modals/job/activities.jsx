


export function Activities() {
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
