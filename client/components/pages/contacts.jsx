import { useState } from 'react'
import { useSession } from 'next-auth/client'
import { useForm } from 'react-hook-form'
import { Navigation } from '../navigation'
import { ContactList } from '../listitems'
import { ContactModal } from '../modals'
import { Loader } from '../loader'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Contacts({ contacts, jobs }) {
  const [session, loading] = useSession()
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('add')
  const [query, setQuery] = useState('')
  const { register, handleSubmit, errors, control, reset, watch } = useForm()

  const handleChange = (data) => console.log(data)

  function filter(rows) {
    if (query === '') {
      return contacts
    }
    return rows.filter(
      (row) => row.name.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
    )
  }

  if (loading) return <Loader />

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} type={type} jobs={jobs} />
      <Navigation page='Contacts' />
      {/* Page Header */}
      <header className='bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto mt-6 md:flex md:items-center md:justify-between'>
            <div className='flex-1 min-w-0'>
              <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
                Contacts
              </h2>
            </div>
            <div className='mt-4 flex md:mt-0 md:ml-4'>
              <button
                type='button'
                onClick={() => {
                  setOpen(true)
                  setType('add')
                }}
                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
              >
                Add Contact
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Filter */}
      <div>
        <div className='max-w-7xl mx-auto py-3 sm:px-6 lg:px-8'>
          {/* Replace with your content */}
          <div className='px-4 py-2 sm:px-0'>
            {/* Content Container */}
            <div className='max-w-5xl mx-auto'>
              {/* Job List */}
              <div className='mt-3 grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='col-span-4'>
                  <h2 className='sm:text-lg font-medium text-gray-400 uppercase'>
                    Filter Contacts
                  </h2>
                </div>

                <div className='col-span-4 sm:col-span-1'>
                  <label
                    htmlFor='filter_status'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Client
                  </label>
                  <div className='mt-3'>
                    <input
                      type='text'
                      name='filter_client'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                      placeholder='Contact Name'
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <main className='pb-20'>
        <div className='max-w-7xl mx-auto  sm:px-6 lg:px-8'>
          {/* Replace with your content */}
          <div className='px-4 sm:px-0'>
            {/* Content Container */}
            <div className='max-w-5xl mx-auto'>
              {/* Contact List */}
              <ul className='mt-3 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2'>
                <ContactList contacts={filter(contacts)} jobs={jobs} />
              </ul>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  )
}
