import { signIn } from 'next-auth/client'
import React from 'react'

export default function Hero() {
  return (
    <>
      <div className='pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
              <div className='lg:py-24'>
                <a
                  href='#'
                  className='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                >
                  <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full'>
                    What's New
                  </span>
                  <span className='ml-4 text-sm'>
                    Just shipped version 0.1.0
                  </span>
                  {/* Heroicon name: solid/chevron-right */}
                  <svg
                    className='ml-2 w-5 h-5 text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span className='block'>A better way to</span>
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block'>
                    keep track of your job applications
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  Keep track of every detail about your job opportunities
                  regardless of where you found them. Track contacts, notes,
                  dates, tasks, job descriptions, salaries, locations, company
                  data and more.
                </p>
                <div className='mt-10 sm:mt-12'>
                  <div className='sm:max-w-xl sm:mx-auto lg:mx-0'>
                    <div className='sm:flex'>
                      <div className='mt-3 mx-auto sm:mt-0 lg:mx-0'>
                        <button
                          onClick={() => signIn('auth0')}
                          className='block py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg'
                  alt='Hero Image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
