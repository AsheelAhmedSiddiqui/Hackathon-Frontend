import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constants/Constant";

export default function Signup() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// Submit Function
	const onFinish = async (values) => {
		setLoading(true);
		try {
			// Backend API call
			const response = await axios.post(AppRoutes.signUp, {
				name: values.name,
				email: values.email,
				cnic: values.cnic,
			});

			console.log("response", response);

			// Success Message
			message.success("Signup successful! Please log in.");
			navigate("/login"); // Redirect to Login
		} catch (error) {
			console.error("Signup failed:", error.response?.data || error.message);
			message.error(error.response?.data?.message || "Signup failed!");
		} finally {
			setLoading(false);
		}
	};

	return (
		// <div
		// 	style={{
		// 		display: "flex",
		// 		justifyContent: "center",
		// 		alignItems: "center",
		// 		height: "100vh",
		// 		background: "#f4f4f4",
		// 		padding: "20px",
		// 	}}
		// >
		// 	<div
		// 		style={{
		// 			width: "100%",
		// 			maxWidth: "400px",
		// 			padding: "25px",
		// 			borderRadius: "8px",
		// 			boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
		// 			background: "#fff",
		// 		}}
		// 	>
		// 		<h2
		// 			style={{
		// 				textAlign: "center",
		// 				marginBottom: "20px",
		// 				fontSize: "22px",
		// 				fontWeight: "500",
		// 				color: "#333",
		// 			}}
		// 		>
		// 			Signup
		// 		</h2>
		// 		<Form name="signup" onFinish={onFinish} layout="vertical">
		// 			<Form.Item
		// 				label="Name"
		// 				name="name"
		// 				rules={[{ required: true, message: "Please input your name!" }]}
		// 			>
		// 				<Input placeholder="Enter your name" size="large" />
		// 			</Form.Item>
		// 			<Form.Item
		// 				label="Email"
		// 				name="email"
		// 				rules={[{ required: true, message: "Please input your email!" }]}
		// 			>
		// 				<Input placeholder="Enter your email" size="large" />
		// 			</Form.Item>
		// 			<Form.Item
		// 				label="Cnic"
		// 				name="cnic"
		// 				rules={[{ required: true, message: "Please input your password!" }]}
		// 			>
		// 				<Input placeholder="Enter your cnic" size="large" />
		// 			</Form.Item>
		// 			<Form.Item>
		// 				<Button
		// 					type="primary"
		// 					htmlType="submit"
		// 					style={{
		// 						width: "100%",
		// 						padding: "10px",
		// 						borderRadius: "5px",
		// 						fontSize: "16px",
		// 					}}
		// 					size="large"
		// 					loading={loading}
		// 				>
		// 					Sign Up
		// 				</Button>
		// 			</Form.Item>
		// 		</Form>
		// 		<div
		// 			style={{
		// 				fontSize: "14px",
		// 				textAlign: "center",
		// 				color: "#777",
		// 				marginTop: "16px",
		// 			}}
		// 		>
		// 			Already have an account?{" "}
		// 			<Link
		// 				to="/login"
		// 				style={{
		// 					color: "#1890ff",
		// 					fontWeight: "500",
		// 					textDecoration: "none",
		// 				}}
		// 			>
		// 				Login
		// 			</Link>
		// 		</div>
		// 	</div>
		// </div>

		<div className="h-screen grid grid-cols-2">
			<div className="flex items-center justify-center bg-blue-50">
				<img
					src="https://maktabatulmadinah.com/admin-assets/img/illustrations/auth-login-illustration-light.png"
					alt=""
					className="w-96"
				/>
			</div>
			<div className="mx-auto w-[100%] flex items-center justify-center">
				<div className="w-lg flex items-center justify-center flex-col gap-4">
					<Form name="signup" onFinish={onFinish} layout="vertical">
						<Form.Item
							label="Name"
							name="name"
							rules={[{ required: true, message: "Please input your name!" }]}
						>
							<Input placeholder="Enter your name" size="large" />
						</Form.Item>
						<Form.Item
							label="Email"
							name="email"
							rules={[{ required: true, message: "Please input your email!" }]}
						>
							<Input placeholder="Enter your email" size="large" />
						</Form.Item>
						<Form.Item
							label="Cnic"
							name="cnic"
							rules={[
								{ required: true, message: "Please input your password!" },
							]}
						>
							<Input placeholder="Enter your cnic" size="large" />
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								style={{
									width: "100%",
									padding: "10px",
									borderRadius: "5px",
									fontSize: "16px",
								}}
								size="large"
								loading={loading}
							>
								Sign Up
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
}
