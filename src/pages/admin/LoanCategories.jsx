import { Breadcrumb, Button, Input, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { AppRoutes } from "../../constants/Constant";
import Header from "../../components/adminComponents/Header";
import Sidebar from "../../components/adminComponents/Sidebar";
import { Link } from "react-router-dom";

export default function LoanCategories() {
	const [categories, setCategories] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("")

	const handleOpenModal = () => {
		setIsModalOpen(true); // Open both modals
	};

	const handleCloseModal = () => {
		setIsModalOpen(false); // Close both modals
	};

	async function fetchCategories() {
		try {
			const res = axios.get(`${AppRoutes.getCategories}`);
			setCategories(res.data);
		} catch (err) {
			console.log(err);
		}
	}

	async function addCategory() {
		try {
			const response = await axios.post(AppRoutes.addCategory);

			if (!response.ok) {
				throw new Error("Failed to send POST request!");
			}

			const data = await response.json(); // If the API sends a response
			setResponseMessage("POST request sent successfully!");
			console.log("Response Data:", data); // Log response if available
		} catch (error) {
			setResponseMessage(`Error: ${error.message}`);
		}
	}

	return (
		<>
			<Header />
			<div className="flex">
				<Sidebar />
				<div className="w-[75%]">
					<div className="w-[90%] mx-auto my-6">
						<div className="my-6 flex items-center justify-between">
							<MyBreadcrumb />
							<Button variant="solid" onClick={handleOpenModal}>
								Add Categories
							</Button>
							<Modal
								title="Add Loan Category"
								style={{
									top: 20,
								}}
								open={isModalOpen}
								// // onOk={handleCloseModal}
								onCancel={handleCloseModal}
							>
								<div className="flex flex-col justify-center gap-4">
									<Input placeholder="Enter loan category title" />
									<Input placeholder="Enter loan category description" />
									<div className="flex items-center gap-2">
										<Input placeholder="Enter loan Limit" />
										<Input placeholder="Enter loan period" />
									</div>
								</div>
								<Button className="mt-6">Submit</Button>
							</Modal>
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
