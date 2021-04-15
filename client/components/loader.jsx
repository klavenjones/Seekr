import { useState } from 'react'

export function Loader() {
  return (
    <div className='col-span-full flex justify-center items-center'>
      <div className='spinner'>
        <div class='double-bounce1'></div>
        <div class='double-bounce2'></div>
      </div>
    </div>
  )
}
