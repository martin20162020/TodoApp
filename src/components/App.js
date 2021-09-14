import React from 'react';
import '../styles/App.css'
import { Router, Route, Switch } from 'react-router-dom';
import TodoCreate from './todos/TodoCreate';
import TodoEdit from './todos/TodoEdit';
import TodoDelete from './todos/TodoDelete';
import TodoList from './todos/TodoList';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/todos/new" exact component={TodoCreate} />
            <Route path="/todos/edit/:id" exact component={TodoEdit} />
            <Route path="/todos/delete/:id" exact component={TodoDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
