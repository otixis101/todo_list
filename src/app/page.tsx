import TodoItem from "@/components/TodoItem";
import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { getTodos, toggleTodo, } from './dbHandlers'

//
//Page --- HOME


const home = async () => {


  const todos = await getTodos();


  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl"><span className="text-emerald-400 font-bold">ToDo</span>List</h1>
        <Link href="/new" className="flex gap-1 items-center bg-emerald-900/25 border-transparent text-xs text-emerald-300 px-3 py-2 rounded border-2 focus-within:bg-slate-800 outline-none group transition-all duration-300 ease-in ">Create New <ArrowRightIcon className="h-4 w-4 text-emerald-300 transition duration-500 ease-in hidden -translate-x-20 group-hover:-translate-x-0 group-hover:block " /> </Link>
      </header>
      {
        getTodos.length < 0 ? (
          <ul className="px-4 py-6 my-8 grow rounded-md flex flex-col gap-4 bg-slate-800">
            {
              todos.map(todo => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
              ))
            }
          </ul>
        ) :
          (
            <div className="flex flex-col rounded grow bg-slate-800 justify-center items-center container">
              <p className=" text-center text-slate-400">No Task Created Yet</p>
            </div>
          )

      }
    </div>
  )
}

export default home