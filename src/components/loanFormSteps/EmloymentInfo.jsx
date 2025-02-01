import React from "react";
import { Form, Input, Select, InputNumber } from "antd";

const { Option } = Select;
function EmploymentInfo({ form }) {
	const employmentStatus = Form.useWatch("employmentStatus", form);

	return (
		<>
			<Form.Item
				name="employmentStatus"
				label="Employment Status"
				rules={[
					{ required: true, message: "Please select your employment status!" },
				]}
			>
				<Select>
					<Option value="salaried">Salaried</Option>
					<Option value="selfEmployed">Self-Employed</Option>
					<Option value="businessOwner">Business Owner</Option>
				</Select>
			</Form.Item>
			{employmentStatus === "salaried" && (
				<Form.Item
					name="companyName"
					label="Company Name"
					rules={[
						{ required: true, message: "Please input your company name!" },
					]}
				>
					<Input />
				</Form.Item>
			)}
			<Form.Item
				name="designation"
				label="Designation"
				rules={[{ required: true, message: "Please input your designation!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="monthlyIncome"
				label="Monthly Income/Salary"
				rules={[
					{ required: true, message: "Please input your monthly income!" },
				]}
			>
				<InputNumber
					style={{ width: "100%" }}
					formatter={(value) =>
						`PKR ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					}
					parser={(value) => value.replace(/PKR\s?|(,*)/g, "")}
				/>
			</Form.Item>
			<Form.Item
				name="workAddress"
				label="Work Address"
				rules={[{ required: true, message: "Please input your work address!" }]}
			>
				<Input.TextArea rows={4} />
			</Form.Item>
			<Form.Item
				name="workContactNumber"
				label="Work Contact Number"
				rules={[
					{ required: true, message: "Please input your work contact number!" },
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="incomeSource"
				label="Source of Income"
				rules={[
					{ required: true, message: "Please select your source of income!" },
				]}
			>
				<Select>
					<Option value="job">Job</Option>
					<Option value="business">Business</Option>
					<Option value="investments">Investments</Option>
					<Option value="other">Other</Option>
				</Select>
			</Form.Item>
			<Form.Item name="otherIncomeSources" label="Other Income Sources">
				<Input />
			</Form.Item>
		</>
	);
}

export default EmploymentInfo;
