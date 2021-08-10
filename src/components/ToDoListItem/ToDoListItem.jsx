import React, {useCallback, useEffect, useState} from "react";

export const ToDoListItem = ({value, index, onRemove}) => {
    const onClick = useCallback(
        () => onRemove(index),
        [index, onRemove]
    );

    return (
        <li className="to-do-list-item">
        <span className="task-to-do">
            {value}
        </span>
            <button
                className="task-done-button"
                type="button"
                onClick={onClick}
            >
                Delete task!
            </button>
        </li>
    )
};