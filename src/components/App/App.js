import './App.css';
import { TodoList } from '../TodoList/TodoList';
import { AddTodo } from '../AddTodo/AddTodo';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        todoList : []
      };
    this.addToList = this.addToList.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.clear = this.clear.bind(this);
  }

  useEffect() {
    localStorage.setItem('todoList', JSON.stringify(this.state['todoList']));
  }

  addToList(_newTodo) {
    this.state['todoList'].push(_newTodo);
    const newList = this.state['todoList'];
    this.setState({ todoList : newList });
    this.useEffect()
  }

  clear() {
    localStorage.clear()
    this.setState({ todoList : [] })
  }

  deleteTodo(_idx) {
    this.state['todoList'].splice(_idx, 1);
    const newList = this.state['todoList'];
    this.setState({ todoList : newList });
    this.useEffect();
  }


  render() {

    let store = JSON.parse(localStorage.getItem('todoList'));
    if (store === null) {
      store = [];
    }

    return (
      <div className="App">

        <h1 className='title'>Need to, todo</h1>

        <div>
          <AddTodo addToList={this.addToList} clear={this.clear}/>
        </div>
        <div>
          <TodoList todoList={store} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;