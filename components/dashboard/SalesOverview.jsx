import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const SalesOverview = () => {
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color:"text-red-600",
    },
    {
        title: "To be Shipped",
        number: 0,
        unit: "Pkgs",
        href: "#",
        color:"text-blue-600",
      },
      {
        title: "To be Delivered",
        number: 0,
        unit: "Pkgs",
        href: "#",
        color:"text-green-600",
      },
      {
        title: "To be Invoiced",
        number: 10,
        unit: "Qty",
        href: "#",
        color:"text-yellow-600",
      },
  ];
  const inventorySummary=[
    {
        title:"QUANTITY IN HAND",
        number:10,

    },
    {
        title:"QUANTITY TO BE RECEIVED",
        number:0,

    },
    
  ]
  return (
    <div className="bg-blue-50 border-b border-slate-300  grid grid-cols-12 gap-4 ">
      <div className="col-span-8 p-8 border-r border-slate-300">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="pr-8  grid grid-cols-4 gap-4">
            {
                salesActivity.map((item,i)=>{
                    return(
                        <Link href={item.href} key={i} className="shadow rounded-lg border border-slate-200 transition-all duration-300 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer flex items-center flex-col gap-3">
                        <h4 className={`${item.color} font-semibold text-2xl`}>{item.number}</h4>
                        <small className="text-slate-500">{item.unit}</small>
                        <div className="flex items-center space-x-2 text-slate-500 ">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="uppercase text-xs">{item.title}</span>
                        </div>
                      </Link>

                    )
                })
            }
       
        </div>
      </div>
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
       <div>
      {
        inventorySummary.map((item,i)=>{
            return(
                <div key={i} className="shadow mb-4 rounded-lg border border-slate-200 transition-all duration-300 hover:border-blue-400 bg-white px-4 py-2 justify-between cursor-pointer flex items-center  gap-3">
                <h2 className="uppercase  text-slate-500">{item.title}</h2>
                <h4 className=" text-2xl">{item.number}</h4>
              </div>
            )
        })
      }
       </div>
      </div>
    </div>
  );
};

export default SalesOverview;
