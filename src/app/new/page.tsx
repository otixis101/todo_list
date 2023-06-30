import Link from "next/link"
import { prisma } from "../db";
import { redirect } from "next/navigation";

import { XMarkIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

//Page -- Create New
async function createTodo(data: FormData) {
    "use server"

    const title = data.get('title')?.valueOf();

    if (typeof (title) !== "string" || title.length === 0) {
        throw new Error("Invalid Title")
    }

    await prisma.todo.create({
        data: {
            title,
            complete: false
        }
    })

    redirect("/")
}


const page = () => {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-slate-300">Create New</h1>
            </header>
            <form action={createTodo} className="flex gap-2 flex-col mt-8">
                <input type="text" name="title"
                    className="bg-emerald-500/5 outline-none text-slate-300 text-sm rounded border-2 border-transparent px-3 py-2 
                    focus-within:border-emerald-500/10"
                    placeholder="Title of what todo..." required />
                <div className="flex gap-6 justify-end items-center my-2">
                    <Link href=".." className="flex gap-1 items-center text-sm text-slate-300 hover:text-slate-100"> Cancel</Link>
                    <button type="submit" className="flex gap-1 items-center bg-emerald-700 text-sm text-slate-200 px-6 py-2 rounded hover:bg-emerald-600 hover:text-white outline-none">Create <ClipboardDocumentListIcon className="w-4 h-4 text-slate-300" /></button>
                </div>
            </form>
        </>
    )
}

export default page