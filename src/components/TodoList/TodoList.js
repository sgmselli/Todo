import React from 'react';
import { Todo } from '../Todo/Todo';
import './TodoList.css'

export class TodoList extends React.Component {

    render() {

        return (
            <div>
                {(this.props.todoList).map((todo, uuidv4) => {
                    return <Todo todo={todo} idx={uuidv4} key={uuidv4} deleteTodo={this.props.deleteTodo} />
                    
                })}
            </div>
        )
    }
 }