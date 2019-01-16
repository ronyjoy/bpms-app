import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
	Container,
	Badge,
	Button,
	ButtonDropdown,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Col,
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Fade,
	FormGroup,
	FormText,
	FormFeedback,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Label,
	Row,
} from 'reactstrap';
import { ReactstrapInput } from "reactstrap-formik";
import "bootstrap/dist/css/bootstrap.min.css";
import isEmpty from 'lodash/isEmpty';

// Async Validation

const validationSchema = Yup.object().shape({
	email: Yup.string()
	  .email('E-mail is not valid!')
	  .required('E-mail is required!'),
	address: Yup.string()
	  .min(6, 'Address has to be longer than 6 characters!')  
	  .required('Address is required!'),
	customername: Yup.string()
	  .required('Customer Name is required!'),
	contactperson: Yup.string()
	  .required('Contact Person Name is required!'),
	phone: Yup.number() 
	  .required('phone is required!'),
  })


const AddCustomer = () => (



	<Formik
		initialValues={{ customername: "", contactperson: "",address:"", email:"", phone:"" }}
		validationSchema={validationSchema}
		onSubmit={(values, { setSubmitting }) => {
			console.log(values);
			//Make API calls here
			axios.post("/api/customer", values)
			.then(function (response) {
				// handle success
				console.log(response);
			  })
			  .catch(function (error) {
				// handle error
				console.log(error);
			  })
			  .then(function () {
				// always executed
			  });
		}}
		render={({ values, touched, errors, dirty, isSubmitting , submitForm }) => (
			<Form>
				<Container >
					<Row>



						<Col md="12" sm="6">
							<Card>
								<CardHeader>
									<strong>New</strong>
									<small> Customer</small>
								</CardHeader>
								<CardBody>
									<FormGroup>
										<FormGroup row className="my-0">
											<Col xs="8">
												<FormGroup>
													<Field type="text" label="Customer Name" name="customername" placeholder="ABC Customer" component={ReactstrapInput} />
												</FormGroup>
											</Col>
											<Col xs="4">
												<FormGroup>
													<Field type="text" label="Contact Person" name="contactperson" placeholder="Contact Person" component={ReactstrapInput} />
												</FormGroup>
											</Col>
										</FormGroup>
										<FormGroup>
											<Field type="text" label="Address" name="address" placeholder="Address" component={ReactstrapInput} />

										</FormGroup>
										<FormGroup row className="my-0">
											<Col xs="8">
												<FormGroup>
													<Field type="email" label="Email" name="email" placeholder="email@email.com"component={ReactstrapInput} />
												</FormGroup>
											</Col>
											<Col xs="4">
												<FormGroup>
													<Field type="text" label="Phone" name="phone" placeholder="1111111111" component={ReactstrapInput} />
												</FormGroup>
											</Col>
										</FormGroup>
									</FormGroup>
								</CardBody>
								<CardFooter>
									<Button type="submit" disabled={isSubmitting || !isEmpty(errors) || !dirty} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
									<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
								</CardFooter>
							</Card>
						</Col>

					</Row>
				</Container>
			</Form >
		)}
	/>
);

export default AddCustomer;