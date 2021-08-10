import React from "react";

export const ToDoListTitle = ({tasks}) => {
    if (tasks.length === 0) {
        return (
            <h1 className="to-do-list-title">You've got <span className="accent-title">no tasks</span> today</h1>
        )
    }
    if (tasks.length === 1) {
        return (
            <h1 className="to-do-list-title">You've got <span className="accent-title">1 task</span> today</h1>
        )
    }
    return (
        <h1 className="to-do-list-title">You've got <span className="accent-title">{tasks.length} tasks</span> today</h1>
    )
};