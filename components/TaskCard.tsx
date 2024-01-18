import TaskIcon from "@/components/TaskIcon";
import { TaskCardProps } from "@/types";
import { FormEvent, FormEventHandler } from "react";
import { Button } from "./ui/button";

const TaskCard = ({ task, setTask }: TaskCardProps) => {
  const updatedTask = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault;
    setTask(e.currentTarget.value);
  };
  return (
    <div className="flex sm:gap-4 items-center justify-start m-4 bg-gray-900 px-2 rounded-xl my-10 w-full sm:w-[80%]">
      <TaskIcon className="color-gray-400 h-[40px] w-[40px]" />
      <input
        className="bg-gray-900 text-white p-2 border-0 outline-none w-full "
        value={task}
        type="text"
        onChange={(e) => updatedTask(e)}
        placeholder="add a task here ..."
      ></input>
      <Button className="bg-gray-800 m-1 hover:bg-gray-700 text-white font-semi-bold">
        Add task
      </Button>
    </div>
  );
};

export default TaskCard;
