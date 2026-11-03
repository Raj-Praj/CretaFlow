import {  Outlet } from "react-router"
import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";



    
function DashboardLayout(){
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    return(
        <>
        
        <div className="w-full h-screen flex ">
            {/*sidebar*/}
           <Sidebar
           isOpen={isSidebarOpen}
           onClose={()=>setIsSidebarOpen(false)}
           />

             
             <div className="w-full h-min-screen bg-red-400 flex flex-col">
                <Header
                onMenuClick={()=>setIsSidebarOpen(true)}
                />
                
              <main className="flex-1 p-8">
                  <Outlet/>
              </main>
            </div>
       
        </div>
        
        </>
    )
    
}
export default DashboardLayout