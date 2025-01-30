import React from "react";
import { useState } from "react";
import { Card, Input, Button, Typography, Space, Progress, theme } from "antd";
import { CalculatorOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { useToken } = theme;

function LoanCalculator() {
	const { token } = useToken();
	const [loanAmount, setLoanAmount] = useState(null);
	const [intialDeposit, setIntialDeposit] = useState(null);
	const [tenure, setTenure] = useState();
	const [monthlyPayableAmount, setMonthlyPayableAmount] = useState(null);
	const [totalPayable, setTotalPayable] = useState(null);

	const calculateMonthly = () => {
		const fullAmount = Number.parseFloat(loanAmount);
		const depositAmount = Number.parseFloat(intialDeposit);
		const time = Number.parseFloat(tenure) * 12;

		if (fullAmount && depositAmount && time) {
			const finalAmount = fullAmount - depositAmount;
			const monthlyWise = finalAmount / time;
			// const finalPayableAmount = finalAmount / payablesMonthTime;

			setMonthlyPayableAmount(Math.round(monthlyWise));
			setTotalPayable(Math.round(finalAmount));
			console.log(fullAmount, monthlyWise);
		} else {
			console.log("something went wrong");
		}
	};

	return (
		<section className="bg-gray-900">
			<div
				className="py-8"
				style={{
					minHeight: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Card
					style={{
						width: 600,
						boxShadow: token.boxShadow,
						borderRadius: token.borderRadiusLG,
						background: `linear-gradient(135deg, ${token.colorBgContainer} 0%, ${token.colorBgLayout} 100%)`,
					}}
				>
					<Space direction="vertical" size="middle" style={{ width: "100%" }}>
						<Title level={3} style={{ textAlign: "center" }}>
							Loan Calculator
						</Title>

						<Input
							placeholder="Loan Amount"
							value={loanAmount}
							onChange={(e) => setLoanAmount(e.target.value)}
							prefix="PKR"
						/>

						<Input
							placeholder="Intial Deposit"
							value={intialDeposit}
							onChange={(e) => setIntialDeposit(e.target.value)}
							prefix="PKR"
						/>

						<Input
							placeholder="Tenure (Years)"
							value={tenure}
							onChange={(e) => setTenure(e.target.value)}
							suffix="Years"
						/>

						<Button
							type="primary"
							icon={<CalculatorOutlined />}
							onClick={calculateMonthly}
							style={{ width: "100%", borderRadius: token.borderRadiusLG }}
						>
							Calculate Monthly
						</Button>

						{monthlyPayableAmount !== null && totalPayable !== null && (
							<Card
								style={{
									background: token.colorBgLayout,
									borderRadius: token.borderRadiusLG,
								}}
							>
								<Space direction="vertical" size="small">
									<Text strong>
										Monhtly: PKR {monthlyPayableAmount.toLocaleString()}
									</Text>
									<Text strong>
										Total Payable Amount: PKR {totalPayable.toLocaleString()}
									</Text>
									{/* <Progress
									percent={Math.round(
										((emi * 12 * Number.parseFloat(tenure) -
											Number.parseFloat(loanAmount)) /
											Number.parseFloat(loanAmount)) *
											100
									)}
									status="active"
									strokeColor={{
										"0%": token.colorPrimary,
										"100%": token.colorSuccess,
									}}
									format={(percent) => `${percent}% Interest`}
								/> */}
								</Space>
							</Card>
						)}
					</Space>
				</Card>
			</div>
		</section>
	);
}

export default LoanCalculator;
