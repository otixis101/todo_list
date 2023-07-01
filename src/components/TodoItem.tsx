"use client"

import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { deleteTodo } from '../app/dbHandlers'
import { useTransition } from 'react'

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void

}
const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps) => {
    let [isPending, startTransition] = useTransition()
    return (
        <li className="relative flex gap-1 rounded items-center bg-emerald-500/5 border-emerald-500/10 border-2 py-3 px-3 hover:border-emerald-500/50 transition duration-300 ease-linear group">
            <input id={id} type="checkbox" onChange={e => toggleTodo(id, e.target.checked)} defaultChecked={complete} className="w-4 h-4 cursor-pointer default:accent-blue-400 checked:accent-emerald-500 peer" />
            <label htmlFor={id} className="peer-checked:line-through text-slate-300 cursor-pointer select-none peer-checked:text-sm peer-checked:text-slate-500">{title}</label>

            <div className="absolute right-0 flex pr-1 items-center gap-2 justify-end w-fit p-2 pl-6 rounded bg-gradient-to-l from-emerald-500/20 from-40% ... opacity-0 group-hover:opacity-100 transition duration-150 ease-linear">
                <button className="bg-emerald-900/20 hover:bg-red-400 hover:border-red-400 border-emerald-500/60 border p-2 outline-none rounded"
                    onClick={() => startTransition(() => deleteTodo(id))}>
                    <TrashIcon className='w-4 h-4' />
                </button>
                <button className=" hover:bg-blue-500 hover:border-blue-500 p-2 outline-none rounded border-emerald-500/60 border">
                    <PencilSquareIcon className='w-4 h-4' />
                </button>
            </div>
        </li>
    )
}

export default TodoItem