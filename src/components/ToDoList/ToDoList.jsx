import {ToDoListItem} from "../ToDoListItem";
import React, {useEffect} from "react";

export const ToDoList = ({tasks, onSelected, onRemove}) => {
    return (
        <ul className="to-do-list list">
            {tasks.map(
                (task, index) => <ToDoListItem
                    key={index}
                    description={task.description}
                    color={task.color}
                    onSelected={onSelected}
                    onRemove={onRemove}
                    index={index}
                />
            )}
        </ul>
    )
}