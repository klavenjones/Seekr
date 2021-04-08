import { useState } from 'react'
import SideNavigation from './sidenavigation'
import Jobs from './jobs'
import Activities from './activities'

function renderPage(page) {
  switch (page) {
    case 'Activities':
      return <Activities />
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
