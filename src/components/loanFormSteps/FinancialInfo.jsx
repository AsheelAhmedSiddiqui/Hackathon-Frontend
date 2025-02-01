import React from "react";
import { Form, InputNumber, Checkbox, Input } from "antd";

function FinancialInfo({ form }) {
	const hasExistingLoans = Form.useWatch("hasExistingLoans", form);

	return (
		<>
			<Form.Item
				name="monthlyExpenses"
				label="Monthly Expenses"
				rules={[
					{ required: true, message: "Please input your monthly expenses!" },
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
				name="hasExistingLoans"
				valuePropName="checked"
				label="Do you have any existing loans/debts?"
			>
				<Checkbox>Yes</Checkbox>
			</Form.Item>
			{hasExistingLoans && (
				<Form.Item
					name="existingLoansDetails"
					label="Existing Loans/Debts Details"
					rules={[
						{
							required: true,
							message: "Please provide details of your existing loans/debts!",
						},
					]}
				>
					<Input.TextArea rows={4} />
				</Form.Item>
			)}
			<Form.Item name="creditScore" label="Credit Score (if applicable)">
				<InputNumber style={{ width: "100%" }} min={300} max={850} />
			</Form.Item>
			<Form.Item
				name="bankName"
				label="Bank Name"
				rules={[{ required: true, message: "Please input your bank name!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="accountNumber"
				label="Account Number"
				rules={[
					{ required: true, message: "Please input your account number!" },
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item name="guarantorDetails" label="Guarantor Details (Optional)">
				<Input.TextArea rows={4} />
			</Form.Item>
		</>
	);
}

export default FinancialInfo;
