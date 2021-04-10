import React from 'react'
import {
  FiBriefcase,
  FiUser,
  FiPenTool,
  FiList,
  FiSearch,
  FiFileText,
} from 'react-icons/fi'

function FeatureWithPhoto() {
  return (
    <>
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
              alt='Application screenshot'
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
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8 h-56'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/cloud-upload */}
                        <FiBriefcase className='h-6 w-6 text-white' />
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
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8 h-56'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/lock-closed */}
                        <FiUser className='h-6 w-6 text-white' />
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
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8 h-56'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        <FiPenTool className='h-6 w-6 text-white' />
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
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8 h-56'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/list */}
                        <FiList className='h-6 w-6 text-white' />
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
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8 h-56'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/cog */}
                        <FiFileText className='h-6 w-6 text-white' />
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
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8 h-56'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
                        {/* Heroicon name: outline/server */}
                        <FiSearch className='h-6 w-6 text-white' />
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
