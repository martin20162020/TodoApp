import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchTodoTask, deleteTodo } from '../../redux/todos/actions';

class TodoDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodoTask(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
        className="trash-btn" 
          onClick={() => this.props.deleteTodo(id)}
        >
                <i className="fas fa-calendar-times"></i>
                <span className="extra"> Delete </span>
        </button>
        <Link to="/">
        <button
        className="trash-btn" >
            <strong className="x">X</strong>
              <span className="extra">  Cancel </span>
        </button>
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.todo) {
      return 'Are you sure you want to delete this task?';
    }

    return (
      <div>
        Are you sure you want to delete 
        <strong className="todoTitle"> "{this.props.todo.title}"</strong>
      </div>
    )
  }

  render() {
    return (
      <Modal
        title="Delete Task"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchTodoTask, deleteTodo }
)(TodoDelete);
