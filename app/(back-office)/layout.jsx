import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex '>
        <div className="w-56 min-h-screen bg-slate-900 text-slate-50 ">
            Sidebar
        </div>
        <main className='w-full bg-slate-100 min-h-screen '>
            {children}
        </main>
    </div>
  )
}

export default layout