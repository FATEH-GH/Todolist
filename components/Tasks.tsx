"use client";

import { useEffect, useState } from "react";
import Task from "./Task";
import supabase from "@/utils";
import { TaskProps } from "@/types";
import { motion } from "framer-motion";

interface tasksProps {
  ischecked?: boolean;
}

const Tasks = ({ ischecked }: tasksProps) => {
  const [tasks, setTasks] = useState([{}]);

  useEffect(() => {
    const fetchdata = async () => {
      let { data } = await supabase.from("Tasks").select("*");
      setTasks(data!);
    };
    fetchdata();
  }, []);
  console.log("the check", ischecked);

  return (
    <div>
      {tasks && ischecked
        ? tasks.map(
            (singletask: any, index) =>
              singletask.ispinned && (
                <motion.div
                  key={index}
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <Task
                    task={singletask.task}
                    id={singletask.id}
                    ischecked={singletask.ischecked}
                    ispinned={singletask.ispinned}
                    settasks={setTasks}
                  />
                </motion.div>
              )
          )
        : tasks.map(
            (singletask: any, index) =>
              !singletask.ispinned && (
                <motion.div
                  key={index}
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <Task
                    task={singletask.task}
                    id={singletask.id}
                    ischecked={singletask.ischecked}
                    ispinned={singletask.ispinned}
                    settasks={setTasks}
                  />
                </motion.div>
              )
          )}
    </div>
  );
};

export default Tasks;
