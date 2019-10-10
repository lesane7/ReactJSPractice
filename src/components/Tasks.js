import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends Component {
    render() {
        return this.props.tasking.map(task => <Task task={task} key={task.id} />);
    }
}

//nos ayuda a especificar o validar que tipo de datos nos estan pasando
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;