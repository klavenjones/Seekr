/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AddContact, ViewContact, EditContact } from './'

export function ContactModal({ contact, open, type, setOpen, jobs }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          {type === 'view' && (
            <ViewContact contact={contact} setOpen={setOpen} />
          )}
          {type === 'edit' && (
            <EditContact contact={contact} setOpen={setOpen} jobs={jobs} />
          )}
          {type === 'add' && <AddContact setOpen={setOpen} jobs={jobs} />}
        </div>
      </Dialog>
    </Transition.Root>
  )
}
