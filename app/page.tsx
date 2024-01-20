"use client";
import DateCard from "@/components/DateCard";
import TaskCard from "@/components/TaskCard";
import Tasks from "@/components/Tasks";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date>(new Date());
  const [task, setTask] = useState<string>("");

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
