import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import Moment from 'moment';


require('react-datepicker/dist/react-datepicker.css');

class Createform extends Component {
    render() {
    const { handleSubmit } = this.props;
    return (


                <form onSubmit={handleSubmit} className="table-form">
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" component="input" type="text"/>

                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" component="input" type="text"/>

                  <label htmlFor="date">Appointment Date</label>
                  <DatePicker name="date" />
                  <button type="submit">Submit</button>
                </form>
    );
  }
}

// Decorate the form component
Createform = reduxForm({
  form: 'create' // a unique name for this form
})(Createform);

export default Createform;