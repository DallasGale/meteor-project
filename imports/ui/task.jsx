import React from 'react';
import { Tasks } from '../api/tasks';


class Task extends React.Component {

    toggleChecked = () => {
        Tasks.update(this.props.task_id, {
            $set: {
                checked: !this.props.task.checked
            },
        });
    }

    deleteThisTask = () => {
        Tasks.remove(this.props.task._id);
    }


    render() {

        // Props
        const { task } = this.props;
        

        // Classname for checked task item
        const taskClassName = this.props.task.checked ? 'checked' : '';

        return (
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteThisTask}>
                    &times;
                </button>

                <input type="checkbox" readOnly checked={!!this.toggleChecked} />

                <span className="text">
                    { task.text }
                </span>
            </li>
        )
    }
}

export default Task;