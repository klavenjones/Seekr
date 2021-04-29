/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import axios from 'axios'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function JobDropdown({ openModal, modalType, job }) {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return <div></div>

  const {
    user: { userId },
  } = session

  // DECOUPLE
  const refreshData = () => {
    router.replace(router.asPath)
  }
  //DECOUPLE
  const deleteJob = async () => {
    const deleteUrl = `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/jobs/${job.jobId}`

    try {
      await axios.delete(deleteUrl, {
        data: {
          userId: userId,
        },
      })
      refreshData()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Menu as='div' className='inline-block text-left'>
      {({ open }) => (
        <>
          <div>
            <Menu.Button className='flex justify-center w-full px-2 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-teal-500'>
              <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='origin-top-right absolute top-5 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30'
            >
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        openModal(true)
                        modalType('view')
                      }}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-left w-full'
                      )}
                    >
                      View
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        openModal(true)
                        modalType('edit')
                      }}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-left w-full'
                      )}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      type='submit'
                      onClick={() => deleteJob()}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-red-600',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export function ActivityDropdown({ openModal, modalType, activity }) {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return <div></div>

  const {
    user: { userId },
  } = session

  // DECOUPLE
  const refreshData = () => {
    router.replace(router.asPath)
  }
  //DECOUPLE
  const deleteActivity = async () => {
    const deleteUrl = `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/activity/${activity.activityId}`

    try {
      await axios.delete(deleteUrl, {
        data: {
          userId: userId,
        },
      })
      refreshData()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Menu as='div' className='inline-block text-left'>
      {({ open }) => (
        <>
          <div>
            <Menu.Button className='flex justify-center w-full px-2 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-teal-500'>
              <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='origin-top-right absolute top-5 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30'
            >
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        openModal(true)
                        modalType('view')
                      }}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-left w-full'
                      )}
                    >
                      Mark Complete
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        openModal(true)
                        modalType('view')
                      }}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-left w-full'
                      )}
                    >
                      View
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        openModal(true)
                        modalType('edit')
                      }}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-left w-full'
                      )}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      type='submit'
                      onClick={() => deleteActivity()}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-red-600',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
