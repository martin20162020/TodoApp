import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchTodoTask, editTodo } from "../../redux/todos/actions";
import TodoForm from "./TodoForm";

class TodoEdit extends React.Component {
  
  componentDidMount() {
    this.props.fetchTodoTask(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.todo) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {console.log(_.pick(this.props.todo, "title"))}
        <div>
          <i className="fas fa-calendar-check"></i>
          <span className="extra">Complete</span>
        </div>
        <TodoForm
          initialValues={_.pick(this.props.todo, "title")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodoTask, editTodo })(
  TodoEdit
);
