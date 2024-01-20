import TaskIcon from "@/components/TaskIcon";
import { TaskCardProps } from "@/types";
import { FormEvent, FormEventHandler, useState } from "react";
import { Button } from "./ui/button";
import supabase from "@/utils";

const TaskCard = ({ setTask }: TaskCardProps) => {
  const [newTask, setNewTask] = useState("");

  const handlesubmit = async () => {
    const { error } = await supabase.from("Tasks").insert({ task: newTask });

    if (error) console.log(error);

    setTask(newTask);
  };

  return (
    <form
      className="flex sm:gap-4 items-center justify-start m-4 bg-gray-900 px-2 rounded-xl my-10 w-full sm:w-[80%]"
      onSubmit={handlesubmit}
    >
      <TaskIcon className="color-gray-400 h-[40px] w-[40px]" />
      <input
        className="bg-gray-900 text-white p-2 border-0 outline-none w-full "
        value={newTask}
        type="text"
        onChange={(e) => setNewTask(e.currentTarget.value)}
        placeholder="add a task here ..."
      ></input>
      <Button className="bg-gray-800 m-1 hover:bg-gray-700 text-white font-semi-bold">
        Add task
      </Button>
    </form>
  );
};

export default TaskCard;
