import { Avatar } from "antd";
import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
	const { user } = useAuth();
	return (
		<header className="px-6 py-4 shadow w-full shadow-green-400 flex items-center justify-between">
			<h1 className="text-2xl">
				Saylani <span className="text-green-500">Microfinance</span>
			</h1>
			<div>
				<Avatar>
					<span>{user?.name?.slice(0, 2).toUpperCase()}</span>
				</Avatar>
			</div>
		</header>
	);
}
