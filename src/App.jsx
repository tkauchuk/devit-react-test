import {useCallback, useState} from "react";
import React from "react";
import './App.css'
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
        <>
            <label>
                <input
                    value={message}
                    onChange={onInput}
                >
                </input>
            </label>
            <button onClick={onClick}>
                Create a task!
            </button>
            <ToDoList tasks={tasks} onRemove={onRemove}/>
        </>
    )
};