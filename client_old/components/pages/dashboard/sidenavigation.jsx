import { useState } from 'react'
import { IoBriefcaseOutline, IoListOutline } from 'react-icons/io5'
import { FaUsers, FaPowerOff } from 'react-icons/fa'
import { signOut } from 'next-auth/client'

export default function SideNavigation({ children, handlePage, page }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className='h-screen flex bg-gray-50 overflow-hidden '>
        <div className='lg:hidden'>
          <div
            className={`fixed inset-0 flex transition-all delay-400 ease-linear duration-300 ${
              show ? 'z-30' : '-z-10'
            }`}
          >
            <div
              className={`fixed inset-0 transition-opacity ease-linear duration-300 i  ${
                show ? 'opacity-100 ' : 'opacity-0'
              }`}
              aria-hidden='true'
            >
              <div
                className={'absolute inset-0 bg-gray-600 opacity-75 invisible'}
              />
            </div>
            <div
              tabIndex={0}
              className={`relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none transition ease-in-out duration-300 transform  ${
                show ? 'translate-x-0' : '-translate-x-1000'
              }`}
            >
              <div className='absolute top-0 right-0 -mr-12 pt-4'>
                <button
                  type='button'
                  className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  onClick={() => setShow(!show)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div className='pt-5 pb-4'>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
                    alt='Workflow'
                  />
                </div>
                <nav aria-label='Sidebar' className='mt-5'>
                  <div className='px-2 space-y-1'>
                    <button
                      onClick={() => handlePage('Jobs')}
                      className={`group p-2 rounded-md flex w-full items-center text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                        page === 'Jobs' ? 'bg-gray-100' : 'bg-transparent'
                      }`}
                    >
                      {/* Heroicon name: outline/home */}
                      <IoBriefcaseOutline className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500' />
                      Jobs
                    </button>
                    <button
                      onClick={() => handlePage('Activities')}
                      className={`group p-2 rounded-md flex w-full items-center text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                        page === 'Activities' ? 'bg-gray-100' : 'bg-transparent'
                      }`}
                    >
                      {/* Heroicon name: outline/fire */}
                      <IoListOutline className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500' />
                      Activities
                    </button>

                    <button
                      onClick={() => handlePage('Contacts')}
                      className={`group p-2 rounded-md flex w-full items-center text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${
                        page === 'Contacts' ? 'bg-gray-100' : 'bg-transparent'
                      }`}
                    >
                      <FaUsers className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500' />
                      Contacts
                    </button>

                    <button
                      onClick={() => signOut()}
                      className='group w-full p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      <FaPowerOff className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500' />
                      Logout
                    </button>
                  </div>
                </nav>
              </div>
              <div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
                <a href='#' className='flex-shrink-0 group block'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='inline-block h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
                        alt='User Avatar'
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
                        Lisa Marie
                      </p>
                      <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                        Account Settings
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </div>
        {/* Static sidebar for desktop */}
        <div className='hidden lg:flex lg:flex-shrink-0'>
          <div className='flex flex-col w-28'>
            <div className='flex flex-col h-0 flex-1 overflow-y-auto bg-indigo-600'>
              <div className='flex-1 flex flex-col'>
                <div className='flex-shrink-0 bg-indigo-700 py-4 flex items-center justify-center'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
                    alt='Workflow'
                  />
                </div>
                <div className='flex-1 mt-6 w-full px-2 space-y-1'>
                  {/* Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" */}
                  <button
                    onClick={() => handlePage('Jobs')}
                    className={`text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium ${
                      page === 'Jobs'
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100'
                    }`}
                  >
                    <IoBriefcaseOutline className={'h-6 w-6'} />
                    <span className='mt-2'>Jobs</span>
                  </button>
                  <button
                    onClick={() => handlePage('Activities')}
                    className={`text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium ${
                      page === 'Activities'
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100'
                    }`}
                  >
                    {/* Heroicon name: outline/view-grid */}
                    <IoListOutline className='h-6 w-6' />

                    <span className='mt-2'>Activities</span>
                  </button>
                  <button
                    onClick={() => handlePage('Contacts')}
                    className={`text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium ${
                      page === 'Contacts'
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100'
                    }`}
                    aria-current='page'
                  >
                    <FaUsers className='h-6 w-6' />
                    <span className='mt-2'>Contacts</span>
                  </button>
                  <button
                    onClick={() => signOut()}
                    className='text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                    aria-current='page'
                  >
                    {/* Heroicon name: outline/photograph */}
                    <FaPowerOff className='text-indigo-300 h-6 w-6' />
                    <span className='mt-2'>Logout</span>
                  </button>
                </div>
              </div>

              <div className='flex-shrink-0 flex pb-5'>
                <a href='#' className='flex-shrink-0 w-full'>
                  <img
                    className='block mx-auto h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
                    alt="User Avatar"
                  />
                  <div className='sr-only'>
                    <p>Lisa Marie</p>
                    <p>Account settings</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-1 min-w-0 flex flex-col overflow-hidden'>
          {/* Mobile top navigation */}
          <div className='lg:hidden'>
            <div className='bg-indigo-600 py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8'>
              <div>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
                  alt='Workflow'
                />
              </div>
              <div className={`${show ? 'z-0' : 'z-100'}`}>
                <button
                  type='button'
                  className={
                    '-mr-3 h-12 w-12 inline-flex items-center justify-center bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white '
                  }
                  onClick={() => setShow(!show)}
                >
                  <span className='sr-only'>Open sidebar</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <main className='flex-1 flex overflow-hidden'>
            <div className='flex-1 flex xl:overflow-hidden'>
              {/* Primary column */}
              <section
                aria-labelledby='primary-heading'
                className='min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last'
              >
                <h1 id='primary-heading' className='sr-only'>
                  Jobs
                </h1>
                {children}
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
