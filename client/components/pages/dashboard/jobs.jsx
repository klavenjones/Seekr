import { useState } from 'react'

export default function Jobs() {
  const [tabs, setTab] = useState('Wishlist')
  return (
    <div className='py-6'>
      {/* Header */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1>
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
            className='block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
          >
            <option selected={tabs === 'Wishlist'}>Wishlist</option>
            <option selected={tabs === 'Applied'}>Applied</option>
            <option selected={tabs === 'Interview'}>Interview</option>
            <option selected={tabs === 'Offer'}>Offer</option>
            <option selected={tabs === 'Rejected'}>Rejected</option>
            <option selected={tabs === 'Ghosted'}>Ghosted</option>
          </select>
        </div>
        <div className='hidden sm:block'>
          <nav className='flex space-x-4' aria-label='Tabs'>
            {/* Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" */}
            <a
              href='#'
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Wishlist'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Wishlist
            </a>
            <a
              href='#'
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Applied'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Applied
            </a>
            <a
              href='#'
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Interviews'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
              aria-current='page'
            >
              Interviews
            </a>
            <a
              href='#'
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Offers'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Offers
            </a>
            <a
              href='#'
              className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Rejected'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Rejected
            </a>
            <a
              href='#'
              className={`px-3 py-2 font-medium text-sm rounded-md ${
                tabs === 'Ghosted'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500'
              }`}
            >
              Ghosted
            </a>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        {/* Replace with your content */}
        <div className='py-4'>
          <div className='border-4 border-dashed border-gray-200 rounded-lg h-96' />
        </div>
        {/* /End replace */}
      </div>
    </div>
  )
}
