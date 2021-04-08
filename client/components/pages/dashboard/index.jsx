import { useState } from 'react'
import SideNavigation from './sidenavigation'
import Jobs from './jobs'
import Activities from './activities'
import Contacts from './contacts'

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
  return (
    <>
      <SideNavigation page={page} handlePage={setPage}>
        {renderPage(page)}
      </SideNavigation>
    </>
  )
}
