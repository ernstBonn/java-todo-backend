import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoType} from "./TodoType";
import Todo from "./Todo";
import ToDoGallery from "./ToDoGallery";

function App() {

  // const [todo, setTodo] = useState<TodoType>({description: "ourFirstTime", id:"1", status:"someThingLikeDONE"})

  return (
    <div className="App">
      <ToDoGallery/>
    </div>
  );
}

export default App;
