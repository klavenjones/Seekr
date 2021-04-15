import { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function JobDropdown({ handleModal, handleType, showModal }) {
  const [show, setShow] = useState(false)

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className='inline-block text-left'>
        <div>
          <button
            type='button'
            onClick={() => setShow(!show)}
            className={`w-8 h-8 inline-flex justify-center rounded-full  items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ${
              show ? 'bg-gray-100' : 'bg-transparent'
            }`}
            id='options-menu'
            aria-expanded='true'
            aria-haspopup='true'
          >
            <span className='sr-only'>Open options</span>
            {/* Heroicon name: solid/dots-vertical */}
            <BsThreeDotsVertical className='h-5 w-5' />
          </button>
        </div>
        <div
          className={`origin-top-right absolute -right-1 sm:-right-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
            show
              ? 'transition ease-out duration-100 transform opacity-100 scale-100 z-100'
              : 'transition ease-in duration-75 transform opacity-0 scale-95'
          }`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <div className='py-1' role='none'>
            <button
              onClick={() => {
                handleModal(!showModal)
                handleType('View')
                setShow(!show)
              }}
              className='block text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              View Job
            </button>
            <button
              onClick={() => {
                handleModal(!showModal)
                handleType('Edit')
                setShow(!show)
              }}
              className='block text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Edit Job
            </button>
            <button
              className='block text-left w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 hover:text-red-700'
              role='menuitem'
            >
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
