import { BsX } from 'react-icons/bs'
import { AddJob, ViewJob, EditJob } from './jobs'

export default function JobModal({ show, handleShow, modalType }) {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div
        className={`fixed inset-0 overflow-y-auto ${
          show ? 'visible z-101' : 'invisible z-10'
        }`}
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              show
                ? 'ease-out duration-300 opacity-100'
                : 'ease-in duration-200 opacity-0'
            }`}
            aria-hidden='true'
          />

          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            ​
          </span>

          <div
            className={`inline-block w-full align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-2xl sm:p-6 ${
              show
                ? 'ease-out duration-300 opacity-100 -translate-y-10 sm:scale-100'
                : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            }`}
          >
            <div className='flex justify-end items-center py-1'>
              <button
                type='button'
                onClick={() => handleShow(!show)}
                className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='sr-only'>Close</span>

                <BsX className='h-6 w-6' />
              </button>
            </div>
            {/* Modal Form and Title */}

            {modalType === 'Add' && (
              <AddJob handleShow={handleShow} show={show} />
            )}
            {modalType === 'View' && (
              <ViewJob handleShow={handleShow} show={show} />
            )}
            {modalType === 'Edit' && (
              <EditJob handleShow={handleShow} show={show} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
