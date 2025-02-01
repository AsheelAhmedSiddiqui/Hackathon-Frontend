import React from "react";
import { Form, Select, InputNumber, Input } from "antd";

const { Option } = Select;

function LoanDetails({ form }) {
	return (
		<>
			<Form.Item
				name="loanType"
				label="Type of Loan"
				rules={[{ required: true, message: "Please select the type of loan!" }]}
			>
				<Select>
					<Option value="wedding">Wedding</Option>
					<Option value="homeConstruction">Home Construction</Option>
					<Option value="business">Business</Option>
					<Option value="education">Education</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name="loanAmount"
				label="Loan Amount Required"
				rules={[{ required: true, message: "Please input the loan amount!" }]}
			>
				<InputNumber
					style={{ width: "100%" }}
					formatter={(value) =>
						`PKR ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					}
					parser={(value) => value.replace(/PKR\s?|(,*)/g, "")}
					min={1000}
					max={10000000}
				/>
			</Form.Item>
			<Form.Item
				name="loanPurpose"
				label="Loan Purpose"
				rules={[
					{
						required: true,
						message: "Please describe the purpose of the loan!",
					},
				]}
			>
				<Input.TextArea rows={4} />
			</Form.Item>
			<Form.Item
				name="loanTenure"
				label="Loan Tenure"
				rules={[{ required: true, message: "Please select the loan tenure!" }]}
			>
				<Select>
					<Option value="12">12 months</Option>
					<Option value="24">24 months</Option>
					<Option value="36">36 months</Option>
					<Option value="48">48 months</Option>
					<Option value="60">60 months</Option>
				</Select>
			</Form.Item>
		</>
	);
}

export default LoanDetails;
