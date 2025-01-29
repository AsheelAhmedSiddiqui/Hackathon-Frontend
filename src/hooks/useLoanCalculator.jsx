import { useState, useEffect } from "react";

export default function useLoanCalculator(
	vehiclePrice,
	downPayment,
	leaseTerm,
	interestRate
) {
	const [calculation, setCalculation] = useState({
		monthlyPayment: 0,
		totalLeaseCost: 0,
	});

	useEffect(() => {
		// Assuming a residual value of 50% of the vehicle price
		const residualValue = vehiclePrice * 0.5;
		const depreciationAmount = vehiclePrice - residualValue;
		const monthlyDepreciation = (depreciationAmount - downPayment) / leaseTerm;

		// Calculate monthly interest payment
		const monthlyInterestRate = interestRate / 12 / 100;
		const monthlyInterest =
			((vehiclePrice + residualValue) / 2) * monthlyInterestRate;

		// Calculate total monthly payment
		const monthlyPayment = monthlyDepreciation + monthlyInterest;

		// Calculate total lease cost
		const totalLeaseCost = monthlyPayment * leaseTerm + downPayment;

		setCalculation({
			monthlyPayment: Math.round(monthlyPayment),
			totalLeaseCost: Math.round(totalLeaseCost),
		});
	}, [vehiclePrice, downPayment, leaseTerm, interestRate]);

	return calculation;
}
