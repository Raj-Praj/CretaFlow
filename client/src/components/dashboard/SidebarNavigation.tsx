import { NavLink } from "react-router";

export const navigation=[
    {name:"Overview",path:"/dashboard" },
    {name:"Projects",path:"/dashboard/projects" },
    {name:"Tasks",path:"/dashboard/tasks" },
    {name:"Chat",path:"/dashboard/chat" },
    {name:"Contributions",path:"/dashboard/contributions" },
    {name:"Risk Radar",path:"/dashboard/risk-radar" },
    {name:"Notifications",path:"/dashboard/notifications" },
    {name:"Settings",path:"/dashboard/settings" }
]
type SidebarNavigationProps={
    onNavigate?:()=>void;
}
export default function SidebarNavigation({onNavigate,}:SidebarNavigationProps){
    return(
        <>
         <nav className="flex flex-col gap-2">
                    {navigation.map((item)=>(
                        <NavLink 
                        onClick={onNavigate}
                        to={item.path} 
                        key={item.path}
                        end={item.path === "/dashboard"}
                        className={({isActive})=>
                        `px-4 py-3 rounded-lg text-sm transition ${
                            isActive
                            ? "bg-[#EAEDE5] text-[#344B38] font-semibold"
                            : "text-gray-600 hover:bg-[#EAEDE5] hover:text-[#344B38]"
                        }`
                        }>
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
        </>
    )
}