"use client";

import ArrowLeft from "@/components/ArrowLeft";
import ArrowRight from "@/components/ArrowRight";
import { MdPushPin } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThreeDots from "@/components/ThreeDots";
import { Button } from "@/components/ui/button";
import DateCard from "@/components/DateCard";
import TaskCard from "@/components/TaskCard";
import Task from "@/components/Task";
import supabase from "@/utils";
import Tasks from "@/components/Tasks";

export default function Home() {
  const [date, setDate] = useState<Date>(new Date());
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    const fetchdata = async () => {
      let { data, error } = await supabase.from("Tasks").select();
      console.log(data![0]);
      console.log(error);
    };
    fetchdata();
    // console.log("the main page");
    // console.log("here's a task", task);
  }, [date, task]);

  return (
    <main className=" flex justify-center">
      <div className=" flex justify-center items-center flex-col bg-gray-700 mt-10 object-center p-2 sm:p-10 mx-2 rounded-xl sm:w-[50%] sm:h-[75%] ">
        <DateCard setDate={setDate} date={date} />
        <TaskCard setTask={setTask} />
        <div className="overflow-y-auto w-full max-h-[400px]">
          <Tasks ischecked={true} />
        </div>
        <div className="h-1 w-full bg-black" />
        <div className="overflow-y-auto w-full max-h-[400px]">
          <Tasks />
        </div>
      </div>
    </main>
  );
}

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-linkedin"
>
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect width="4" height="12" x="2" y="9" />
  <circle cx="4" cy="4" r="2" />
</svg>; */
}

// <Calendar
//           mode="single"
//           selected={date}
//           onSelect={setDate}
//           footer={`the day you selected,${format(new Date(), "MMMM Do yyyy")}`}
//         />

// <div className="bg-gray-700 mt-20 object-center p-10 rounded-xl ">
//         <h1>hi there</h1>
//         <MdPushPin
//           style={{ color: "purple" }}
//           size={"25px"}
//           className="-rotate-45 color-red"
//         />
//         <ArrowLeft className="hover:scale-110 h-10 w-10 ease hover:opacity-50" />
//         <ArrowRight />
//         <div className="flex gap-4">
//           <Checkbox
//             id="terms"
//             checked={checked}
//             onClick={() => setChecked(!checked)}
//           ></Checkbox>
//           <label
//             htmlFor="terms"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//             check it if you are testing
//           </label>
//         </div>
//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <ThreeDots />
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="bg-red-500">
//             <DropdownMenuItem>Profile</DropdownMenuItem>
//             <DropdownMenuItem>Billing</DropdownMenuItem>
//             <DropdownMenuItem>Team</DropdownMenuItem>
//             <DropdownMenuItem>Subscription</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
