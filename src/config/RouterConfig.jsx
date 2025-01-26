import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/authentication/Login";
import { AuthProvider } from "../context/AuthContext";
import LandingPage from "../pages/landing/Home";
import Dashboard from "../pages/admin/Dashboard";
import Signup from "../pages/authentication/Signup";
import ShowUsers from "../pages/admin/ShowUsers";

export default function RouterConfig() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					{/* Landing Pages */}
					<Route path="/" element={<LandingPage />}></Route>

					{/* Authentication */}
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/signup" element={<Signup />} />

					{/* Admin Pages */}
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path="/admin/userslist" element={<ShowUsers />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}
