import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../../actions';

const Add = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const params = useParams()
    const action = params?.id ? "Update" : "Add"
    useEffect(() => {
        if (params?.id && todoList[params?.id]) {
            setTodo(todoList[params?.id])
        }
    }, [params?.id])
    const todoList = useSelector(state => state.todos.list)

    console.log(params?.id)
    const getRandomTodoColors = () => {
        const arrayOfColors = ["text-white bg-teal-500", "text-white bg-indigo-500", "text-white bg-yellow-500"]
        const random = Math.floor(Math.random() * arrayOfColors.length);
        return arrayOfColors[random];
    }
    const [todo, setTodo] = useState({ title: "", description: "" })
    const handleChange = (e) => {
        setTodo({
            ...todo,
            color: getRandomTodoColors(),
            [e.target.name]: e.target.value
        })
    }


    return (<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>

                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    {action} Todo
                </h2>

            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="title" className="sr-only">
                            Title
                        </label>
                        <input
                            onChange={handleChange}
                            id="title"
                            name="title"
                            value={todo.title}
                            type="text"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Todo Title"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="sr-only">
                            Description
                        </label>
                        <textarea
                            onChange={handleChange}
                            id="description"
                            name="description"
                            value={todo.description}
                            type="description"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Description"
                        />
                    </div>
                </div>






                <div>
                    <button
                        onClick={() => {
                            if (action == "Update") {
                                dispatch(updateTodo(todo, params?.id))
                            }
                            else dispatch(addTodo(todo))
                            history.push("/todo/list")
                            // dispatch()
                        }}
                        type="button"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                        {action.toUpperCase()}
                    </button>
                </div>
                <div>
                    <p
                        className="underline text-right cursor-pointer text-indigo-600 "
                        onClick={() => { history.push("/todo/list") }}
                    >
                        Switch To List
                    </p>
                </div>
            </form>
        </div>
    </div >);
}

export default Add
