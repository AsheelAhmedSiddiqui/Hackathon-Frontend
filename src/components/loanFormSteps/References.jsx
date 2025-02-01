import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

function References({ form }) {
	return (
		<>
			<Form.Item
				name="referenceName"
				label="Reference Name"
				rules={[
					{ required: true, message: "Please input the reference name!" },
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="relationship"
				label="Relationship with Applicant"
				rules={[{ required: true, message: "Please select the relationship!" }]}
			>
				<Select>
					<Option value="friend">Friend</Option>
					<Option value="relative">Relative</Option>
					<Option value="colleague">Colleague</Option>
					<Option value="other">Other</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name="referenceContact"
				label="Contact Number"
				rules={[
					{
						required: true,
						message: "Please input the reference contact number!",
					},
					{ len: 11, message: "Contact number must be exactly 11 digits!" },
				]}
			>
				<Input maxLength={11} />
			</Form.Item>
			<Form.Item
				name="referenceAddress"
				label="Address"
				rules={[
					{ required: true, message: "Please input the reference address!" },
				]}
			>
				<Input.TextArea rows={4} />
			</Form.Item>
		</>
	);
}

export default References;
