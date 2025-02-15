import { useState } from "react"

interface Props {
    onClickAddTaskProp: (title: string, description: string) => void
}

export default function Form ({onClickAddTaskProp}: Props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function validForm () {
        if (!title || !description) {
            alert("Preenche todos os dados")
             return;
        }
        onClickAddTaskProp(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <div className="bg-slate-200 p-8 flex flex-col gap-4 w-[560px] ">
            <input 
                value={title} 
                type="text" 
                placeholder="Digite o nome da tarefa" 
                className="p-2 bg-white"
                onChange={(e) => setTitle(e.target.value) }
            />
            <input 
                value={description} 
                type="text" 
                placeholder="Digite a descrição da tarefa" 
                className=" p-2 bg-white"
                onChange={(e) => setDescription(e.target.value) } 
            />
            <button 
                className="bg-slate-500 p-2 text-white rounded-md cursor-pointer hover:bg-slate-400"
                onClick={() => validForm()}
            >
                    Adicionar
            </button>
        </div>
    )
}