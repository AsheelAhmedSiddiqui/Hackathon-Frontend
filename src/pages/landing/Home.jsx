import React from "react";
import Navbar from "../../components/landingPage_Component/Navbar";
import HeroSection from "../../components/landingPage_Component/HeroSection";
import CategoriesSection from "../../components/landingPage_Component/CategoriesSection";
import CTASection from "../../components/landingPage_Component/CTASection";
import Footer from "../../components/landingPage_Component/Footer";
import LoanCalculator from "../../components/landingPage_Component/LoanCalculator";

export default function LandingPage() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<CategoriesSection />
			<LoanCalculator />
			<CTASection />
			<Footer />
		</>
	);
}
