'use client'

import Link from "next/link";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import Loading from "../components/CustomLoader"

const ServerAction = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchTodos = async () => {
            const response = await fetch("/api/todo")
            const todos = await response.json();
            console.log("useEffect Running")
            setTodos(todos);
            setLoading(false);
        }

        fetchTodos();

    }, [loading])

    const deleteTodo = async (id) => {
        try {
            
            const response = await fetch("/api/todo",{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({id:id})
            })
            const result = await response.json();

            setLoading(true);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Next.js - 13.4 (Update)</h1>
            <p>
                This "Server Action" Section includes a Client-Side component which will render all the <b>" TODOs " </b> from the Database on inital load,
                and a Server-Side Component which will be a button.
                <br /><br />
                Furthermore, the <b>button</b> given below is to create a <b>New TODO</b> which includes a Form which uses the <b>New Features from Next 13.4 Update
                    know as " Server Action "</b>
            </p>
            <br />
            <h2>MongoDB-Fetched-TODOs</h2>
            {loading
                ? <Loading />
                : <TodoList todos={todos} deleteTodo={deleteTodo}/>
            }
            <div className="todo-btn-wrap">
                <Link href="serverAction/createTodo" className="todo-btn">
                    Create Todo
                </Link>
            </div>
        </div>
    )
}

export default ServerAction;
