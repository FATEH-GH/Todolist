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

const Tasks = () => {
  return (
    <div className="flex gap-6 my-10 text-white items-center justify-center">
      <Checkbox id="task" />
      <label
        htmlFor="task"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ThreeDots />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 flex flex-col gap-1 font-semibold text-white border-gray-900">
          <DropdownMenuItem className="flex gap-2">
            <MdPushPin />
            Pin on the top
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full flex items-center justify-center">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full flex items-center justify-center">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Tasks;
