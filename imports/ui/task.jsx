import React from 'react';

const Task = (props) => {
    const { task } = props;

    return (
        <li>
            { task.text }
        </li>
    )
}

export default Task;