import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/authentication/Login";

export default function RouterConfig() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}
