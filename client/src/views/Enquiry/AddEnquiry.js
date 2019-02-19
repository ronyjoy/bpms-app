import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { LinearProgress, MenuItem } from '@material-ui/core';
import * as Yup from 'yup'
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Badge from '@material-ui/core/Badge';
import Alert from 'react-s-alert';
import {
	fieldToTextField,
	TextField,
	TextFieldProps,
	Select,
} from 'formik-material-ui';
import Autosuggest from 'react-autosuggest';
import theme from '../../assets/css/autocomplete.css';

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

 
// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions =(customers, value)=> {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 console.log(customers);
	return inputLength === 0 ? [] : customers.filter(customer =>
		checkCustomerNameMatching(customer,inputLength,inputValue)
  );
};
const checkCustomerNameMatching = (customer,inputLength,inputValue) =>{
	console.log(customer.customername);
	if(customer.customername) {
		return customer.customername.toLowerCase().slice(0, inputLength) === inputValue
	} else {
		return false;
	}
};
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.customername;
 
// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.customername}
  </div>
);
 

// Async Validation
class AddEnquiry extends React.Component {

	componentDidMount() {
		fetch('/api/customer')
			.then(result => result.json())
			.then(customers => this.setState({customers : customers}) )
	}
	
	constructor() {
		super();
	 
		// Autosuggest is a controlled component.
		// This means that you need to provide an input value
		// and an onChange handler that updates this value (see below).
		// Suggestions also need to be provided to the Autosuggest,
		// and they are initially empty because the Autosuggest is closed.
		this.state = {
			customers :[],
		  value: '',
		  suggestions: []
		};
	  }
	 
	  onChange = (event, { newValue }) => {
		this.setState({
		  value: newValue
		});
	  };
	 
	  // Autosuggest will call this function every time you need to update suggestions.
	  // You already implemented this logic above, so just use it.
	  onSuggestionsFetchRequested = ({ value }) => {

		this.setState({
			suggestions: getSuggestions(this.state.customers,value)
		});
	  };
	 
	  // Autosuggest will call this function every time you need to clear suggestions.
	  onSuggestionsClearRequested = () => {
		this.setState({
		  suggestions: []
		});
	  };


	validationSchema = Yup.object().shape({
		enquiry_date: Yup.string()
			.required('Enquiry Date is required!'),
		enquiry_description: Yup.string()
			.required('Address is required!'),
	})

	render() {		
		const { value, suggestions } = this.state;
		const { classes } = this.props;

		// Autosuggest will pass through all these props to the input.
		const inputProps = {
		  placeholder: 'Select a Customer',
		  value,
		  onChange: this.onChange
		};

		return (
			<Formik
				initialValues={{ enquiry_date: "", enquiry_description: "" }}
				validationSchema={this.validationSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					//Make API calls here
					axios.post("/api/enquiry", values)
						.then(function (response) {
							// handle success
							console.log(response);
						})
						.catch(function (error) {
							// handle error
							console.log(error);
						})
						.then(function () {
							actions.setSubmitting(false);
							actions.resetForm({ enquiry_date: "", enquiry_description: "" });
							Alert.info('Enquiry Saved', {
								position: 'top-right',
								effect: 'scale',
								offset: 80
							  });
						});
				}}
				render={x => (
					<Form>
						<Field type="text" variant="outlined" className={classNames(classes.margin, classes.textField)} label="Enquiry Date" name="enquiry_date" placeholder="" component={TextField} />
						<Field type="text" variant="outlined" className={classNames(classes.margin, classes.textField)} label="Enquiry Description" name="enquiry_description" placeholder="" component={TextField} />
						<br />
						{x.isSubmitting && <LinearProgress />}
						<br />
						{
						<Autosuggest
						suggestions={suggestions}
						onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						getSuggestionValue={getSuggestionValue}
						renderSuggestion={renderSuggestion}
					inputProps={inputProps}
						/> }
			
						<Button className={classes.button} type="submit" variant="contained" color="primary" disabled={x.isSubmitting || !isEmpty(x.errors) || !x.dirty} > Submit</Button>
						<Button className={classes.button} type="reset" variant="contained" color="primary">Reset</Button>
					</Form >
				)}
			/>
		);
	}
}



export default withStyles(styles)(AddEnquiry);