import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo}) => {
    
    console.log("Hello from TodoList render")  // This should print on Client Side

    return (
        <>
            {todos.length > 0
                ? todos.map((todo) => (
                    < div key={todo._id} className="todo-card" >
                        <h1>
                            {todo.title}
                            <span onClick={() => deleteTodo(todo._id)}>
                            <FaTrash size={15} style={{ marginLeft: 25 }}/>
                            </span>
                        </h1>
                        <p>{todo.description}</p>
                    </div >
                ))
                : <h3 style={{ color: "red" }}>No Todos Were Found</h3>
            }
        </>
    )
}

export default TodoList;

//onClick={() => alert(`You Cliked ${data._id}`)}
