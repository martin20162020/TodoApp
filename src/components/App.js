import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, editTodo } from '../redux/actions';
import ToDoList from "./todoList";
import AddToDo from "./addTodo";
import UserContainer from "./UserContainer";
import GoogleAuth from "./GoogleAuth";
import '../styles/App.css'

class App extends React.Component {

  onChange = ({ target }) => this.setState({ [target.name]: target.value });

  onClickAdd = () => {
    this.props.addTodo({ 
      id: Math.floor(Math.random() * 1000), 
      completed:false, 
      ...this.state })  
  };

  onDeleteTodo = (id) => this.props.deleteTodo(id);

  onEditTodo = (id, completed) => this.props.editTodo({id, completed, ...this.state})

  render() {
    const { todos } = this.props;
    const {auth} = this.props

    return (
      <div className="container">
        <GoogleAuth/>
          <AddToDo
              onChange={(e) => this.onChange(e)}
              onClickAdd={() => this.onClickAdd()}
          />
        <ToDoList
            auth={auth}
            todos={todos}
            onEditTodo={(id) => this.onEditTodo(id)}
            onDeleteTodo={(id) => this.onDeleteTodo(id)}
        />
        <UserContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    user: state.users,
    auth: state.auth
    
  };
};
export default connect(mapStateToProps, { addTodo, deleteTodo, editTodo })(App);
