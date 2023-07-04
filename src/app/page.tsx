import TodoItem from "@/components/TodoItem";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { getTodos, toggleTodo, } from './dbHandlers'

//
//Page --- HOME


const home = async () => {


  const todos = await getTodos();


  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl"><span className="text-emerald-400 font-bold">ToDo</span>List</h1>
        <Link href="/new" className="flex gap-1 items-center border-emerald-700/50 text-sm rounded-full text-emerald-100 px-4 py-2 border-2 outline-none group">Create Task <ChevronRightIcon className="h-4 w-4 text-inherit" /> </Link>
      </header>
      {
        todos.length > 0 ? (
          <ul className="px-3 py-6 grow rounded-md container flex flex-col gap-4 bg-zinc-900/10">
            {

              todos.map(todo => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
              ))
            }
          </ul>
        ) :
          (
            <div className="flex flex-col rounded-md bg-emerald-900/10 py-4 px-4 grow justify-center items-center container">
              <div className="text-slate-400 flex flex-col">No Task Created Yet</div>
            </div>
          )

      }
    </div>
  )
}

export default home