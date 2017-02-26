import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li className="Todo">
        {this.props.todo.id}: {this.props.todo.title}
      </li>
    );
  }
}

Todo.propTypes = {
  Todo: React.PropTypes.object,
}

export default Todo;
