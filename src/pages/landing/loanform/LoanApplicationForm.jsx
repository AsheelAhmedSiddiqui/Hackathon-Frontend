import React from "react";
import { useState } from "react";
import { Form, Steps, Button, message, Typography, Layout } from "antd";
import PersonalInfo from "../../../components/loanFormSteps/PersonalInfo";
import EmploymentInfo from "../../../components/loanFormSteps/EmloymentInfo";
import LoanDetails from "../../../components/loanFormSteps/LoanDetails";
import FinancialInfo from "../../../components/loanFormSteps/FinancialInfo";
import CollateralInfo from "../../../components/loanFormSteps/CollateralInfo";
import References from "../../../components/loanFormSteps/References";
import Declaration from "../../../components/loanFormSteps/Declaration";

const { Step } = Steps;
const { Title } = Typography;
const { Content } = Layout;

const steps = [
	{ title: "Personal Info", content: PersonalInfo },
	{ title: "Employment", content: EmploymentInfo },
	{ title: "Loan Details", content: LoanDetails },
	{ title: "Financial Info", content: FinancialInfo },
	{ title: "Collateral", content: CollateralInfo },
	{ title: "References", content: References },
	{ title: "Declaration", content: Declaration },
];

function LoanApplicationForm() {
	const [form] = Form.useForm();
	const [current, setCurrent] = useState(0);

	const next = () => {
		form
			.validateFields()
			.then(() => {
				setCurrent(current + 1);
			})
			.catch((error) => {
				console.log("Validation failed:", error);
			});
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const onFinish = (values) => {
		console.log("Form values:", values);
		message.success("Application submitted successfully!");
	};

	const StepContent = steps[current].content;

	return (
		<Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
			<Content
				style={{ padding: "50px 50px", maxWidth: 1000, margin: "0 auto" }}
			>
				<Title level={2} style={{ marginBottom: 30, textAlign: "center" }}>
					Loan Application Form
				</Title>
				<Steps current={current} style={{ marginBottom: 30 }}>
					{steps.map((item) => (
						<Step key={item.title} title={item.title} />
					))}
				</Steps>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					style={{
						background: "#fff",
						padding: 24,
						borderRadius: 8,
						boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
					}}
				>
					<StepContent form={form} />
					<div style={{ marginTop: 24 }}>
						{current > 0 && (
							<Button style={{ marginRight: 8 }} onClick={prev}>
								Previous
							</Button>
						)}
						{current < steps.length - 1 && (
							<Button type="primary" onClick={next}>
								Next
							</Button>
						)}
						{current === steps.length - 1 && (
							<Button type="primary" onClick={() => form.submit()}>
								Submit Application
							</Button>
						)}
					</div>
				</Form>
			</Content>
		</Layout>
	);
}

export default LoanApplicationForm;
