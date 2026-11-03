import { NavLink } from "react-router";
import SidebarNavigation from "./SidebarNavigation";


type SidebarProps={
    onClose:()=>void;
    isOpen:boolean;
}
export default function Sidebar({isOpen,onClose}:SidebarProps){
    return(
    <>
     <aside className=" hidden md:block w-70 min-h-screen bg-green-200 border-r border-gray-200  p-6">
                <div>
                     <h1 className="text-2xl font-bold text-[#344B38] mb-10"> Cretaflow</h1>
                    
          
                </div>
               <SidebarNavigation/>
            </aside>
            {isOpen &&(
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black/40"
                    onClick={onClose}>

                    </div>

                    <aside className="relative w-70 h-full bg-white p-6">
                        <h1 className="text-2xl font-bold text-[#344B38] mb-10">
                            Cretaflow
                        </h1>
                       <SidebarNavigation onNavigate={onClose}/>
                    </aside>

                </div>
            )}

    </>);
}