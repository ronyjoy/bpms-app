import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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

// Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



const AddCustomer = () => (
	<Formik
		initialValues={{ customername: "", contactperson: "",address:"", email:"", phone:"" }}
		validate={values => {
			const errors = {};
			if (!values.customername) {
				errors.customername = "Required";
			}
			if (!values.contactperson) {
				errors.contactperson = "Required";
			}
			if (!values.phone) {
				errors.phone = "Required";
			}
			if (!values.address) {
				errors.address = "Required";
			}
			if (!values.email) {
				errors.email = "Required";
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = "Invalid email address";
			}
			return errors;
		}}
		onSubmit={(values, { setSubmitting }) => {
			console.log(values);
			//Make API calls here

			setTimeout(() => {
				setSubmitting(false);
				alert(
					`Submitted Successfully ->  ${JSON.stringify(values, null, 2)}`
				);
			}, 2000);
		}}
		render={({ submitForm, isSubmitting, values }) => (
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
													<Field type="email" label="Email" name="email" component={ReactstrapInput} />
												</FormGroup>
											</Col>
											<Col xs="4">
												<FormGroup>
													<Field type="text" label="Phone" name="phone" component={ReactstrapInput} />
												</FormGroup>
											</Col>
										</FormGroup>
									</FormGroup>
								</CardBody>
								<CardFooter>
									<Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
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