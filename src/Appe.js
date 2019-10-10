import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm'

class Appe extends Component {

    state = {
        tasks: tasks
    }

    render() {
        return <div>
            <TaskForm />
            <Tasks tasking={this.state.tasks} />
        </div>
    }
}

export default Appe;
