"use client";

import { useState } from "react";
// import { Slider } from "@/components/ui/slider";

// import { Input } from "@/components/ui/input";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";

Slider;
// import { Button } from "@/components/ui/button";
import useLoanCalculator from "../../hooks/useLoanCalculator";
import { Button, Input, Select } from "antd";
import { Slider } from "@mui/material";
// useLoanCulator;

export default function LoanCalculator() {
	const [vehiclePrice, setVehiclePrice] = useState(30000);
	const [downPayment, setDownPayment] = useState(2000);
	const [leaseTerm, setLeaseTerm] = useState(36);
	const [interestRate, setInterestRate] = useState(5);

	const { monthlyPayment, totalLeaseCost } = useLoanCalculator(
		vehiclePrice,
		downPayment,
		leaseTerm,
		interestRate
	);

	return (
		<div className="max-w-5xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-6">Auto Lease Calculator</h1>

			<div className="grid md:grid-cols-2 gap-6">
				<div className="space-y-8">
					{/* Vehicle Price */}
					<div className="space-y-4">
						<label className="font-medium">Vehicle Price</label>
						<div className="flex gap-4 flex-col items-center">
							<Slider
								value={[vehiclePrice]}
								onValueChange={([value]) => setVehiclePrice(value)}
								min={10000}
								max={100000}
								step={1000}
								className="flex-1"
							/>
							<Input
								type="number"
								value={vehiclePrice}
								onChange={(e) => setVehiclePrice(Number(e.target.value))}
								className="w-24"
							/>
						</div>
						<p className="text-sm text-muted-foreground">
							Select the price of the vehicle you want to lease
						</p>
					</div>

					{/* Down Payment */}
					<div className="space-y-4">
						<label className="font-medium">Down Payment</label>
						<div className="flex gap-4 items-center">
							<Slider
								value={[downPayment]}
								onValueChange={([value]) => setDownPayment(value)}
								min={0}
								max={20000}
								step={500}
								className="flex-1"
							/>
							<Input
								type="number"
								value={downPayment}
								onChange={(e) => setDownPayment(Number(e.target.value))}
								className="w-24"
							/>
						</div>
						<p className="text-sm text-muted-foreground">
							Select the down payment amount
						</p>
					</div>

					{/* Lease Term */}
					<div className="space-y-4">
						<label className="font-medium">Lease Term</label>
						<Select
							value={String(leaseTerm)}
							onValueChange={(value) => setLeaseTerm(Number(value))}
						>
							{/* <SelectTrigger>
								<SelectValue placeholder="Select lease term" />
							</SelectTrigger> */}
							{/* <SelectContent> */}
							<Select.Option value="24">24 months</Select.Option>
							<Select.Option value="36">36 months</Select.Option>
							<Select.Option value="48">48 months</Select.Option>
							<Select.Option value="60">60 months</Select.Option>
							{/* </SelectContent> */}
						</Select>
						<p className="text-sm text-muted-foreground">
							Select the lease duration in months
						</p>
					</div>

					{/* Interest Rate */}
					<div className="space-y-4">
						<label className="font-medium">Interest Rate</label>
						<Input
							type="number"
							value={interestRate}
							onChange={(e) => setInterestRate(Number(e.target.value))}
							min={0}
							max={20}
							step={0.1}
						/>
						<p className="text-sm text-muted-foreground">
							Annual interest rate for the lease
						</p>
					</div>
				</div>

				<div className="bg-blue-500 text-white rounded-lg p-6 h-fit">
					<div className="space-y-6">
						<div>
							<h2 className="text-xl font-medium">Monthly Lease Payment</h2>
							<div className="text-4xl font-bold">${monthlyPayment}</div>
							<p className="text-sm opacity-90">
								Estimated monthly payment for the lease.
							</p>
						</div>

						<div>
							<div className="flex justify-between items-center">
								<h3 className="font-medium">Total Lease Cost</h3>
								<span className="text-xl font-bold">${totalLeaseCost}</span>
							</div>
							<p className="text-sm opacity-90">
								Total lease cost over the term.
							</p>
						</div>

						<div className="pt-4">
							<h3 className="text-2xl font-bold mb-2">
								Drive Your Dream Car Today
							</h3>
							<p className="text-sm opacity-90 mb-4">
								Get started with a hassle-free leasing process and drive your
								dream car. Our team is ready to assist you.
							</p>
							<Button
								className="w-full bg-black hover:bg-gray-900 text-white"
								size="lg"
							>
								Start Leasing
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
