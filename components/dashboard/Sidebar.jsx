import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  Files,
  Home,
  PlusCircle,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Sidebar = () => {
  const salesLinks = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Orders",
      href: "#",
    },
    {
      title: "Packages",
      href: "#",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Delivery Challans",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Payments Received",
      href: "#",
    },
    {
      title: "Sales Returns",
      href: "#",
    },
    {
      title: "Credit Notes",
      href: "#",
    },
  ];
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50 fixed ">
      <div className="flex flex-col">
        <Link
          href="#"
          className="flex space-x-2 items-center bg-slate-950 py-3 px-2"
        >
          <ShoppingCart />
          <span className="font-semibold text-2xl   ">Inventory</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-3 px-3 py-6 ">
        <Link
          href="/"
          className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center space-x-2 p-2">
            <BaggageClaim className="w-4 h-4" />
            <span>Inventory</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Link
              className="flex items-center justify-between pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 py-2.5 rounded-md space-x-3"
              href="/dashboard/inventory"
            >
              <span className="text-sm">Items</span>
              <PlusCircle className="w-5 h-5" />
            </Link>
            <Link
              className="flex items-center justify-between pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 py-2.5 rounded-md space-x-3"
              href="#"
            >
              <span className="text-sm">Item Groups</span>
              <PlusCircle className="w-5 h-5" />
            </Link>
            <Link
              className="flex items-center justify-between pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 py-2.5 rounded-md space-x-3"
              href="#"
            >
              <span className="text-sm">Inventory Adjustments</span>
              <PlusCircle className="w-5 h-5" />
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center space-x-2 p-2">
          <ShoppingBasket className="w-4 h-4" />
          <span>Sales</span>

          </CollapsibleTrigger>
          <CollapsibleContent>
           {
            salesLinks.map((item,i)=>{
              return(
                <Link key={i}
                className="flex items-center justify-between pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 py-2.5 rounded-md space-x-3"
                href={item.href}
              >
                <span className="text-sm">{item.title}</span>
                <PlusCircle className="w-5 h-5" />
              </Link>

              )
            })
           }
          </CollapsibleContent>
        </Collapsible>

       

        <button className="flex items-center space-x-2 p-2">
          <ShoppingBag className="w-4 h-4" />
          <span>Purchases</span>
        </button>

        <Link href="#" className="flex items-center space-x-2 p-2">
          <Cable className="w-4 h-4" />
          <span>Integrations</span>
        </Link>

        <Link href="#" className="flex items-center space-x-2 p-2">
          <BarChart4 className="w-4 h-4" />
          <span>Reports</span>
        </Link>

        <Link href="#" className="flex items-center space-x-2 p-2">
          <Files className="w-4 h-4" />
          <span>Documents</span>
        </Link>
      </nav>

      <SubscriptionCard />

      <div className="flex flex-col ">
        <button className="flex space-x-2 justify-center items-center bg-slate-950 py-3 px-2">
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
