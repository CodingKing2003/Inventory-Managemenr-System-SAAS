
'use client';
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Boxes, Component, Plus, ScrollText, Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

const Inventory = () => {
  const optionCards=[
   
    {
      title:"Items",
      description:"Create standalone items and services that you buy and sell",
      link:"/dashboard/inventory/items/new",
      linkTitle:"New Item",
      enabled:true,
      icon:Shirt
    },
    {
      title:"Categories",
      description:"Bundle different items together and sell them as kits",
      link:"/dashboard/inventory/categories/new",
      linkTitle:"New category",
      enabled:true,
      icon:Boxes,
    },
    {
      title:"Brands",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/dashboard/inventory/brands/new",
      linkTitle:"New Brands",
      enabled:true,
      icon:ScrollText
    },
    {
      title:"Warehouse",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/dashboard/inventory/warehouse/new",
      linkTitle:"New Warehouse",
      enabled:true,
      icon:ScrollText
    },
    {
      title:"Units",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/dashboard/inventory/units/new",
      linkTitle:"New Units",
      enabled:true,
      icon:ScrollText
    },
  ]
 
  return (
    <div>
      <FixedHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2  py-8 px-16 gap-6 ">
      {
        optionCards.map((item,i)=>{
          return(
            <OptionCard key={i} optionData={item} />
          )
        })
      }
        
      </div>
    </div>
  );
};

export default Inventory;
