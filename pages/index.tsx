import {BsBell, BsBookmark, BsEnvelope, BsTwitterX} from 'react-icons/bs'
import { Geist, Geist_Mono } from "next/font/google";
import React from 'react';
import { BiHash, BiHomeCircle, BiUser } from 'react-icons/bi';
import { CiCircleMore } from 'react-icons/ci';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface TwitterSidebarButton{
  title: string;
  icon:React.ReactNode;
}


const  sidebarMenuItems :TwitterSidebarButton[]=[
  {
    title:'Home',
    icon:<BiHomeCircle/>
  },
   {
    title:'Explore', 
    icon:<BiHash/>
  },
  {
    title:'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Messages',
    icon:<BsEnvelope/> 
  },
  {
    title:'Bookmarks',
    icon:<BsBookmark/>
  },
  {
    title:'Profile',
    icon:<BiUser/>
  }, 
  {
    title:'More',  
    icon:<CiCircleMore/>
  }
]

export default function Home() {
  return (
  
      <div className="grid grid-cols-12 h-screen w-screen sm:px-20">
        <div className="col-span-2 sm:col-span-3 pt-1 flex sm:justify-end pr-4 relative">
          <div>
            <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
              <BsTwitterX />
            </div>
            <div className="mt-1 text-sm pr-4">
              <ul>
                {sidebarMenuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      className="flex justify-start items-center gap-2 hover:bg-gray-800 rounded-full px-2 py-3 w-fit cursor-pointer mt-2"
                      href={""}
                    >
                      <span className=" text-2xl">{item.icon}</span>
                      <span className="hidden sm:inline">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 px-3">
                <button className="hidden sm:block bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full hover:bg-[#178fde]">
                  Tweet
                </button>
               
          </div>
        </div>
      </div>  

      <div className="col col-span-6 border-r-[1px] border-l-[1px] border-gray-800"></div>
      <div className="col col-span-3"></div>
    </div>
     </div>
  );
}
 