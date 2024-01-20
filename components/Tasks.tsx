"use client";

import { useEffect, useState } from "react";
import Task from "./Task";
import supabase from "@/utils";
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
  }, [tasks]);

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
                  transition={{ duration: 0.1 * (index + 1) }}
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
                  transition={{ duration: 0.1 * (index + 1) }}
                  exit={{ x: -100 }}
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
