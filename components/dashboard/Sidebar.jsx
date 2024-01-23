import { ChevronLeft,  Home,  ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50 justify-between ">
            <div className="flex flex-col">
                <div className="flex space-x-2 items-center bg-slate-950 py-3 px-2">
                    <ShoppingCart />
                    <span className='font-semibold text-2xl   '>Inventory</span>
                </div>

            </div>
            <nav className='flex flex-col gap-4 p-2 '>
                <Link href="/" className='flex items-center space-x-2'>
                <Home className='w-4 h-4' />
                <span>Home</span>
                </Link>
                <Link href="/" className='flex items-center space-x-2'>
                <Home className='w-4 h-4' />
                <span>Inventory</span>
                </Link>
               
            </nav>

            <div className="flex flex-col">
            <div className="flex space-x-2 items-center bg-slate-950 py-3 px-2">
                    <ChevronLeft />
                    
                </div>

            </div>
        </div>
  )
}

export default Sidebar