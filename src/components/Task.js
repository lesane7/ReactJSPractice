import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'Darkblue' : 'gray',  //condicional v: blue f: gray
            textDecoration: this.props.task.done ? 'Darkgreen' : 'none'
        }
    }

    render() {
        //Destructuring
        const { task } = this.props;

        return <div style={this.StyleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            < input type="checkbox" />
            <button style={btnDelete}>Delete</button>
        </div >
    }
}

//nos ayuda a especificar o validar que tipo de datos nos estan pasando
Task.propTypes = {
    Task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: 'green',
    color: '#fff',
    borderRadius: '50%',
    border: 'solid',
    padding: '10px 15px',
    cursor: 'pointer'
}

export default Task;