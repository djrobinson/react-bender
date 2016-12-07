import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import Moment from 'moment';


require('react-datepicker/dist/react-datepicker.css');

class Createform extends Component {
    constructor(props) {
        super(props);
        this.renderDynamicField = this.renderDynamicField.bind(this);
    }
    render() {
    const { handleSubmit } = this.props;

    return (
          <form onSubmit={handleSubmit} className="table-form">
            <label htmlFor="firstName">Appointment</label>
            <Field name="appointment" component="input" type="text"/>

            <label htmlFor="date">Appointment Date</label>
            <Field
              changeHandler={this.props.changeHandler}
              selected={this.props.selected}
              component={this.renderDynamicField}
              name="date" />
            <label htmlFor="endDate">End Date</label>
            <Field
              changeHandler={this.props.changeHandler}
              selected={this.props.selected}
              component={this.renderDynamicField}
              name="endDate" />
            <button type="submit">Submit</button>
          </form>
    );
  }
  renderDynamicField(props) {
      const {input} = props;
      let component = null;
      if (true) { // going to support different types...
          component = <DatePicker
              onChange={props.changeHandler}
              selected={props.selected || new Moment()}
              />;
      }
      return component;
  }
}

// Decorate the form component
Createform = reduxForm({
  form: 'create' // a unique name for this form
})(Createform);

export default Createform;