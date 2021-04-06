import React from 'react'

export default function Blog() {
  return (
    <>
      <div className='relative bg-gray-50 py-16 sm:py-24 lg:py-32'>
        <div className='relative'>
          <div className='text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
            <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
              Learn
            </h2>
            <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
              Helpful Resources
            </p>
            <p className='mt-5 mx-auto max-w-prose text-xl text-gray-500'>
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
          </div>
          <div className='mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
            <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                  alt
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-cyan-600'>
                    <a href='#' className='hover:underline'>
                      Article
                    </a>
                  </p>
                  <a href='#' className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>
                      Boost your confidence during interviews
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href='#'>
                      <img
                        className='h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt='Roel Aufderehar'
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href='#' className='hover:underline'>
                        Roel Aufderehar
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime='2020-03-16'>Mar 16, 2020</time>
                      <span aria-hidden='true'>·</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                  alt
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-cyan-600'>
                    <a href='#' className='hover:underline'>
                      Video
                    </a>
                  </p>
                  <a href='#' className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>
                      How to sell yourself during interviews
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href='#'>
                      <img
                        className='h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt='Brenna Goyette'
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href='#' className='hover:underline'>
                        Brenna Goyette
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime='2020-03-10'>Mar 10, 2020</time>
                      <span aria-hidden='true'>·</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src='https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                  alt
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-cyan-600'>
                    <a href='#' className='hover:underline'>
                      Case Study
                    </a>
                  </p>
                  <a href='#' className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>
                      Improve your Resume 
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint harum rerum voluptatem quo recusandae magni placeat
                      saepe molestiae, sed excepturi cumque corporis perferendis
                      hic.
                    </p>
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href='#'>
                      <img
                        className='h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt='Daniela Metz'
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href='#' className='hover:underline'>
                        Daniela Metz
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime='2020-02-12'>Feb 12, 2020</time>
                      <span aria-hidden='true'>·</span>
                      <span>11 min read</span>
                    </div>
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