import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContainerAtas from './components/navbar'
import { FaFireAlt } from "react-icons/fa";
import SidebarMenu from './components/SidebarMenu';
import {Button} from '@/components/ui/button';
import { Loader2 } from "lucide-react"
// import { Link } from "react-router-dom";



function App() {


  const Icons = {
    
    items : [
      { name: "Trending", icon: <FaFireAlt className='w-6 h-6' /> },
      { name: "Home", icon: <FaFireAlt className='w-6 h-6' /> },
      { name: "Search", icon: <FaFireAlt className='w-6 h-6' /> },
      { name: "Library", icon: <FaFireAlt className='w-6 h-6' /> },
      { name: "History", icon: <FaFireAlt className='w-6 h-6' /> },
      { name: "Watch Later", icon: <FaFireAlt className='w-6 h-6' /> },
      { name: "Liked Videos", icon: <FaFireAlt className='w-6 h-6' /> },
    ]
  }

  // console.log(Icons.items.map((a) => a.icon));
//
// 68211504234%20%(1)


 

  return (
    <div className='w-full h-screen flex flex-col items-start justify-start bg-white'>
      <ContainerAtas />
      <div className='w-full h-full bg-black flex flex-row items-center'>
        <div className='w-3/12 h-full bg-gray-950 flex flex-col '>
          <div className='w-full h-full bg-slate-800 border border-gray-400 text-xl text-white flex flex-col items-start justify-start gap-2 px-4 mt-16 py-4'>
            {Icons.items.map((item) => (
              
              <SidebarMenu  cons={item.icon} deskripsi={item.name} />
            ))}
            {/* <SidebarMenu cons={<FaFireAlt />} deskripsi={"Subscriptions"} /> */}
            <Button disabled>
              <Loader2 className="animate-spin" />
              Please wait
            </Button>
                  </div>
          
        </div>
        <div className='w-9/12 h-full bg-slate-800'></div>
        
      </div>
     

    </div>
  )
}

export default App
