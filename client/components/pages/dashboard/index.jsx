import React from 'react'
import SideNavigation from './sidenavigation'
import Jobs from './jobs'
export default function Dashboard() {
  return (
    <>
      <SideNavigation>
        <Jobs />
      </SideNavigation>
    </>
  )
}
