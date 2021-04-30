import { Fragment } from 'react'
import { useSession } from 'next-auth/client'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { signOut } from 'next-auth/client'

const navigation = [
  { name: 'Jobs', href: '/dashboard' },
  { name: 'Activities', href: '/dashboard/activities' },
  { name: 'Contacts', href: '/dashboard/contacts' }
]

const profile = ['Log out']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navigation({ page }) {
  const [session, loading] = useSession()

  return (
    <Disclosure as='nav' className='bg-teal-600'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-20'>
              <div className='flex items-center'>
                <div className='flex-shrink-1'>
                  {/* <img className='h-14 w-14' src='/seekr.svg' alt='Workflow' /> */}
                </div>

                <div className='hidden md:block'>
                  <div className='ml-10 flex items-baseline space-x-4'>
                    {navigation.map((item, itemIdx) =>
                      page === item.name ? (
                        <Fragment key={itemIdx}>
                          <a
                            href={item.href}
                            className='bg-teal-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                          >
                            {item.name}
                          </a>
                        </Fragment>
                      ) : (
                        <Fragment key={itemIdx}>
                          <a
                            href={item.href}
                            className='text-white hover:bg-teal-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium'
                          >
                            {item.name}
                          </a>
                        </Fragment>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className='hidden md:block'>
                <div className='ml-4 flex items-center md:ml-6'>
                  {/* <button className='bg-teal-600 p-1 rounded-full text-cyan-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-600 focus:ring-white'>
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button> */}

                  <Menu as='div' className='ml-3 relative'>
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className='max-w-xs bg-teal-600 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-600 focus:ring-white'>
                            <span className='sr-only'>Open user menu</span>
                            <img
                              className='h-8 w-8 rounded-full'
                              src={`${
                                session?.user.image
                                  ? session?.user.image
                                  : '/avatar.png'
                              }`}
                              alt='Profile Picture'
                            />
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
                            className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                          >
                            {profile.map((item, i) => (
                              <Menu.Item key={i}>
                                {({ active }) =>
                                  item === 'Log out' ? (
                                    <button
                                      onClick={() => signOut()}
                                      className={classNames(
                                        'w-full block px-4 py-2 text-sm text-gray-700 text-left'
                                      )}
                                    >
                                      {item}
                                    </button>
                                  ) : (
                                    <a
                                      href='#'
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      {item}
                                    </a>
                                  )
                                }
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>

              <div className='-mr-2 flex md:hidden'>
                <Disclosure.Button className='bg-teal-600 inline-flex items-center justify-center p-2 rounded-md text-cyan-200 hover:text-white hover:bg-teal-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-600 focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {navigation.map((item, itemIdx) =>
                item.name === page ? (
                  <Fragment key={itemIdx}>
                    <a
                      href={item.href}
                      className='bg-teal-700 text-white block px-3 py-2 rounded-md text-base font-medium'
                    >
                      {item.name}
                    </a>
                  </Fragment>
                ) : (
                  <Fragment key={itemIdx}>
                    <a
                      key={item}
                      href={item.href}
                      className='text-white hover:bg-teal-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium'
                    >
                      {item.name}
                    </a>
                  </Fragment>
                )
              )}
            </div>
            <div className='pt-4 pb-3 border-t border-cyan-700'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-1'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={`${
                      session?.user.image ? session?.user.image : '/avatar.png'
                    }`}
                    alt='Profile Picture'
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-white'>
                    {session?.user.name ? session?.user.name : ''}
                  </div>
                  <div className='text-sm font-medium text-cyan-300'>
                    {session?.user.email ? session?.user.email : ''}
                  </div>
                </div>
                {/* <button className='ml-auto bg-teal-600 flex-shrink-0 p-1 border-2 border-transparent rounded-full text-cyan-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-600 focus:ring-white'>
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button> */}
              </div>
              <div className='mt-3 px-2 space-y-1'>
                {profile.map((item) =>
                  item === 'Log out' ? (
                    <button
                      key={item}
                      onClick={() => signOut()}
                      className='block text-left w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-teal-500 hover:bg-opacity-75'
                    >
                      {item}
                    </button>
                  ) : (
                    <a
                      key={item}
                      href='#'
                      className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-teal-500 hover:bg-opacity-75'
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
