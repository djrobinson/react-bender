import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col } from 'react-bootstrap';

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="table-form">
        <Grid>
          <Row>
            <Col lg={3}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" value="testmeister"/>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text"/>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <label htmlFor="email">Email Address</label>
                <Field name="email" component="input" type="text"/>
              </div>
            </Col>
            <button type="submit">Submit</button>
          </Row>
        </Grid>
      </form>
    );
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;