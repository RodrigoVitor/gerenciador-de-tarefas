import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface TaskInterface {
  id: string,
  title: string,
  description: string,
  isDid: boolean
}

export default function Task() {
  const { id } = useParams();
  const [task, setTask] = useState<TaskInterface[]>()

  useEffect(() => {
      const storedTasks  = localStorage.getItem('tasks')
      const newTask = storedTasks ? JSON.parse(storedTasks) : [];
      setTask(newTask)
  }, [])

  return (
    <div className="bg-slate-200 mt-4">
      <div className="p-4 w-[560px]">
        <div className="flex gap-2">
            <Link to="/" className="bg-slate-400 m-auto p-2 text-white rounded-md cursor-pointer">
                <ChevronLeft />
            </Link>
            <div className="w-[400px] bg-slate-400 text-white p-2 rounded-md">
                {task?.map((t) => (
                  <div key={t.id}>
                    {t.id == id && (
                      <p>{t.description}</p>
                    )}
                 </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
