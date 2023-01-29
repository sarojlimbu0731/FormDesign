import React from "react";
import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";

const LoginForm = () => {
  return (
    <div
      className="form-container"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header className="form-header">
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          autoComplete="off"
          onFinish={(values) => {
            console.log(values);
          }}
          onFinishFailed={(error)=>{
            console.log(error)
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "please enter your name",
              },
              {
                whitespace: true,
                message: "please dont enter whitespace",
              },
              {
                min: 3,
                message: "fullname must be atleast 3 characters",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter your fullname" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "please enter an email" },
              {
                type: "email",
                message: "please enter a valid email",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter your Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "password is required",
              },
              {
                min: 6,
                message: "password must be at least 6 characters",
              },
              //   {
              //     validator:(_, value)=>
              //     value && value.include('A')? Promise.resolve: Promise.reject("password must contain one uppercase")
              //   }
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter your Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            label="Confirm Password"
            rules={[
              {
                required: true,
                message: "password is required",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Confirm password enter doesn't match");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Re-enter your Password" />
          </Form.Item>
          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your Gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "choose your DOB",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Choose your DOB"
            />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[
              {
                required: true,
                message: "please provide your url address",
              },
              {
                type: "url",
                message: "please provide the valid url",
              },
            ]}
            hasFeedback
          >
            <Input picker="date" placeholder="Add your website url" />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "",
              },
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default LoginForm;
