import React from 'react'

function FeatureWithPhoto() {
  return (
    <>
      {' '}
      <div className='relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32'>
        <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
          <div>
            <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
              Organize your search
            </h2>
            <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'></p>
            <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
              No more messy excel sheets. Tracking and organizing your jobs is
              much easier with Seekr. Think of it like a CRM for your job
              search.
            </p>
          </div>
          <div className='mt-12 -mb-10 sm:-mb-24 lg:-mb-80'>
            <img
              className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
              src='https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg'
              alt
            />
          </div>
        </div>
      </div>
    </>
  )
}

function FeatureGrid() {
  return (
    <>
      {' '}
      <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
        <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
          <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
            Organize better
          </h2>
          <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
            Everything you need to keep your application organized
          </p>
          <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
            Organize your job applications with these awesome features.
          </p>
          <div className='mt-12'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='pt-6'>
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/cloud-upload */}
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
                            d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      Manage Jobs
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Keep track of an unlimited amount of jobs and search and
                      organize them by the status of your search.
                    </p>
                  </div>
                </div>
              </div>
              <div className='pt-6'>
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/lock-closed */}
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
                            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      Manage Contacts
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Keep contact information for anyone you interact with
                      during your search, from interviewers to recruiters and
                      everyone in between.
                    </p>
                  </div>
                </div>
              </div>
              <div className='pt-6'>
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/refresh */}
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
                            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      Take Notes
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Document your job search journey and keep important job
                      information handy with notes.
                    </p>
                  </div>
                </div>
              </div>
              <div className='pt-6'>
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/shield-check */}
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
                            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      Manage your activity
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Track the status of all of your jobs, by recording whether
                      a job is on the wishlist, or if you're interviewing.
                    </p>
                  </div>
                </div>
              </div>
              <div className='pt-6'>
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/cog */}
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
                            d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      Resume Management
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Need to write a tailored resume for a specific job? Seekr
                      allows you to save different resumes for different jobs.
                    </p>
                  </div>
                </div>
              </div>
              <div className='pt-6'>
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/server */}
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
                            d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      Job search
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      See who is hiring. Our platform provides links to some job
                      postings to help with your job search.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Features() {
  return (
    <>
      <FeatureWithPhoto />
      <FeatureGrid />
    </>
  )
}
