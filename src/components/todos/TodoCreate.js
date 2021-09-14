import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/todos/actions";
import TodoForm from "./TodoForm";
import '../../styles/addTodo.css'

class TodoCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.addTodo(formValues);
  };

  render() {
    return (
      <div>
        <h2>Start Creating New Tasks</h2>
        <TodoForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, { addTodo })(TodoCreate);
