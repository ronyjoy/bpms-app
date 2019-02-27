import {
  Form, Select, Input, Button,DatePicker,TimePicker,AutoComplete,Slider,Radio,Icon
} from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import {addEnquiry} from '../../actions/enquiryActions'
import {fetchCustomerNames} from '../../actions/customerActions'
import Alert from 'react-s-alert';
import 'antd/dist/antd.css';


const { TextArea } = Input;

class AddEnquiry extends React.Component {

	componentDidMount() {
    this.props.dispatch(fetchCustomerNames());
	}
	
	saveEnquiry(data) {
		this.props.dispatch(addEnquiry(data))
	}


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
				console.log('Received values of form: ', values);
        this.props.dispatch(addEnquiry(values))
        
      }
    });
  }

  render() {
    let dataSource = ['loading data'];
		const { getFieldDecorator } = this.props.form;
    const { customerNames, customerLoading,addEnquiryProcessing, enquiryadded,addEnquiryError } = this.props;
    if(!customerLoading) {
      dataSource = customerNames;
    }
    if(!addEnquiryProcessing && addEnquiryError ==null && enquiryadded) {
			Alert.info('Enquiry Saved', {
					position: 'top-right',
					effect: 'scale',
					offset: 80
					});
		} 

	
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="Enquiry Date" >
          {getFieldDecorator('enq_date', {rules: [{ required: true, message: 'Enquiry date' }],})(
            <DatePicker  />
          )}
        </Form.Item>
      	<Form.Item label="Time Received">
				{getFieldDecorator('enq_time', {rules: [{ required: true, message: 'Enquiry time' }],})(
            <TimePicker />
          )}
				</Form.Item>
				<Form.Item label="Expiry Date" >
          {getFieldDecorator('exp_date', {rules: [{ required: true, message: 'Expiry date' }],})(
            <DatePicker  />
          )}
        </Form.Item>
        <Form.Item label="Customer">
					{getFieldDecorator('customer', {rules: [{ required: true, message: 'Customer!' }],})(
            <AutoComplete
							className="global-search"
							style={{ width: 200 }}
							dataSource={dataSource}
							placeholder="search customer"
							filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
						>
						<Input suffix={<Icon type="search" className="certain-category-icon" />} />
					</AutoComplete>
						
					)}
        </Form.Item>
        <Form.Item label="Customer Contact">
          {getFieldDecorator('contactPerson', {rules: [{ required: true, message: 'Contact Person' }],})(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Customer Contact Phone">
          {getFieldDecorator('contactPhone', {rules: [{ required: true, message: 'Contact Person Phone' }],})(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Customer Contact email">
          {getFieldDecorator('contactEmail', {rules: [{ required: true, message: 'Contact Person Phone' }],})(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator('description', {rules: [{ required: true, message: 'Enquiry Description' }],})(
            <TextArea rows={4} />
          )}
        </Form.Item>
				<Form.Item label="Enquiry Priority"
        >
          {getFieldDecorator('priority')(
            <Radio.Group defaultValue="c" buttonStyle="solid">
						<Radio.Button value="LOW">LOW</Radio.Button>
						<Radio.Button value="MED">MED</Radio.Button>
						<Radio.Button value="HIGH">HIGH</Radio.Button>
					</Radio.Group>
          )}
        </Form.Item>
				
        <Form.Item><Button type="primary" htmlType="submit">Submit</Button></Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  addEnquiryProcessing: state.addenquiry.loading,
  enquiryadded: state.addenquiry.data,
	addEnquiryError: state.addenquiry.error,
	customerLoading:state.listcustomer.loading,
	customerNames:state.listcustomer.customerNames
});

export default connect(mapStateToProps)(Form.create({ name: 'add-enquiry' })(AddEnquiry));