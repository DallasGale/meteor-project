import React from 'react';
import { Tasks } from '../api/tasks';


export default class Task extends React.Component {

    toggleChecked() {
        Tasks.update(this.props.task_id, {
            $set: {
                checked: !this.props.task.checked
            },
        });
    }

    deleteThisTask() {
        Tasks.remove(this.props.task._id);
    }


    
    render() {
        const { task } = this.props;
        
        // Classname for checked task item
        const taskClassName = this.props.task.checked ? 'checked' : '';

        return (
            <li className={taskClassName}>
                { task.text }
            </li>
        )
    }
}

export default Task;