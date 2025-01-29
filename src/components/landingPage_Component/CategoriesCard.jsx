import { useState } from "react";
import categories from "../../constants/Constant";

// const categories = [
// 	{
// 		id: 1,
// 		categoryTitle: "Wedding Loans",
// 		categoryDescription:
// 			"Make your special day memorable with our Wedding Loan. Cover expenses like venue, catering, and outfits with ease.",
// 		subcategories: ["Valima", "Food", "Furniture", "Jahez"],
// 		loanPeriod: 36,
// 		loanAmountLimit: 500000,
// 	},
// 	{
// 		id: 2,
// 		categoryTitle: "Home Construction Loans",
// 		categoryDescription:
// 			"Build your dream home with our Home Construction Loan. Flexible payment plans and low-interest rates to help you construct with confidence.",
// 		subcategories: ["Structure", "Finishing", "Loan"],
// 		loanPeriod: 60,
// 		loanAmountLimit: 1000000,
// 	},
// 	{
// 		id: 3,
// 		categoryTitle: "Business Startup Loans",
// 		categoryDescription:
// 			"Turn your business idea into reality! Our Business Startup Loans provide financial support for new entrepreneurs.",
// 		subcategories: [
// 			"Buy Stall",
// 			"Advanced Rent For Shop",
// 			"Shop Assest",
// 			"Shop Machinery",
// 		],
// 		loanPeriod: 60,
// 		loanAmountLimit: 1000000,
// 	},
// 	{
// 		id: 4,
// 		categoryTitle: "Education Loans",
// 		categoryDescription:
// 			"Invest in your future with our Education Loans. Whether it's university fees or skill development courses, we've got you covered.",
// 		subcategories: ["University Fees", "Skill Development", "Scholarship"],
// 		loanPeriod: 48,
// 		loanAmountLimit: "based on requirement",
// 	},
// ];

export default function CategoriesList() {
	return (
		<div className="container mx-auto p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{categories.map((category) => (
				<CategoryCard key={category.id} category={category} />
			))}
		</div>
	);
}

function CategoryCard({ category }) {
	const [showMore, setShowMore] = useState(false);
	const displayedSubcategories = showMore
		? category.subcategories
		: category.subcategories.slice(0, 3);

	return (
		<div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
			<h2 className="text-xl font-semibold text-gray-800 mb-2">
				{category.categoryTitle}
			</h2>
			<p className="text-gray-600 text-sm mb-4">
				{category.categoryDescription}
			</p>
			<div className="mb-4">
				<h3 className="text-gray-700 font-medium">Subcategories:</h3>
				<ul className="list-disc list-inside text-gray-600 text-sm">
					{displayedSubcategories.map((sub, index) => (
						<li key={index}>{sub}</li>
					))}
				</ul>
				{category.subcategories.length > 3 && (
					<button
						onClick={() => setShowMore(!showMore)}
						className="text-blue-500 mt-2 text-sm hover:underline"
					>
						{showMore ? "Show Less" : "See More"}
					</button>
				)}
			</div>
			<div className="text-gray-700 text-sm">
				<p>
					<strong>Loan Period:</strong> {category.loanPeriod} months
				</p>
				<p>
					<strong>Loan Limit:</strong> {category.loanAmountLimit}
				</p>
			</div>
		</div>
	);
}
