import React from 'react'
import SideNavigation from './sidenavigation'
import Jobs from './jobs'
import Activities from './activities'
export default function Dashboard() {
  return (
    <>
      <SideNavigation>
        <Activities />
      </SideNavigation>
    </>
  )
}
