import HomeNavbar from '@/components/dashboard/HomeNavbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <HomeNavbar />
        {children}
    </div>
  )
}

export default Layout