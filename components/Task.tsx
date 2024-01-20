"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ThreeDots from "@/components/ThreeDots";
import { MdPushPin } from "react-icons/md";
import { Button } from "./ui/button";
import { useState } from "react";
import { TaskProps } from "@/types";
import supabase from "@/utils";

const Task = ({ task, id, ispinned, ischecked, settasks }: TaskProps) => {
  const [isPinned, setIsPinned] = useState(ispinned);
  console.log("the pinn", ispinned);
  const [isChecked, setIsChecked] = useState(ischecked);

  const handledelete = async (id: number) => {
    const { data, error } = await supabase
      .from("Tasks")
      .delete()
      .eq("id", id)
      .select();
    if (error) console.log(error);
    else settasks(data);
  };

  return (
    <div className="flex items-center justify-between w-full p-2 my-5 text-white">
      <div className="flex gap-2 sm:gap-4 items-center">
        <Button
          className="bg-trasnparent"
          onClick={() => setIsPinned(!isPinned)}
        >
          <MdPushPin
            className={`-rotate-45 w-[20px] h-[20px] ${
              isPinned ? "opacity-100 scale-125" : "opacity-40"
            }`}
          />
        </Button>
        <Checkbox
          checked={isChecked}
          onClick={() => (isChecked ? setIsChecked(false) : setIsChecked(true))}
          id="task"
          className="bg-gray-600"
        />
        <label
          htmlFor="task"
          className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
        >
          {task}
        </label>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ThreeDots />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 flex flex-col gap-1 font-semibold text-white border-gray-900 overflow-hidden">
          <DropdownMenuItem className="w-full flex items-center justify-center">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="w-full flex items-center justify-center"
            onClick={() => handledelete(id)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Task;
