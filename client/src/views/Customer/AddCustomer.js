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
 
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'C++',
    year: 2012
  },
  {
    name: 'C#',
    year: 2012
  },
  
];
 
// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};
 
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;
 
// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);
 



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

	constructor() {
		super();
	 
		// Autosuggest is a controlled component.
		// This means that you need to provide an input value
		// and an onChange handler that updates this value (see below).
		// Suggestions also need to be provided to the Autosuggest,
		// and they are initially empty because the Autosuggest is closed.
		this.state = {
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
		  suggestions: getSuggestions(value)
		});
	  };
	 
	  // Autosuggest will call this function every time you need to clear suggestions.
	  onSuggestionsClearRequested = () => {
		this.setState({
		  suggestions: []
		});
	  };
	 


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

		const { value, suggestions } = this.state;
 
		// Autosuggest will pass through all these props to the input.
		const inputProps = {
		  placeholder: 'Type a programming language',
		  value,
		  onChange: this.onChange
		};
		
		const { classes } = this.props;
		return (

			<Formik
				initialValues={{ customername: "", contactperson: "", address: "", email: "", phone: "" }}
				validationSchema={this.validationSchema}
				onSubmit={(values, actions) => {
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
							actions.setSubmitting(false);
							actions.resetForm({ customername: "", contactperson: "", address: "", email: "", phone: "" });
							Alert.info('Customer Saved', {
								position: 'top-right',
								effect: 'scale',
								offset: 80
							  });
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
						{/* <Autosuggest
			
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      /> */}
						<Button className={classes.button} type="submit" variant="contained" color="primary" disabled={x.isSubmitting || !isEmpty(x.errors) || !x.dirty} > Submit</Button>
						<Button className={classes.button} type="reset" variant="contained" color="primary">Reset</Button>



					</Form >
				)}
			/>
		);

	}
}

export default withStyles(styles)(AddCustomer);

