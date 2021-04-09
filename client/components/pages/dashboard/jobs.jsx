import { useState } from 'react'
import JobModal from '../../modals/jobs'

function WishList() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
          Applied Jobs
        </h2>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-indigo-600 text-white text-sm font-medium rounded-l-md'>
              GA
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Graph API
                </a>
                <p className='text-gray-500'>16 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
function Applied() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
          Applied Jobs
        </h2>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md'>
              GA
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Graph API
                </a>
                <p className='text-gray-500'>16 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
function Interviews() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
          Jobs with pending interviews
        </h2>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md'>
              GA
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Graph API
                </a>
                <p className='text-gray-500'>16 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
function Offers() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
          Job Offers
        </h2>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md'>
              GA
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Graph API
                </a>
                <p className='text-gray-500'>16 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-yellow-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-black text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

function Rejected() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
          Jobs that rejected me
        </h2>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md'>
              GA
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Graph API
                </a>
                <p className='text-gray-500'>16 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

function Ghosted() {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
          Jobs that Ghosted
        </h2>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md'>
              GA
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Graph API
                </a>
                <p className='text-gray-500'>16 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className='col-span-1 flex shadow-sm rounded-md'>
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md'>
              CD
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <a
                  href='#'
                  className='text-gray-900 font-medium hover:text-gray-600'
                >
                  Component Design
                </a>
                <p className='text-gray-500'>12 Members</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

function renderJobPage(tab) {
  switch (tab) {
    case 'Applied':
      return <Applied />
      break
    case 'Interviews':
      return <Interviews />
      break
    case 'Offers':
      return <Offers />
      break
    case 'Rejected':
      return <Rejected />
      break
    case 'Ghosted':
      return <Ghosted />
      break

    default:
      return <WishList />
      break
  }
}

export default function Jobs() {
  const [tabs, setTab] = useState('Wishlist')
  const [show, setShow] = useState(false)
  return (
    <>
      <JobModal show={show} handleShow={setShow} />
      <div className='py-8'>
        {/* Header */}
        <div className='md:flex md:items-center md:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
              Jobs
            </h2>
          </div>
          <div className='mt-4 flex md:mt-0 md:ml-4'>
            <button
              onClick={() => setShow(!show)}
              type='button'
              className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Add Job
            </button>
          </div>
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
              value={tabs}
              onChange={(e) => setTab(e.target.value)}
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
              <button
                onClick={() => setTab('Wishlist')}
                className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                  tabs === 'Wishlist'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500'
                }`}
              >
                Wishlist
              </button>
              <button
                onClick={() => setTab('Applied')}
                className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                  tabs === 'Applied'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500'
                }`}
              >
                Applied
              </button>
              <button
                onClick={() => setTab('Interviews')}
                className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                  tabs === 'Interviews'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500'
                }`}
                aria-current='page'
              >
                Interviews
              </button>
              <button
                onClick={() => setTab('Offers')}
                className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                  tabs === 'Offers'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500'
                }`}
              >
                Offers
              </button>
              <button
                onClick={() => setTab('Rejected')}
                className={`text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md ${
                  tabs === 'Rejected'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500'
                }`}
              >
                Rejected
              </button>
              <button
                onClick={() => setTab('Ghosted')}
                className={`px-3 py-2 font-medium text-sm rounded-md ${
                  tabs === 'Ghosted'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500'
                }`}
              >
                Ghosted
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
          {/* Replace with your content */}
          <div className='py-4'>{renderJobPage(tabs)}</div>
          {/* /End replace */}
        </div>
      </div>
    </>
  )
}
