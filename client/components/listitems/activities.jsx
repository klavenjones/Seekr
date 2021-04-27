import { useState } from 'react'
import { ActivityDropdown } from '..'
// import { ActivityModal } from '../modals'

export function ActivityItem({ activity }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('edit')
  return (
    <>
      {' '}
      <li className='bg-white shadow flex justify-between items-center px-4 py-4 relative sm:rounded-md'>
        <div className='border border-red-500'>
          <p className='font-medium'>{activity.type}</p>
          <p className='text-gray-400 text-sm'>{activity.end}</p>
        </div>
        <div className='border border-red-500'>
          <p className='font-medium text-left'>{activity.company}</p>
          <p className='text-gray-400 text-sm'>{activity.end}</p>
        </div>
        <div className='flex items-center border border-red-500'>
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
