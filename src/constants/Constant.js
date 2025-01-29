const devURL = "http://localhost:3010/";
const proURL = "https://hackathon-backend-production-2663.up.railway.app/";

// const BASE_URL = proURL;
const BASE_URL = devURL;

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
