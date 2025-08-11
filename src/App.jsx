import { useState } from "react";

import "./App.css";

function App() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] =useState()

    const submitHandle = e => {
        e.preventDefault()}
    }
        return (
        <>
        <h1>Todo App für Schule</h1>
        
        <form onSubmit={submitHandle}>
            <button types="submit">Speicher</button>
            <input type="text"value={}>
    </form>
    </>)
    
    
export default App;