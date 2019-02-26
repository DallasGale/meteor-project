import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// HOC to access collection inside React Component
import { withTracker } from 'meteor/react-meteor-data';

// import Tasks collection
import { Tasks } from '../api/tasks.js';

import Task from './task.jsx';

class App extends Component {

  handleSubmit() {
    event.preventDefault();

    const InpuDOMNode = ReactDOM.findDOMNode(this.refs.textInput);
    const text = InpuDOMNode.value.trim();

    // Ref Task collection @ '../imports/api/tasks.js'
    Tasks.insert({
      text: text,
      createdAt: new Date()
    });

    // Clear Form
    InpuDOMNode.value = '';
  };


	renderTasks = () => {
		return this.props.tasks.map((task) => <Task key={task._id} task={task} />);
	};

	

	render() {
		return (
			<div className="container">
				<header>
					<h1>My Daily Todo List</h1>
				</header>

        {/* Form to add new tasks */}
				<form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="textInput" placeholder="Type to add new tasks" />
        </form>

        {/*  Todo tasks listed here */}
				<ul>{this.renderTasks()}</ul>

			</div>
		);
	}
}

// HOC
export default withTracker(() => {
	return {
		tasks: Tasks.find({}).fetch()
	};
})(App);
