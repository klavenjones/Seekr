import { useState } from 'react'

export default function SideNavigation() {
  const [show, setShow] = useState(true)
  return (
    <>
      <div className='h-screen flex bg-gray-50 overflow-hidden'>
        {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
        <div className='lg:hidden'>
          <div
            className={`fixed inset-0 flex ${show ? 'visible' : 'invisible'}`}
          >
            {/*
    Off-canvas menu overlay, show/hide based on off-canvas menu state.
  
    Entering: "transition-opacity ease-linear duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "transition-opacity ease-linear duration-300"
      From: "opacity-100"
      To: "opacity-0"
  */}
            <div
              className={`fixed inset-0 transition-opacity ease-linear duration-300  ${
                show ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden='true'
            >
              <div className='absolute inset-0 bg-gray-600 opacity-75' />
            </div>
            <div
              tabIndex={0}
              className={`relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none transition ease-in-out duration-300 transform ${
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
                    <a
                      href='#'
                      className='group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      {/* Heroicon name: outline/home */}
                      <svg
                        className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500'
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
                          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                        />
                      </svg>
                      Home
                    </a>
                    <a
                      href='#'
                      className='group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      {/* Heroicon name: outline/fire */}
                      <svg
                        className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500'
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
                          d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                        />
                      </svg>
                      Trending
                    </a>
                    <a
                      href='#'
                      className='group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      {/* Heroicon name: outline/bookmark-alt */}
                      <svg
                        className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500'
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
                          d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                      Bookmarks
                    </a>
                    <a
                      href='#'
                      className='group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      {/* Heroicon name: outline/inbox */}
                      <svg
                        className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500'
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
                          d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                        />
                      </svg>
                      Messages
                    </a>
                    <a
                      href='#'
                      className='group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      {/* Heroicon name: outline/user */}
                      <svg
                        className='mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500'
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
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                      Profile
                    </a>
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
                        alt
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
          <div className='flex flex-col w-20'>
            <div className='flex flex-col h-0 flex-1 overflow-y-auto bg-indigo-600'>
              <div className='flex-1 flex flex-col'>
                <div className='flex-shrink-0 bg-indigo-700 py-4 flex items-center justify-center'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
                    alt='Workflow'
                  />
                </div>
                <nav
                  aria-label='Sidebar'
                  className='py-6 flex flex-col items-center space-y-3'
                >
                  <a
                    href='#'
                    className='flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700'
                  >
                    {/* Heroicon name: outline/home */}
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
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>
                    <span className='sr-only'>Home</span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700'
                  >
                    {/* Heroicon name: outline/fire */}
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
                        d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                      />
                    </svg>
                    <span className='sr-only'>Trending</span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700'
                  >
                    {/* Heroicon name: outline/bookmark-alt */}
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
                        d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                      />
                    </svg>
                    <span className='sr-only'>Bookmarks</span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700'
                  >
                    {/* Heroicon name: outline/inbox */}
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
                        d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                      />
                    </svg>
                    <span className='sr-only'>Messages</span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700'
                  >
                    {/* Heroicon name: outline/user */}
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
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                    <span className='sr-only'>Profile</span>
                  </a>
                </nav>
              </div>
              <div className='flex-shrink-0 flex pb-5'>
                <a href='#' className='flex-shrink-0 w-full'>
                  <img
                    className='block mx-auto h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
                    alt
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
              <div>
                <button
                  type='button'
                  className='-mr-3 h-12 w-12 inline-flex items-center justify-center bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
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
                  Account
                </h1>
                {/* Your content */}
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
