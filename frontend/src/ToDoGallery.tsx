import React, {useState} from 'react';
import {TodoType} from "./TodoType";
import Todo from "./Todo";
import axios from "axios";
import todo from "./Todo";
// type Props = {
//     toDolist: TodoType[]
// }
function ToDoGallery() {

    const [toDoList, setTodoList] = useState<TodoType[]>([])



    function addTodo(){
        axios.post("/api/todo")
            .then(todo => {
                setTodoList(todo.data)
            })
    }

    function getToDos(){
        axios.get("/api/todo")
            .then(response =>{setTodoList(response.data)
            })
    }

    return (

        <div>
            <button onClick={getToDos}>getStuff</button>
            <div>{toDoList.map((currentTodo:TodoType) =>
                < Todo key={currentTodo.id} todo={currentTodo}/>)}</div>
        </div>
    );
}

export default ToDoGallery;