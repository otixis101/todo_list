"use client"

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}
const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps) => {
    return (
        <li className="flex gap-1 rounded items-center bg-emerald-500/5 border-emerald-500/10 border-2 py-3 px-3">
            <input id={id} type="checkbox" onChange={e => toggleTodo(id, e.target.checked)} defaultChecked={complete} className="w-4 h-4 cursor-pointer default:accent-blue-400 checked:accent-emerald-500 peer" />
            <label htmlFor={id} className="peer-checked:line-through text-slate-300 cursor-pointer select-none peer-checked:text-sm peer-checked:text-slate-500">{title}</label>
        </li>
    )
}

export default TodoItem