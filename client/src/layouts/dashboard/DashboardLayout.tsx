import {  Outlet } from "react-router"
import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";



    
function DashboardLayout(){
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    return(
        <>
        
        <div className="w-full h-full flex ">
            {/*sidebar*/}
           <Sidebar
           isOpen={isSidebarOpen}
           onClose={()=>setIsSidebarOpen(false)}
           />

             
             <div className="w-full min-h-screen  flex flex-col">
                <Header
                onMenuClick={()=>setIsSidebarOpen(true)}
                />
                
              <main className="w-full h-screen ">
                  <Outlet/>
              </main>
            </div>
       
        </div>
        
        </>
    )
    
}
export default DashboardLayout