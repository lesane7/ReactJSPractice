import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        console.log(this.state);
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>Digite Aqui: </p>
                <input type="text"
                    name="title"
                    placeholder="Write here a Task.."
                    onChange={this.onChange}
                    value={this.state.title}></input><br /><br />
                <textarea
                    name="description"
                    placeholder="Write here a Description.."
                    onChange={this.onChange}
                    value={this.state.description}></textarea><br />
                <input type="submit" />
            </form>
        )

    }
}

export default TaskForm;


