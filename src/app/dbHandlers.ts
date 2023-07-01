"use server"
import { prisma } from "./db"
import { revalidatePath } from "next/cache";

function getTodos() {
    return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {


    await prisma.todo.update({
        where: { id },
        data: {
            complete
        }
    })
}

async function deleteTodo(id: string) {
    await prisma.todo.delete({
        where: {
            id,
        }
    })
    revalidatePath('/')
}

export {getTodos, toggleTodo, deleteTodo}