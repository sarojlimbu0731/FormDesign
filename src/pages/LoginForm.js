import React from 'react';
import { Form,Button,Checkbox, DatePicker, Input, Select } from 'antd';

const LoginForm = () => {
    return (
        <div className="form-container" style={{width:"100%", height:"100vh",display:"flex",alignItems:"center", justifyContent:"center" }}>
            <header className='form-header'>
                <Form labelCol={{span:10}} wrapperCol={{span:14}} autoComplete="off">
                    <Form.Item name="fullName" label="Full Name">
                        <Input placeholder='Enter your fullname'/>
                    </Form.Item>
                    <Form.Item name="email" label="Email">
                        <Input placeholder='Enter your Email'/>
                    </Form.Item>
                    <Form.Item name="password" label="Password">
                        <Input.Password placeholder='Enter your Password'/>
                    </Form.Item>
                    <Form.Item name="confirmPassword" label="Confirm Password">
                        <Input.Password placeholder='Re-enter your Password'/>
                    </Form.Item>
                    <Form.Item name="gender" label="Gender">
                        <Select placeholder='Select your Gender'>
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option value="female">Female</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="dateOfBirth" label="Date of Birth">
                        <DatePicker style={{width:"100%"}} picker='date' placeholder='Choose your DOB'/>
                    </Form.Item>
                    <Form.Item name="website" label="Website">
                        <Input picker='date' placeholder='Add your website url'/>
                    </Form.Item>
                    <Form.Item name="agreement" wrapperCol={{span:24}}>
                        <Checkbox>Agree to our <a href='#'>Terms and Condition</a></Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{span:24}}>
                        <Button block type="primary" htmlType='submit'>Register</Button>
                    </Form.Item>
                </Form>
            </header>
        </div>
    );
}

export default LoginForm;
