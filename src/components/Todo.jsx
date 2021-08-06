import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from "./Todo/List.jsx";
import Add from "./Todo/Add.jsx"
const Todo = () => {
    return (
        <div>
            <Add />
        </div>
    )
}

export default Todo
