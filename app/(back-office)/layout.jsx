import Header from '@/components/dashboard/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex '>
        <div className="w-60 min-h-screen bg-slate-900 text-slate-50 ">
            Sidebar
        </div>
        <main className='w-full bg-slate-100 min-h-screen '>
            <Header />
            {children}
        </main>
    </div>
  )
}

export default layout