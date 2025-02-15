import { useEffect, useState } from "react";
import Form from "../components/Form";
import Tasks from "../components/Tasks";
import { v4 } from "uuid";

interface Task {
    id: string;
    title: string;
    description: string;
    isDid: boolean
}

export default function Home () {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || []))
      //function to save a task
      function onClickAddTaskProp (title: string, description: string) {
        const newTasks = {
          id: String(v4()),
          title,
          description,
          isDid: false
        }
        setTasks([...tasks, newTasks])
      }

      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }, [tasks])

      //function to verify if is completed a task
      function onClickTaskIsDid(id: string) {
        const newTasks = tasks.map((task: Task) => {
          if(task.id == id) {
            return {...task, isDid: !task.isDid}
          }
          return task
        })
        setTasks(newTasks)
      }

     //functio to delete a task
     function onClickDeleteTaskById (id:string) {
      const newTasks = tasks.filter((task: Task) => task.id != id)

      setTasks(newTasks)
     } 

    return (
        <div>
            <h1 className="text-white text-center text-bold font-bold text-3xl m-5">
                Gerenciador de Tarefas
            </h1>
            <Form onClickAddTaskProp={onClickAddTaskProp} />
            <Tasks onClickTaskIsDid={onClickTaskIsDid} onClickDeleteTaskById={onClickDeleteTaskById} tasks={tasks} />
        </div>
    )
}