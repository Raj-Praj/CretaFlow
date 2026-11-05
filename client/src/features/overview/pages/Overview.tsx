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
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
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
            </div>
            <div></div>
            <div></div>
            <div></div>

        </div>

    </div>

    </>)
} 