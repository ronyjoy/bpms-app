import {
  message,Form, Select, Input, Button,DatePicker,TimePicker,AutoComplete,Slider,Radio,Icon
} from 'antd';
import React from 'react';
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
      }
    });
  }

	

	render() {

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        xs: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        xs: { span: 12 },
      },
    };

 		return (

			
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Form.Item label="Customer Name" {...formItemLayout}>
          {getFieldDecorator('name', {rules: [{ required: true, message: 'Customer Name' }],})(
            <Input  />
          )}
        </Form.Item>
      	<Form.Item label="Address" {...formItemLayout}>
				{getFieldDecorator('address', {rules: [{ required: true, message: 'Address' }],})(
            <TextArea rows={4} />
          )}
				</Form.Item>
				<Form.Item label="Phone" {...formItemLayout}>
          {getFieldDecorator('phone', {rules: [{ required: true, message: 'Phone' }],})(
            <Input  />
          )}
        </Form.Item>
        <Form.Item label="Fax" {...formItemLayout}>
					{getFieldDecorator('fax', {rules: [{ required: true, message: 'Fax' }],})(
          <Input />
						
					)}
        </Form.Item>
        <Form.Item label="Customer Contact" {...formItemLayout}>
          {getFieldDecorator('contactPerson', {rules: [{ required: true, message: 'Contact Person' }],})(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="email"{...formItemLayout}>
          {getFieldDecorator('email', {rules: [{ required: true, message: 'Contact Person Phone' }],})(
            <Input />
          )}
        </Form.Item>
				<Form.Item label="Customer Priority" {...formItemLayout}  >
          {getFieldDecorator('rank')(
            <Radio.Group initialValue="AVG" buttonStyle="solid">
						<Radio.Button value="BAD">BAD</Radio.Button>
						<Radio.Button value="AVG">AVG</Radio.Button>
						<Radio.Button value="GOOD">GOOD</Radio.Button>
						<Radio.Button value="GREAT">GREAT</Radio.Button>
					</Radio.Group>
          )}
        </Form.Item>
				<Form.Item label="Approved" {...formItemLayout} >
          {getFieldDecorator('approved')(
            <Radio.Group initialValue="false" buttonStyle="solid">
						<Radio.Button value="false">NO</Radio.Button>
						<Radio.Button value="true">YES</Radio.Button>
					</Radio.Group>
          )}
        </Form.Item>
				
        <Form.Item {...formItemLayout}><Button type="primary" htmlType="submit">Submit</Button></Form.Item>
      </Form>
    );

	}
}


const mapStateToProps = state => ({
  processing: state.addcustomer.processing,
  customeradded: state.addcustomer.data,
  error: state.addcustomer.error,
  saved: state.addcustomer.saved
});

export default connect(mapStateToProps)(Form.create({ name: 'add-customer' })(AddCustomer));

