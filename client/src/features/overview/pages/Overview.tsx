import { AlertCircle, Clock, Menu, MessageSquare } from "lucide-react";

export default function OverviewPage(){
    return(
    <>
    <div className="w-full min-h-screen">
        <div className="w-full flex justify-between gap-8">
            <div className="flex-1 flex flex-col justify-center bg-yellow-300 gap-3">
                <span className="text-sm text-[#F8F8F6]">Sunday,Nov 1</span>
                <span className=" text-4xl/11">Friday's demo has two things standing in its way which needs to be completed</span>
               
            </div>
            <div className="w-2/5 flex items-center justify-center bg-green-300">
                <Menu/>
            
            </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
            {/*Top left*/}
            <div className="flex flex-col gap-4 p-2">
                <div className="flex justify-between items-center ">
                    <h2>Things to address</h2>
                    <span>3</span>

                </div>
                <div className="flex items-center gap-3 rounded-xl border border-gray-300 p-3">
                    <AlertCircle className="text-red-500"/>

                      <div className="flex-1">
                           <h3 className="text-sm font-medium text-gray-900">Fix real-time chat bugs</h3>
                           <p className="text-xs text-gray-500 mt-1">Waiting for server API key</p>
                     </div>

                      <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">Blocked</span>
                 </div>
                 <div className="flex items-center gap-3 rounded-xl border border-gray-300 p-3">
                    <MessageSquare className="text-red-500"/>

                      <div className="flex-1">
                           <h3 className="text-sm font-medium text-gray-900">Fix real-time chat bugs</h3>
                           <p className="text-xs text-gray-500 mt-1">Waiting for server API key</p>
                     </div>

                      <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">Decision</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-gray-300 p-3">
                    <Clock className="text-red-500"/>

                      <div className="flex-1">
                           <h3 className="text-sm font-medium text-gray-900">Fix real-time chat bugs</h3>
                           <p className="text-xs text-gray-500 mt-1">Waiting for server API key</p>
                     </div>

                      <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-full">Overdue</span>
                    </div>
                    <span>see more</span>
            </div>
            {/*top right*/}
            <div className="flex flex-col gap-4 p-2">
                <h2>Deadline Risk Radar</h2>
                <div className="flex justify-between items-center">
                    <h3>Game Jam 2025</h3>
                    <span>At risk</span>
                </div>
                <p className="text-sm text-gray-500 mt-3"> Demo in <span className="font-semibold text-gray-900">5 days</span></p>
            </div>
            {/*bottom left*/}
            <div className="flex flex-col gap-4 p-2">
                <h2>Your Week</h2>
                <div className="grid grid-cols-2 gap-3">
                     <div className="rounded-xl bg-[#F2F3ED] p-4">
                           <h3 className="text-2xl font-semibold text-[#344B38]">6</h3>
                             <p className="text-sm text-gray-500">Completed</p>
                     </div>

                      <div className="rounded-xl bg-[#F2F3ED] p-4">
                           <h3 className="text-2xl font-semibold text-[#344B38]">4</h3>
                          <p className="text-sm text-gray-500">Remaining</p>
                     </div>
                </div>
                <div className="flex justify-between items-center">
                     <h3 className="font-medium">Next on your list</h3>
                     <span className="text-sm text-gray-500">See all</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
                     <div className="flex-1">
                         <h4 className="text-sm font-medium text-gray-900">
                             Update project documentation
                        </h4>
                       <p className="text-xs text-gray-500 mt-1">
                              Green Campus
                      </p>
                     </div>

                     <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
                       Tue
                    </span>
                </div>
            </div>
            {/*bottom right*/}
            <div className="flex flex-col gap-4 p-2">
                <h2 className="font-semibold">Projects</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <p>Green Campus</p>
                        <span className="bg-green-400 rounded-lg p-1">On track</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>AI Study Buddy</p>
                        <span className="bg-green-400 rounded-lg p-1">On track</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Game Jam 2025</p>
                        <span className="bg-red-400 rounded-lg p-1">On track</span>
                    </div>
                   
                </div>
                <span>See all..</span>
            </div>

        </div>

    </div>

    </>)
} 