import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { deleteTodo, updateMyList } from '../../actions'
import { useHistory } from 'react-router-dom'
import deleteSvg from "./Delete.svg"
import editSvg from "./Edit.svg"
import addSVG from "./Add.svg"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const List = () => {
    const list = useSelector(state => state.todos.list)
    const [isDragging, setIsDragging] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()


    const onDragEnd = (result) => {
        const updatedList = [...list];
        [updatedList[result.destination.index], updatedList[result.source.index]] = [updatedList[result.source.index], updatedList[result.destination.index]]
        dispatch(updateMyList(updatedList));
        setIsDragging(false)
    }
    const onDragStart = (result) => {
        setIsDragging(true)
    }
    return (

        <div className="py-8 w-full">
            <h2 className="text-center font-bold text-xl flex  justify-center align-center uppercase py-4">
                <span className="w-64 flex align-center">
                    <img onClick={() => { history.push("/todo") }} className="w-8" src={addSVG}></img>&nbsp;   My Todo Items
                </span>
            </h2>
            {list?.length && <div className="container mx-auto 
         ">
                <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="flex justify-around flex-wrap">

                                {list.map(({ title, description, color }, index) => (
                                    <Draggable key={title + index} draggableId={description} index={index}>
                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps} className={`rounded-md overflow-hidden my-3 w-2/5 h-32  p-3 ${color}`} key={index + title}>
                                                <h2 className="text-lg flex justify-between align-center">{title}
                                                    <div className="flex w-10">

                                                        <img src={deleteSvg} className="w-5 cursor-pointer" alt="" onClick={() => { if (window.confirm('Are you sure you want to delete?')) dispatch(deleteTodo(index)) }} />
                                                        <img src={editSvg} className="w-5 cursor-pointer" alt="" onClick={() => { history.push("/todo/" + index) }} />

                                                    </div>
                                                </h2>
                                                <div className="flex w-full truncate items-center p-2 pl-2 border-transparent border-l-2 relative">

                                                    {description}
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>))
                                }


                            </div>)}
                    </Droppable>
                </DragDropContext>
            </div>}
        </div >



    )
}

export default List
