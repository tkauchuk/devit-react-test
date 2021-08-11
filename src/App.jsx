import React, {useCallback, useState} from "react";
import {ToDoListTitle} from "./components/ToDoListTitle";
import {ToDoList} from "./components/ToDoList";
import {ColorPicker} from "./components/ColorPicker";

export const App = () => {
    const [message, createMessage] = useState('');

    const onInput = useCallback(
        (e) => {
            createMessage(e.target.value);
        },
        []
    )

    const [tasks, setTasks] = useState([]);

    const onClick = useCallback(
        () => {
            setTasks((tasks) => {
                return [
                    {
                        description: message,
                        color: null
                    },
                    ...tasks
                ]
            });

            createMessage('');
        },
        [message]
    )

    const [colorPickerTaskIndex, setColorPickerTaskIndex] = useState(null);

    const onColorPickerClick = useCallback(
        () => {
            setColorPickerTaskIndex((index) => {
                return index;
            })
        }
    )

    const onRemove = useCallback(
        (index) => {
            setTasks((tasks) => {
                return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
            });
            
            createMessage('');
        },
        []
    );

    const onTaskSelected = useCallback(
        (index) => {
            setColorPickerTaskIndex(index);
        },
        []
    )

    const onColorSelected = useCallback(
        (color) => {
            setTasks((tasks) => {
                const tasksList = [...tasks];
                const task = tasksList[colorPickerTaskIndex];

                tasksList[colorPickerTaskIndex] = {
                    ...task,
                    color
                };

                return tasksList;
            });
            
            setColorPickerTaskIndex(null);
        },
        [setTasks, colorPickerTaskIndex]
    );

    console.log(tasks);

    return (
        <div className='to-do-wrapper'>
            {(colorPickerTaskIndex === null)
                ? (
                    <React.Fragment>
                        <ToDoListTitle tasks={tasks}/>
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
                        <ToDoList tasks={tasks} onRemove={onRemove} onSelected={onTaskSelected} />
                    </React.Fragment>
                )
                : (<ColorPicker onSelected={onColorSelected}/>)
            }

        </div>
    )
};

