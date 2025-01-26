import { Breadcrumb } from "antd";
import React from "react";

export default function LoanCategories() {
	return (
		<>
			<Header />
			<div className="flex">
				<Sidebar />
				<div className="w-[75%]">
					<div className="w-[90%] mx-auto my-6">
						<div className="my-6">
							<MyBreadcrumb />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const MyBreadcrumb = () => (
	<Breadcrumb
		items={[
			{
				title: <Link to={"/admin/dashboard"}>Dashboard</Link>,
			},
			{
				title: "Loan Categories",
			},
		]}
	/>
);
