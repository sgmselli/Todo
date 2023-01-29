import React from 'react';
import './AddTodo.css'

export class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const todoInput = document.getElementById('addTodo').value;
        this.props.addToList(todoInput);
    }

    render() {

        return (
            <div>
                
                <div className="addButton">
                    <input id="addTodo" placeholder="Enter todo" />
                    <button onClick={this.handleClick} >Add todo</button>
                    <button className="clear" onClick={this.props.clear} >clear</button>
                </div>
            </div>
        )
    }
}