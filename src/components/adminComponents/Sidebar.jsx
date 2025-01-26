import {
	CreditCard,
	CreditScore,
	People,
	StackedBarChart,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
// import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

export default function Sidebar() {
	return (
		<div className="w-[25%] h-screen shadow-2xl">
			<aside className="flex  flex-col gap-6 py-6 px-8">
				<Link
					to="/admin/dashboard"
					className="flex items-center gap-3 bg-green-500 p-2 rounded-lg"
				>
					<StackedBarChart />
					<h3 className="text-[18px]">Overview</h3>
				</Link>
				<Link
					to="/admin/userslist"
					className="flex items-center gap-3 bg-green-500 p-2 rounded-lg"
				>
					<People />
					<h3 className="text-[18px] text-">Users</h3>
				</Link>
				<Link
					to="/admin/loancategories"
					className="flex items-center gap-3 bg-green-500 p-2 rounded-lg"
				>
					<CreditCard />
					<h3 className="text-[18px] text-">Loan Categories</h3>
				</Link>
				<Link
					to="/admin/dashboard"
					className="flex items-center gap-3 bg-green-500 p-2 rounded-lg"
				>
					<CreditCard />
					<h3 className="text-[18px] text-">Loan Applications</h3>
				</Link>
				<Link
					to="/admin/dashboard"
					className="flex items-center gap-3 bg-green-500 p-2 rounded-lg"
				>
					<CreditScore />
					<h3 className="text-[18px] text-">Loan Details</h3>
				</Link>
			</aside>
		</div>
	);
}
