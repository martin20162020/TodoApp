import React from "react";

const ToDoList = ({ todos, onDeleteTodo, onEditTodo, auth}) => {
  console.log(auth)
    return (<div className="todo-container">
      <h2>{auth.isSignedIn === null ? 'Fetching your list...': `${auth.name}'s List`}</h2>
    {todos.todos && todos.todos.length > 0 ? (
      todos.todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="authorAndItem">
            <li className={`${todo.completed ? "todo-item completed": 'todo-item'}`}>{todo.completed ? `${todo.title} is completed`: todo.title }</li>
            <h3 className="author"> Posted By: {auth.name ? `${auth.name}` : 'Fetching user...'}</h3>
          </div>

          <div>
          <button className="complete-btn" onClick={() => onEditTodo(todo.id)}>
                <i className="fas fa-calendar-check"></i>
                <span className="extra"> EDIT </span>
            </button>

            <button className="trash-btn" onClick={() => onDeleteTodo(todo.id)}>
                <i className="fas fa-calendar-times"></i>
                <span className="extra"> DELETE </span>
            </button>
          </div>            
        </div>
      ))
    ) : (
      <i>You haven't added a to do task yet, let's get started and get your tasks complete.</i>
    )}
  </div>

  )
};

export default ToDoList;