import React, {PropsWithChildren, useState} from 'react';
import {TodoType} from "./TodoType";

type Props = {
    todo: TodoType
}
function Todo(props: Props) {

    return (
        <div>
            <h1>{props.todo.description}</h1>
            <p>{props.todo.status}</p>
            <p>{props.todo.id}</p>
        </div>
    );
}

export default Todo;