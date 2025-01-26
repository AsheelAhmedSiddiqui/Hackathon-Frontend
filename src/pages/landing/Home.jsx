import React from "react";
import Navbar from "../../components/landingPage_Component/Navbar";
import HeroSection from "../../components/landingPage_Component/HeroSection";
import CategoriesSection from "../../components/landingPage_Component/CategoriesSection";

export default function LandingPage() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<CategoriesSection />
		</>
	);
}
