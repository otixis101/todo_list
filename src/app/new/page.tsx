import Link from "next/link"
import { prisma } from "../db";
import { redirect } from "next/navigation";

import { XMarkIcon, PlusIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { revalidatePath } from "next/cache";

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
            // description,
            complete: false
        }
    })
    revalidatePath('/')
    redirect("/")
}


const create = () => {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-slate-300">Create New</h1>
            </header>

            <form action={createTodo} className="container flex gap-4 flex-row items-center flex-wrap rounded p-3">
                <PlusIcon className="w-5 h-5" />
                <input type="text" name="title"
                    className="outline-none bg-transparent text-slate-200 text-sm rounded border-2 placeholder:text-white/30 border-transparent py-2 grow"
                    placeholder="Summary of the task I would like to do" required />
                {/* <input type="text" name="description"
                    className="bg-emerald-500/5 outline-none text-slate-300 text-sm rounded border-2 border-transparent px-3 py-2 
                    focus-within:border-emerald-500/10"
                    placeholder="Description of the task todo..." required /> */}
                <div className="flex gap-6 grow border-t border-dashed pt-4 border-emerald-900/50 md:grow-0 md:pt-0 md:border-0 justify-end items-center">
                    <Link href=".." className="flex gap-1 items-center text-sm text-slate-300 hover:text-slate-100"> <XMarkIcon className="w-4 h-4 " /> Cancel</Link>
                    <button type="submit" className="flex gap-1 items-center border-2 border-emerald-700/50 bg-emerald-700/50 text-sm text-slate-200 px-4 py-2 rounded-md hover:text-white outline-none">Create <ClipboardDocumentListIcon className="w-4 h-4 text-slate-300" /></button>
                </div>
            </form>

        </>
    )
}

export default create