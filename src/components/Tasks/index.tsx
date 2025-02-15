import { ChevronRight, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Tasks {
    id: number,
    title: string,
    description: string,
    isDid: boolean
}

interface Props {
    tasks: Tasks[],
    onClickTaskIsDid: (id: string) => void,
    onClickDeleteTaskById: (id: string) => void
}

export default function Tasks ({tasks, onClickTaskIsDid, onClickDeleteTaskById}: Props) {
    return (
       <div className="bg-slate-200 mt-4">
            {tasks && (
                tasks.map(task => (
                    <div className="p-4 w-[560px]" key={task.id}>
                        <div className="flex gap-2">
                            <div 
                                onClick={() => onClickTaskIsDid(String(task.id))}
                                className={`w-[400px] cursor-pointer bg-slate-400 text-white p-2 rounded-md ${task.isDid ? 'line-through' : '' }`}
                            >
                                {task.title}
                            </div>
                            <Link to={`/task/${task.id}`} className="bg-slate-400 m-auto p-2 text-white rounded-md cursor-pointer">
                                <ChevronRight />
                            </Link>
                            <div onClick={() => onClickDeleteTaskById(String(task.id))} className="bg-slate-400 m-auto p-2 text-white rounded-md cursor-pointer">
                                <Trash2 />
                            </div>
                        </div>
                    </div>
                ))
            )}
       </div>
    )
}