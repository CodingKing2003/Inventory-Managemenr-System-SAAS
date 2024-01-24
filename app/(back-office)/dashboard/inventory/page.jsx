
'use client';
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Boxes, Component, Plus, ScrollText, Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

const Inventory = () => {
  const optionCards=[
    {
      title:"Item groups",
      description:"Create multiple variants of the same item using Item Groups",
      link:"#",
      linkTitle:"New Item Group",
      enabled:true,
      icon:Boxes,
    },
    {
      title:"Items",
      description:"Create standalone items and services that you buy and sell",
      link:"#",
      linkTitle:"New Item",
      enabled:true,
      icon:Shirt
    },
    {
      title:"Composite Items",
      description:"Bundle different items together and sell them as kits",
      link:"#",
      linkTitle:"New Composite Item",
      enabled:false,
      icon:Component,
    },
    {
      title:"Price Lists",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"#",
      linkTitle:"New Price List",
      enabled:false,
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
