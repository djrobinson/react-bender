import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class EditForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit} className="table-form">
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>

          <label htmlFor="email">Email Address</label>
          <Field name="email" component="input" type="text"/>
          <button type="submit">Update</button>
        </form>
    );
  }
}

// Decorate the form component
EditForm = reduxForm({})(EditForm);

export default EditForm;