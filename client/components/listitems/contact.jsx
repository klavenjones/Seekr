import { useSession } from 'next-auth/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ContactModal } from '../modals'
import {
  PhoneIcon,
  MailIcon,
  PencilAltIcon,
  EyeIcon,
  TrashIcon,
} from '@heroicons/react/solid'

export function ContactItem({ contact, jobs }) {
  const [session, loading] = useSession()
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('edit')
  const router = useRouter()

  if (loading) return <div></div>

  const {
    user: { userId },
  } = session

  const refreshData = () => {
    router.replace(router.asPath, null, { scroll: false })
  }

  const deleteContact = async () => {
    const deleteUrl = `https://j29mwfcm7h.execute-api.us-east-2.amazonaws.com/dev/contact/${contact.contactId}`

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
    <>
      <ContactModal
        open={open}
        setOpen={setOpen}
        contact={contact}
        type={type}
        jobs={jobs}
      />
      <li className='col-span-1 bg-white rounded-lg shadow-md border divide-y divide-gray-200'>
        <div className='w-full flex items-center justify-between p-6 space-x-6'>
          <div className='flex-1 truncate'>
            <div className='flex items-center space-x-3'>
              <h3 className='text-gray-900 text-sm font-medium truncate'>
                {contact.name}
              </h3>
              <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                {contact.company}
              </span>
            </div>
            <p className='mt-1 text-gray-500 text-sm truncate'>
              {contact.title}
            </p>
          </div>
          <img
            className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
            alt='Contact Photo'
          />
        </div>
        <div>
          <div className='-mt-px flex divide-x divide-gray-200'>
            <div className='w-0 flex-1 flex'>
              <a
                href={`mailto:${contact.email}`}
                className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/mail */}
                <MailIcon className='w-5 h-5 text-gray-400' />
                {/* <span className='ml-3'>Email</span> */}
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-917-615-5646'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <PhoneIcon className='w-5 h-5 text-gray-400' />

                {/* <span className='ml-3'>Call</span> */}
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <button
                onClick={() => {
                  setOpen(true)
                  setType('view')
                }}
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <EyeIcon className='w-5 h-5 text-gray-400' />
                {/* <span className='ml-3'>View</span> */}
              </button>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <button
                onClick={() => {
                  setOpen(true)
                  setType('edit')
                }}
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <PencilAltIcon className='w-5 h-5 text-gray-400' />
                {/* <span className='ml-3'>Edit</span> */}
              </button>
            </div>

            <div className='-ml-px w-0 flex-1 flex'>
              <button
                onClick={() => {
                  deleteContact()
                }}
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <TrashIcon className='w-5 h-5 text-gray-400' />
                {/* <span className='ml-3'>Delete</span> */}
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export function ContactList({ contacts, jobs }) {
  return (
    <>
      {contacts.map((contact, i) => (
        <ContactItem contact={contact} key={i} jobs={jobs} />
      ))}
    </>
  )
}
