import React from "react";
import { Form, Input, DatePicker, Select } from "antd";

const { Option } = Select;

function PersonalInfo({ form }) {
	return (
		<>
			<Form.Item
				name="fullName"
				label="Full Name"
				rules={[{ required: true, message: "Please input your full name!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="fatherName"
				label="Father's/Husband's Name"
				rules={[
					{
						required: true,
						message: "Please input your father's/husband's name!",
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="dateOfBirth"
				label="Date of Birth"
				rules={[
					{ required: true, message: "Please select your date of birth!" },
				]}
			>
				<DatePicker style={{ width: "100%" }} />
			</Form.Item>
			<Form.Item
				name="cnic"
				label="CNIC/National ID Number"
				rules={[
					{ required: true, message: "Please input your CNIC!" },
					{ len: 13, message: "CNIC must be exactly 13 digits!" },
				]}
			>
				<Input maxLength={13} />
			</Form.Item>
			<Form.Item
				name="maritalStatus"
				label="Marital Status"
				rules={[
					{ required: true, message: "Please select your marital status!" },
				]}
			>
				<Select>
					<Option value="single">Single</Option>
					<Option value="married">Married</Option>
					<Option value="divorced">Divorced</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name="gender"
				label="Gender"
				rules={[{ required: true, message: "Please select your gender!" }]}
			>
				<Select>
					<Option value="male">Male</Option>
					<Option value="female">Female</Option>
					<Option value="other">Other</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name="contactNumber"
				label="Contact Number"
				rules={[
					{ required: true, message: "Please input your contact number!" },
					{ len: 11, message: "Contact number must be exactly 11 digits!" },
				]}
			>
				<Input maxLength={11} />
			</Form.Item>
			<Form.Item
				name="email"
				label="Email Address"
				rules={[
					{ required: true, message: "Please input your email address!" },
					{ type: "email", message: "Please enter a valid email address!" },
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="residentialAddress"
				label="Residential Address"
				rules={[
					{ required: true, message: "Please input your residential address!" },
				]}
			>
				<Input.TextArea rows={4} />
			</Form.Item>
			<Form.Item
				name="permanentAddress"
				label="Permanent Address"
				rules={[
					{ required: true, message: "Please input your permanent address!" },
				]}
			>
				<Input.TextArea rows={4} />
			</Form.Item>
		</>
	);
}

export default PersonalInfo;
