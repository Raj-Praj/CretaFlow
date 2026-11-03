import { Bell, Search, UserRound,Menu} from "lucide-react";
import { useState } from "react";

type HeaderProps={
    onMenuClick:()=>void;
}

export default function Header({onMenuClick}:HeaderProps){
    
    return(
        <>
        <header className="w-full h-15 bg-white border-b border-gray-200 flex items-center justify-between px-2 py-8 md:py-8 md:px-8 ">
                    <button 
                    onClick={onMenuClick}
                    className=" md:hidden  flex justify-center items-center w-10 h-10  px-2 rounded-lg hover:bg-[#F8F8F6]">
                        <Menu/>
                    </button>
                    <div className="flex items-center gap-3 bg-green-200 px-4 py-2 rounded-lg w-100">
                       
                       <Search/>
                        <input
                            type="text"
                            placeholder="Search projects,tasks..."
                            className="bg-transparent outline-none text-sm w-full"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                       <button className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-200 transition">
                        <Bell size={25}/>
                       </button>

                        <button className=" shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#EAEDE5] hover:bg-red-200 transition">
                         <UserRound size={25} className=""/>
                       </button>
                    </div>
                </header>
        </>
    )
}