import React from "react";
import { Form, Field } from "react-final-form";
import '../../styles/addTodo.css'


const TodoForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, meta }) => {
    const className = `field ${meta.error && meta.touched ? "errors" : ""} form-control`;
    return (
      <div className={className}>
        <input {...input} className="form-control" id="title" autoComplete="off" complete='false'/>
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };


  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      
      validate={(formValues) => {
        const errors = {};

        if (!formValues.title) {
          errors.title = <h3 className='errors'>You must enter a title</h3>;
        }

        return errors;
      }}
      
      render={({ handleSubmit }) => (
        <div>
        <form onSubmit={handleSubmit} id="title">
          <Field name="title" component={renderInput}/>

          <button className="todo-button-submit">
          <i className="fas fa-search"></i>
            <span className="extra"> Submit </span>
          </button>
        </form>
        </div>
      )}
    />
  );
};

export default TodoForm;
