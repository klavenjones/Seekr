import { useState } from 'react'
import { ActivityDropdown } from '..'
import {
  CalendarIcon,
  ClipboardCheckIcon,
  TagIcon,
  BriefcaseIcon,
} from '@heroicons/react/solid'
import { ActivityModal } from '../modals'

export function ActivityItem({ activity }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('edit')
  return (
    <>
      <ActivityModal
        open={open}
        setOpen={setOpen}
        type={type}
        activity={activity}
      />
      <li className='bg-white shadow-sm border flex justify-between items-center px-4 py-4 relative sm:rounded-md'>
        <div>
          <p className='font-medium text-gray-600'>
            {activity.title ? activity.title : activity.type}
          </p>
          <div className='mt-2 sm:flex sm:justify-around'>
            <div className='sm:flex sm:space-x-3'>
              <p className='flex items-center text-xs text-gray-500'>
                <TagIcon
                  className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                {activity.type}
              </p>

              <p className='mt-2 flex items-center text-xs text-gray-500 sm:mt-0'>
                <BriefcaseIcon
                  className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                {activity.type}
              </p>

              <p className='mt-2 flex items-center text-xs text-gray-500 sm:mt-0'>
                <CalendarIcon
                  className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                {activity.type}
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <ActivityDropdown
            openModal={setOpen}
            modalType={setType}
            activity={activity}
          />
        </div>
      </li>
    </>
  )
}

export function ActivityList({ activities }) {
  return (
    <>
      {activities.map((activity, i) => (
        <ActivityItem activity={activity} key={i} />
      ))}
    </>
  )
}
