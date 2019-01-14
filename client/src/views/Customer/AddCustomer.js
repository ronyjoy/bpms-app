import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField} from '../Components/UIComponents'
import { Badge, Button, ButtonDropdown, Card, CardBody, CardFooter, CardHeader, Col, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Fade, Form, FormGroup, FormText, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, } from 'reactstrap';


const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const handleSubmi1 = event => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data);
};



class AddCustomer extends Component {

render() {
  return (
    <form onSubmit={this.props.handleSubmit(values => console.log(values))}>

      <div className="animated fadeIn">
        <Row>

          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>New</strong>
                <small> Customer</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Field name="customername" type="text" component={TextField} label="Customer Name" />
                </FormGroup>

                <FormGroup>
                  <Field name="address" type="textarea" component={TextField} label="Customer Address" />
                </FormGroup>
                <FormGroup>
                  <Field name="contactperson" type="textarea" component={TextField} label="Contact Person" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Street</Label>
                  <Input type="text" id="street" placeholder="Enter street name" />
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" name = "city" id="city" component = "Field" placeholder="Enter your city" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input type="text" id="postal-code" placeholder="Postal Code" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input type="text" id="country" placeholder="Country name" />
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Field
          name="username"
          type="text"
          component={TextField}
          label="Username"
        />
        <Field name="email" type="email" component={TextField} label="Email" />
        <Field name="age" type="number" component={TextField} label="Age" />
        <div>
          <button type="submit" >
            Submit
        </button>
          <button type="button" >
            Clear Values
        </button>
        </div>
      </div>
    </form>
  )
}

}
 
export default reduxForm({
  form: 'AddCustomerForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(AddCustomer)