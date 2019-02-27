import {
  Form, Select, Input, Button,DatePicker,TimePicker,AutoComplete,Slider,Radio,Icon
} from 'antd';
import React from 'react';
import Alert from 'react-s-alert';
import { connect } from 'react-redux';
import {addCustomer} from '../../actions/customerActions'
import 'antd/dist/antd.css';
 
const { TextArea } = Input;

class AddCustomer extends React.Component {

	addCustomer = async (data) => {
    this.props.dispatch(addCustomer(data));
	}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
				console.log('Received values of form: ', values);
        this.props.dispatch(addCustomer(values))
        if(!this.props.loading && this.props.error ==null && this.props.customeradded ) {
					Alert.info('Customer Saved', {
							position: 'top-right',
							effect: 'scale',
							offset: 80
							});
				} 
      }
    });
  }

	

	render() {

		const { loading, error , customeradded} = this.props;
		const { getFieldDecorator } = this.props.form;

		if(!loading && error!=null) {
			Alert.info('Error Saving the Customer', {
				position: "top-right",
				effect: "scale",
				offset: 80
			});
		}
		
		
		return (
			
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="Customer Name" >
          {getFieldDecorator('name', {rules: [{ required: true, message: 'Customer Name' }],})(
            <Input  />
          )}
        </Form.Item>
      	<Form.Item label="Address">
				{getFieldDecorator('address', {rules: [{ required: true, message: 'Address' }],})(
            <TextArea rows={4} />
          )}
				</Form.Item>
				<Form.Item label="Phone" >
          {getFieldDecorator('phone', {rules: [{ required: true, message: 'Phone' }],})(
            <Input  />
          )}
        </Form.Item>
        <Form.Item label="Fax">
					{getFieldDecorator('fax', {rules: [{ required: true, message: 'Fax' }],})(
          <Input />
						
					)}
        </Form.Item>
        <Form.Item label="Customer Contact">
          {getFieldDecorator('contactPerson', {rules: [{ required: true, message: 'Contact Person' }],})(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="email">
          {getFieldDecorator('email', {rules: [{ required: true, message: 'Contact Person Phone' }],})(
            <Input />
          )}
        </Form.Item>
				<Form.Item label="Customer Priority"
        >
          {getFieldDecorator('rank')(
            <Radio.Group defaultValue="AVG" buttonStyle="solid">
						<Radio.Button value="BAD">BAD</Radio.Button>
						<Radio.Button value="AVG">AVG</Radio.Button>
						<Radio.Button value="GOOD">GOOD</Radio.Button>
						<Radio.Button value="GREAT">GREAT</Radio.Button>
					</Radio.Group>
          )}
        </Form.Item>
				<Form.Item label="Approved"
        >
          {getFieldDecorator('approved')(
            <Radio.Group defaultValue="false" buttonStyle="solid">
						<Radio.Button value="false">NO</Radio.Button>
						<Radio.Button value="true">YES</Radio.Button>
					</Radio.Group>
          )}
        </Form.Item>
				
        <Form.Item><Button type="primary" htmlType="submit">Submit</Button></Form.Item>
      </Form>
    );

	}
}


const mapStateToProps = state => ({
  loading: state.addcustomer.loading,
  customeradded: state.addcustomer.data,
  error: state.addcustomer.error
});

export default connect(mapStateToProps)(Form.create({ name: 'add-customer' })(AddCustomer));

