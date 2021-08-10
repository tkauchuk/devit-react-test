import {ToDoListItem} from "../ToDoListItem";
import React, {useEffect} from "react";

export const ToDoList = ({tasks, onRemove}) => {
    return (
        <ul className="to-do-list list">
            {tasks.map(
                (task, index) => <ToDoListItem value={task} key={index} onRemove={onRemove} index={index}/>
            )}
        </ul>
    )
}