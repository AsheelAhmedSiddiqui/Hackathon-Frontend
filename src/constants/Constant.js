const devURL = "http://localhost:3010/";
const proURL = "https://hackathon-backend-production-2663.up.railway.app/";

const BASE_URL = proURL;
// const BASE_URL = devURL;

export const AppRoutes = {
	login: BASE_URL + "users/login",
	signUp: BASE_URL + "users/signup",
	getAllUser: BASE_URL + "users/getAllUsers",
	logout: BASE_URL + "users/logout",
	getUserData: BASE_URL + "users/profile", // New route for getting user data
	// getAllUser: BASE_URL + "users/getAllUsers", // New route for getting user data
	// Categories Routes
	getCategories: BASE_URL + "categories",
	addCategory: BASE_URL + "categories",
	updateCategory: BASE_URL + "categories/",
	deleteCategory: BASE_URL + "categories/",

	getCategoriesWithSubCategories: BASE_URL + "categories/with-subcategories",
	getSingleCategories: BASE_URL + "categories/singleCategory/",

	// SubCategories Routes
	getSubCategories: BASE_URL + "subcategories",
	addSubCategory: BASE_URL + "subcategories",
	updateSubCategory: BASE_URL + "subcategories/",
	deleteSubCategory: BASE_URL + "subcategories/",

	// addCalculate: BASE_URL + "calculate/calculate",
};

const categories = [
	{
		id: 1,
		categoryTitle: "Wedding Loans",
		categoryDescription:
			"Make your special day memorable with our Wedding Loan. Cover expenses like venue, catering, and outfits with ease.",
		subcategories: ["Valima", "Food", "Furniture", "Jahez"],
		loanPeriod: 36, // 3 Years
		loanAmountLimit: 500000, // PKR 5 Lacs
	},
	{
		id: 2,
		categoryTitle: "Home Construction Loans",
		categoryDescription:
			"Build your dream home with our Home Construction Loan. Flexible payment plans and low-interest rates to help you construct with confidence.",
		subcategories: ["Structure", "Finishing", "Loan"],
		loanPeriod: 60, // 5 year
		loanAmountLimit: 1000000, //PKR 10 Lacs
	},
	{
		id: 3,
		categoryTitle: "Business Startup Loans",
		categoryDescription:
			"Turn your business idea into reality! Our Business Startup Loans provide financial support for new entrepreneurs.",
		subcategories: [
			"Buy Stall",
			"Advanced Rent For Shop",
			"Shop Assest",
			"Shop Machinery",
		],
		loanPeriod: 60, // 5 year
		loanAmountLimit: 1000000, //PKR 10 Lacs
	},
	{
		id: 4,
		categoryTitle: "Education Loans",
		categoryDescription:
			"Invest in your future with our Education Loans. Whether it's university fees or skill development courses, we've got you covered.",
		subcategories: ["University Fees", "Skill Development", "Scholarship"],
		loanPeriod: 48, // 4 year
		loanAmountLimit: "based on requirement", // PKR 5 Lacs
	},
];

export default categories;
