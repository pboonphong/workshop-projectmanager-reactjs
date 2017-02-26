import React, { Component } from 'react';
import Todo from './Todo'

class Todos extends Component {
  render() {
    let todos;
    if (this.props.todos) {
      todos = this.props.todos.map(todo => {
        return (
          <Todo key={todo.title} todo={todo}/>
        );
      });
    }
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        {todos}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array
}

export default Todos;
