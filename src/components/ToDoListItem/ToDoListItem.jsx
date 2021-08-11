import React, {useCallback, useMemo} from "react";

export const ToDoListItem = ({description, index, onSelected, onRemove, color = null}) => {
    const handleRemove = useCallback(
        (e) => {
            e.stopPropagation();
            onRemove(index);
        },
        [index, onRemove]
    );

    const handleSelection = useCallback(
        () => onSelected(index),
        [onSelected, index]
    );

    const styles = useMemo(
        () => ({
            backgroundColor: color
        }),
        [color]
    );

    return (
        <li className="to-do-list-item"
            onClick={handleSelection}
            style={styles}
        >
            <button
                className="color-choice-button"
                type="button"
            >
            </button>
            <span className="task-to-do">
                {description}
            </span>
            <button
                className="task-done-button"
                type="button"
                onClick={handleRemove}
            >
                Delete task!
            </button>
        </li>
    )
};