import React from 'react'

const InventorySumaryCard = ({item}) => {
  return (
    <div  className="shadow mb-4 rounded-lg border border-slate-200 transition-all duration-300 hover:border-blue-400 bg-white px-4 py-2 justify-between cursor-pointer flex items-center  gap-3">
    <h2 className="uppercase  text-slate-500">{item.title}</h2>
    <h4 className=" text-2xl">{item.number}</h4>
  </div>
  )
}

export default InventorySumaryCard