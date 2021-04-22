import { useState } from 'react'

function NoteForm({ handleNote }) {
  return (
    <div className='mb-3'>
      <label
        htmlFor='description'
        className='block text-sm font-medium text-gray-700'
      >
        Note
      </label>
      <div className='mt-1'>
        <textarea
          name='description'
          id='description'
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
          placeholder='Add a Note'
        ></textarea>
        <div className='mt-2 flex md:justify-end'>
          <button
            type='button'
            onClick={() => handleNote(false)}
            className='w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
          >
            Discard
          </button>
          <button
            type='button'
            className='w-full ml-2 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

function NoteButton({ handleNote }) {
  return (
    <div className='flex md:justify-start'>
      <button
        type='button'
        onClick={() => handleNote(true)}
        className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500  sm:w-auto sm:text-sm'
      >
        New Note
      </button>
    </div>
  )
}

export function Notes() {
  const [note, setNote] = useState(false)

  return (
    <>
      <div className='grid grid-cols-1 gap-4 my-4 py-2'>
        {note ? (
          <NoteForm handleNote={setNote} />
        ) : (
          <NoteButton handleNote={setNote} />
        )}
      </div>
      <div>
        <p className='max-w-2xl text-sm text-gray-500'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          molestiae nemo praesentium quis assumenda, quaerat illo quo error
          reprehenderit, provident reiciendis nam culpa explicabo! Hic veniam
          corporis possimus rem! Praesentium?
        </p>
      </div>
    </>
  )
}
