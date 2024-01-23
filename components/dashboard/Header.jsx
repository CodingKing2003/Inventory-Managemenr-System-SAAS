import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  
  Users,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200 ">
      <div className="flex gap-3">
        <button>
          <History className="w-6 h-6 " />
        </button>
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 bg-blue-600 rounded-lg">
            <Plus className="text-slate-50 h-4 w-4 " />
          </button>
        </div>

        <div className="flex border-r border-gray-300 space-x-2  ">
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Users className="text-slate-900 h-4 w-4 " />
          </button>

          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Bell className="text-slate-900 h-4 w-4 " />
          </button>

          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Settings className="text-slate-900 h-4 w-4 " />
          </button>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center">
            <span>Mumbai</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <button>
            <Image
              src={"/user.jpg"}
              alt="user-image"
              width={96}
              height={96}
              className="rounded-full h-8 w-8 border border-slate-800"
            />
          </button>

          <button className="flex items-center">
           
            <LayoutGrid className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
