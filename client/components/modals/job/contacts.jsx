import { useState } from 'react'
import Select from 'react-select'
import { BsPaperclip, BsX } from 'react-icons/bs'
import { FaPhoneAlt, FaEnvelope, FaEdit } from 'react-icons/fa'
import { useForm, useController } from 'react-hook-form'
import { useSession } from 'next-auth/client'
import axios from 'axios'

export function Contacts() {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6'>
      {/* Contact Item */}

      <li className='col-span-1 bg-white rounded-lg border divide-y divide-gray-200'>
        <div className='w-full flex items-center justify-between p-6 space-x-6'>
          <div className='flex-1 truncate'>
            <div className='flex items-center space-x-3'>
              <h3 className='text-gray-900 text-sm font-medium truncate'>
                Jane Cooper
              </h3>
              <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                Admin
              </span>
            </div>
            <p className='mt-1 text-gray-500 text-sm truncate'>
              Regional Paradigm Technician
            </p>
          </div>
          <img
            className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
            alt
          />
        </div>
        <div>
          <div className='-mt-px flex divide-x divide-gray-200'>
            <div className='w-0 flex-1 flex'>
              <a
                href='mailto:janecooper@example.com'
                className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/mail */}
                <FaEnvelope className='w-5 h-5 text-gray-400' />
                <span className='ml-3'>Email</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-202-555-0170'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <FaPhoneAlt className='w-5 h-5 text-gray-400' />

                <span className='ml-3'>Call</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-202-555-0170'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <FaEdit className='w-5 h-5 text-gray-400' />
                <span className='ml-3'>Edit</span>
              </a>
            </div>
          </div>
        </div>
      </li>
      <li className='col-span-1 bg-white rounded-lg border divide-y divide-gray-200'>
        <div className='w-full flex items-center justify-between p-6 space-x-6'>
          <div className='flex-1 truncate'>
            <div className='flex items-center space-x-3'>
              <h3 className='text-gray-900 text-sm font-medium truncate'>
                Jane Cooper
              </h3>
              <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                Admin
              </span>
            </div>
            <p className='mt-1 text-gray-500 text-sm truncate'>
              Regional Paradigm Technician
            </p>
          </div>
          <img
            className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=254FAGhISO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
            alt
          />
        </div>
        <div>
          <div className='-mt-px flex divide-x divide-gray-200'>
            <div className='w-0 flex-1 flex'>
              <a
                href='mailto:janecooper@example.com'
                className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/mail */}
                <FaEnvelope className='w-5 h-5 text-gray-400' />
                <span className='ml-3'>Email</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-202-555-0170'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <FaPhoneAlt className='w-5 h-5 text-gray-400' />

                <span className='ml-3'>Call</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href='tel:+1-202-555-0170'
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                {/* Heroicon name: solid/phone */}
                <FaEdit className='w-5 h-5 text-gray-400' />
                <span className='ml-3'>Edit</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}
