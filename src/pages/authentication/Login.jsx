// import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Form, Input, message } from "antd";
import axios from "axios";
import { AppRoutes } from "../../constants/Constant";
import Cookies from "js-cookie";
// import LoginComponent from "../../assets/img/login-page.jpg";

export default function Login() {
	const { user, setUser } = useAuth();
	const navigate = useNavigate();
	// const [email, setEmail] = useState("");
	const [loading, setLoading] = useState("");

	const onFinish = async (values) => {
		setLoading(true);
		try {
			const res = await axios.post(AppRoutes.login, values);
			setUser(res.data);

			// Save token in cookies
			Cookies.set("token", res.data.token);

			message.success("Login successful");
			navigate("/");
		} catch (err) {
			console.log(err);
			message.error(err?.response?.data?.msg || "Login failed!");
		} finally {
			setLoading(false);
		}
	};

	return (
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
					<Form name="login" onFinish={onFinish} layout="vertical">
						<Form.Item
							label="Email"
							name="email"
							rules={[{ required: true, message: "Please enter your email!" }]}
						>
							<Input
								placeholder="Email"
								size="large"
								style={{
									borderRadius: "6px",
								}}
							/>
						</Form.Item>
						<Form.Item
							label="Password"
							name="password"
							rules={[
								{ required: true, message: "Please enter your password!" },
							]}
						>
							<Input.Password
								placeholder="Password"
								size="large"
								style={{
									borderRadius: "6px",
								}}
							/>
						</Form.Item>

						<div
							style={{
								textAlign: "center",
								marginBottom: "15px",
								fontSize: "14px",
								color: "#555",
							}}
						>
							Don't have an account?{" "}
							<Link to="/signup" style={{ color: "#1890ff" }}>
								Signup
							</Link>
						</div>

						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								loading={loading}
								block
								size="large"
								style={{
									borderRadius: "6px",
								}}
							>
								Login
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
}
