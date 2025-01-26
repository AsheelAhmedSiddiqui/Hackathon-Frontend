// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { AppRoutes } from "../constants/Constant";
// import { message } from "antd";

// // function createData(name, calories, fat, carbs, protein) {
// // 	return { name, calories, fat, carbs, protein };
// // }

// export default function TableUi() {
// 	const [users, setUsers] = useState("");

// 	const fetchUsers = async () => {
// 		try {
// 			const response = await axios.get(AppRoutes.getAllUser);
// 			setUsers(response.data);
// 		} catch (error) {
// 			console.log(error);
// 			message.error("Failed to fetch users");
// 		}
// 	};

// 	useEffect(() => {
// 		fetchUsers();
// 	}, []);

// 	console.log(users);

// 	// const rows = [
// 	// 	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
// 	// 	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// 	// 	createData("Eclair", 262, 16.0, 24, 6.0),
// 	// 	createData("Cupcake", 305, 3.7, 67, 4.3),
// 	// 	createData("Gingerbread", 356, 16.0, 49, 3.9),
// 	// ];

// 	return (
// 		<TableContainer component={Paper} className="h-72 relative">
// 			<Table sx={{ minWidth: 650 }} aria-label="simple table">
// 				<TableHead className="fixed w-[100%]">
// 					<TableRow>
// 						<TableCell>User Name</TableCell>
// 						<TableCell align="right">Role</TableCell>
// 						<TableCell align="right">Email</TableCell>
// 						<TableCell align="right">Password</TableCell>
// 						<TableCell align="right">Cnic</TableCell>
// 					</TableRow>
// 				</TableHead>
// 				<TableBody>
// 					{users &&
// 						users.map((data) => (
// 							<TableRow
// 								key={data._id}
// 								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// 							>
// 								<TableCell component="th" scope="row">
// 									{data.name}
// 								</TableCell>
// 								<TableCell align="right">{data?.role}</TableCell>
// 								<TableCell align="right">{data.name}</TableCell>
// 								<TableCell align="right">{data.name}</TableCell>
// 								<TableCell align="right">{data.name}</TableCell>
// 							</TableRow>
// 						))}

// 					{/* {users?.map((data) => {
// 						console.log(data);
// 					})} */}
// 					{/* {users?.map((data) => (
// 						<TableRow
// 							key={data?._id}
// 							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// 						>
// 							<TableCell component="th" scope="row">
// 								{data?.name}
// 							</TableCell>
// 							<TableCell align="right">{row.calories}</TableCell>
// 							<TableCell align="right">{row.fat}</TableCell>
// 							<TableCell align="right">{row.carbs}</TableCell>
// 							<TableCell align="right">{row.protein}</TableCell>
// 						</TableRow>
// 					))} */}
// 				</TableBody>
// 			</Table>
// 		</TableContainer>
// 	);
// }
