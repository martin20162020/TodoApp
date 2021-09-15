import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodoTasks } from '../../redux/todos/actions';
import TodoCreate from './TodoCreate';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodoTasks();
  }

  renderAdmin(todo) {
    if (todo.userId === this.props.currentUserId) {
      return (
        <div>
          <button className="complete-btn">
          <Link to={`/todos/edit/${todo.id}`}className="complete-btn">
                <i className="fas fa-calendar-check"></i>
                <span className="extra"> EDIT </span>
          </Link>
          </button>

          <button className="trash-btn">
          <Link to={`/todos/delete/${todo.id}`}>
            <i className="fas fa-calendar-times"></i>
            <span className="extra"> DELETE </span>
          </Link>
          </button>
        </div>
      );
    }
  }
  renderList() {

    return this.props.todos.map(todo => {
      return (
        <div className="todo-container">
          <div>
        <div className="todo" key={todo.id}>
          <div className="authorAndItem">
            <li className="todo-item">{todo.title}</li>
            <h3 className="author"> Posted By: {todo.name}</h3>
            </div>
            <div>
              {this.renderAdmin(todo)}
            </div>
          </div>
        </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <TodoCreate/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderCreate()}
        <div className="todo-container">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: Object.values(state.todos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchTodoTasks }
)(TodoList);
