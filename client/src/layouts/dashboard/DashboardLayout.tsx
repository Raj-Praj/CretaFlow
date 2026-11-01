import { Link, Outlet } from "react-router"



const navigation=[
    {name:"Overview",path:"/dashboard" },
    {name:"Projects",path:"/dashboard/projects" },
    {name:"Tasks",path:"/dashboard/tasks" },
    {name:"Chat",path:"/dashboard/chat" },
    {name:"Contributions",path:"/dashboard/contributions" },
    {name:"Risk Radar",path:"/dashboard/risk-radar" },
    {name:"Notifications",path:"/dashboard/notifications" },
    {name:"Settings",path:"/dashboard/settings" }
]
    
function DashboardLayout(){
    return(
        <>
        
           <div className="w-full h-screen flex ">
            <aside className=" w-64 h-min-screen bg-green-200 border-r border-gray-200  p-5">
                <div>
                     <h1 className="text-2xl font-bold text-[#344B38] mb-10"> Cretaflow</h1>
                    
          
                </div>
                <nav className="flex flex-col gap-2">
                    {navigation.map((item)=>(
                        <Link to={item.path} key={item.path}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>


            <main>
                <Outlet/>
            </main>
       
        </div>
        
        </>
    )
    
}
export default DashboardLayout