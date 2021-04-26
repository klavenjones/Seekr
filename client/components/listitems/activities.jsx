import { useState } from 'react'
// import { JobDropdown } from '..'
// import { ActivityModal } from '../modals'

export function ActivityItem({ activity }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('edit')
  return (
    <>
      {/* <ActivityModal
        open={open}
        setOpen={setOpen}
        activity={activity}
        type={type}
      /> */}
      <fieldset>
        <legend className='sr-only'>Activitity</legend>
        <div className='relative rounded-md space-y-3'>
          <label className='border gap-1 border-gray-300 bg-white rounded-md relative px-4 p-2 flex flex-col cursor-pointer md:pl-2 md:pr-6 md:grid md:grid-cols-8'>
            <div className='flex items-center text-xs col-span-2'>
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
              className='ml-6 pl-1 flex items-center text-xs md:ml-0 md:pl-0 col-span-3'
            >
              {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
              <span className='text-gray-900 font-medium'>Web Developer</span>
              {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
              <span className='text-gray-500 ml-2'>(Google)</span>
            </p>
            <p
              id='pricing-plans-0-description-0'
              className='ml-6 pl-1 col-span-2  flex items-center text-xs md:ml-0 md:pl-0 md:text-left'
            >
              {/* Checked: "text-indigo-900", Not Checked: "text-gray-900" */}
              <span className='text-gray-900 font-medium'>Activity Type</span>
            </p>
            {/* Checked: "text-indigo-700", Not Checked: "text-gray-500" */}
            <p
              id='pricing-plans-0-description-1'
              className='text-gray-400 ml-6 pl-1 text-xs md:ml-0 md:pl-0 md:text-left'
            >
              Due 4/30/2021
            </p>
          </label>
        </div>
      </fieldset>
    </>
  )
}

export function ActivityList({ activitys }) {
  return (
    <>
      {activitys.map((activity, i) => (
        <ActivityItem activity={activity} key={i} />
      ))}
    </>
  )
}
