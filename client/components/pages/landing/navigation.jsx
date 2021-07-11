import { signIn } from 'next-auth/client'
import { useState } from 'react'

export default function HomeNavigation() {
  const [show, setShow] = useState(false)

  return (
    <header className='relative'>
      <div className='bg-gray-900 pt-6'>
        <nav
          className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
          aria-label='Global'
        >
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='#'>
                <span className='sr-only'>Seekr</span>
                {/* <img className='h-10 w-auto sm:w-16 sm:h-16' src='seekr.svg' alt='Logo' /> */}
              </a>
              {/* <div className='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                  aria-expanded='false'
                  onClick={() => setShow(!show)}
                >
                  <span className='sr-only'>Open main menu</span>

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
              </div> */}
            </div>
            {/* <div className='hidden space-x-8 md:flex md:ml-10'>
              <a
                href='#'
                className='text-base font-medium text-white hover:text-gray-300'
              >
                Product
              </a>
              <a
                href='#'
                className='text-base font-medium text-white hover:text-gray-300'
              >
                Features
              </a>
              <a
                href='#'
                className='text-base font-medium text-white hover:text-gray-300'
              >
                Marketplace
              </a>
              <a
                href='#'
                className='text-base font-medium text-white hover:text-gray-300'
              >
                Company
              </a>
            </div> */}
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <button
              onClick={() => signIn()}
              className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700'
            >
              Sign up free
            </button>
          </div>
        </nav>
      </div>
      {/* <div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden ${
          show
            ? 'duration-150 ease-out opacity-100 scale-100'
            : 'duration-100 ease-in opacity-0 scale-95 delay-100'
        }`}
      >
        <div
          className={
            'rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'
          }
        >
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg'
                alt='logo'
              />
            </div>
            <div className='-mr-2'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'
                onClick={() => setShow(!show)}
              >
                <span className='sr-only'>Close menu</span>

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
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
         <div className='pt-5 pb-6'>
            <div className='px-2 space-y-1'>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
              >
                Product
              </a>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
              >
                Features
              </a>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
              >
                Marketplace
              </a>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
              >
                Company
              </a>
            </div>
            <div className='mt-6 px-5'>
              <a
                href='#'
                className='block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700'
              >
                Start free trial
              </a>
            </div>
            <div className='mt-6 px-5'>
              <p className='text-center text-base font-medium text-gray-500'>
                Existing customer?{' '}
                <a href='#' className='text-gray-900 hover:underline'>
                  Login
                </a>
              </p>
            </div>
          </div> 
        </div>
      </div> */}
    </header>
  )
}
