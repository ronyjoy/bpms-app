import React from 'react';
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import { LinearProgress } from '@material-ui/core';
import * as Yup from 'yup'
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Alert from 'react-s-alert';
import { connect } from 'react-redux';
import {addCustomer} from '../../actions/customerActions'

import {
	TextField,
} from 'formik-material-ui';
 

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing.unit,
	},
	textField: {
		flexBasis: 200,
	},
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
});


// Async Validation
class AddCustomer extends React.Component {

	addCustomer = async (data) => {
    this.props.dispatch(addCustomer(data));
  }


	validationSchema = Yup.object().shape({
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

	
	render() {

		const { classes } = this.props;
		return (

			<Formik
				initialValues={{ customername: "", contactperson: "", address: "", email: "", phone: "" }}
				validationSchema={this.validationSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					this.addCustomer(values);
					actions.setSubmitting(false);
					actions.resetForm({ customername: "", contactperson: "", address: "", email: "", phone: "" });
					Alert.info('Customer Saved', {
								position: 'top-right',
								effect: 'scale',
								offset: 80
							  });
				}}
				render={x => (
					<Form>
						<Field type="text" variant="outlined" className={classNames(classes.margin, classes.textField)} label="Customer Name" name="customername" placeholder="ABC Customer" component={TextField} />
						<Field type="text" variant="outlined" className={classNames(classes.margin, classes.textField)} label="Contact Person" name="contactperson" placeholder="Contact Person" component={TextField} />
						<Field type="text" variant="outlined" label="Address" className={classNames(classes.margin, classes.textField)} name="address" placeholder="Address" component={TextField} />
						<Field type="email" variant="outlined" label="Email" className={classNames(classes.margin, classes.textField)} name="email" placeholder="email@email.com" component={TextField} />
						<Field type="text" variant="outlined" label="Phone" className={classNames(classes.margin, classes.textField)} name="phone" placeholder="1111111111" component={TextField} />
						<br />
						{x.isSubmitting && <LinearProgress />}
						<br />
						<Button className={classes.button} type="submit" variant="contained" color="primary" disabled={x.isSubmitting || !isEmpty(x.errors) || !x.dirty} > Submit</Button>
						<Button className={classes.button} type="reset" variant="contained" color="primary">Reset</Button>
					</Form >
				)}
			/>
		);

	}
}


const mapStateToProps = state => ({
  customers: state.customer
});

export default connect(mapStateToProps)( withStyles(styles)(AddCustomer));

