import React from "react";
import TableUi from "../../components/TableUI";
import Header from "../../components/adminComponents/Header";
import Sidebar from "../../components/adminComponents/Sidebar";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default function ShowUsers() {
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
						<TableUi />
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
				title: "All Users",
			},
		]}
	/>
);
// export default MyBreadcrumb;
