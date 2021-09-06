import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, editTodo } from '../redux/todos/actions';
import { signIn, signOut } from "../redux/authentication/actions";
import ToDoList from "./todoList";
import AddToDo from "./addTodo";
import UserContainer from "./UserContainer";
import GoogleAuth from "./GoogleAuth";
import '../styles/App.css'
import Testing from "../redux/Testing";
import Login from "./Login";
import GoogleAuthentication from "./GoogleAuthentication";
import Logout from "./Logout";


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
    const { userAuth } = this.props;
    const {googleReducer} = this.props

    return (
      <div className="container">
        <GoogleAuth
        signIn={signIn}
        signOut={signOut}
        userAuth={userAuth}
        auth={auth}
        googleReducer={googleReducer}
        />
        {/* <GoogleAuthentication/> */}
        {/* <Login/> */}
        {/* <Logout googleReducer={googleReducer}/> */}
        {/* <Testing/> */}
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
    auth: state.auth,
    userAuth: state.auth
    
  };
};
export default connect(mapStateToProps, { addTodo, deleteTodo, editTodo })(App);
