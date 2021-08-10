import {useCallback, useState} from "react";
import React from "react";
import { ToDoListTitle } from "./components/ToDoListTitle";
import {ToDoList} from "./components/ToDoList";

export const App = () => {
    const [message, createMessage] = useState('');

    const onInput = useCallback(
        (e) => {
            createMessage(e.target.value);
        },
        [message]
    )

    const [tasks, setTask] = useState([]);

    const onClick = useCallback(
        () => {
            setTask((tasks) => {
                return [message, ...tasks]
            });

            createMessage('');
        },
        [message]
    )

    const onRemove = useCallback(
        (index) => {
            setTask((tasks) => {
                return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
            });
            createMessage('');
        },
        []
    );

    return (
        <div className='to-do-wrapper'>
            <ToDoListTitle tasks={tasks} />
                <div className="input-wrapper">
                <input
                    className="task-input"
                    value={message}
                    placeholder="Set a task"
                    onChange={onInput}
                >
                </input>
                <button
                    className="set-task-button"
                    onClick={onClick}
                >
                Create a task!
            </button>
                </div>
            <ToDoList tasks={tasks} onRemove={onRemove}/>
        </div>
    )
};