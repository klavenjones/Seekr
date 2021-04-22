import { useState, useEffect, useContext } from 'react'

import SideNavigation from './sidenavigation'
import Jobs from './jobs'
import Activities from './activities'
import Contacts from './contacts'
import axios from 'axios'

function renderPage(page) {
  switch (page) {
    case 'Activities':
      return <Activities />
      break
    case 'Contacts':
      return <Contacts />
      break

    default:
      return <Jobs />
      break
  }
}

export default function Dashboard() {
  const [page, setPage] = useState('Jobs')

  useEffect(async () => {
    const response = await axios.get('api/jobs')
    console.log(response.data)
  }, [])

  return (
    <>
      <SideNavigation page={page} handlePage={setPage}>
        {renderPage(page)}
      </SideNavigation>
    </>
  )
}
