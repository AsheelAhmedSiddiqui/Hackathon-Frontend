import {
	AcademicCapIcon,
	HomeIcon,
	HomeModernIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import CategoriesList from "./CategoriesCard";

export default function CategoriesSection() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
				<div className="max-w-screen-md mb-4 lg:mb-8">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Flexible Loan Options for Every Need
					</h2>
					<p className="text-gray-500 sm:text-xl dark:text-gray-400">
						We offer a variety of loan categories to help you achieve your
						dreams. Choose the loan that suits your needs and get started today.
					</p>
				</div>
				{/* <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"> */}
				<CategoriesList />

				{/* <div>
						<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
							<svg
								fill="#000000"
								height="800px"
								width="800px"
								version="1.1"
								id="Layer_1"
								className="fill-red-400"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 480 480"
								xmlSpace="preserve"
							>
								<g id="XMLID_504_">
									<g>
										<g>
											<path
												d="M382.884,297.066c0.438-0.404,0.871-0.815,1.299-1.236c10.374-10.202,16.087-23.833,16.087-38.382V230
				c0-27.57-22.43-50-50-50h-28.412c-16.129,0-29.25,13.122-29.25,29.25v47.477c0,13.898,5.235,26.666,13.814,36.35
				c-6.854,2.128-13.081,6.083-17.96,11.54l-36.684,35.69c-0.191,0.187-0.376,0.381-0.553,0.583
				c-2.285,2.613-5.587,4.111-9.059,4.111c-3.472,0-6.773-1.498-9.059-4.111c-0.271-0.31-0.561-0.602-0.868-0.876l-39.525-35.275
				c-5.181-5.656-12.317-9.1-19.93-9.658c4.936-10.048,7.708-21.34,7.709-33.27l0.002-23.223
				c0.001-14.031-5.462-27.222-15.383-37.144c-9.921-9.922-23.111-15.386-37.143-15.386h-1.1c-29.801,0-54.045,24.148-54.045,53.831
				c0,24.8-11.107,47.91-30.474,63.403l-8.366,6.693c-5.205,4.165-7.143,10.92-4.937,17.211c2.207,6.29,7.94,10.355,14.606,10.355
				h20.68c-1.561,3.504-2.92,7.162-4.074,10.961L33.37,437.04c-3.385,11.143-1.43,23.54,5.104,32.352
				C43.475,476.133,50.733,480,58.392,480h125.572c7.657,0,14.916-3.867,19.915-10.609c6.533-8.812,8.489-21.208,5.104-32.352
				l-24.282-79.945c-1.605-5.285-7.191-8.266-12.475-6.662c-5.284,1.605-8.268,7.19-6.662,12.475l24.282,79.945
				c1.769,5.824,0.253,11.543-2.034,14.628c-0.697,0.941-2.126,2.521-3.849,2.521H58.392c-1.723,0-3.151-1.579-3.849-2.521
				c-2.287-3.084-3.803-8.804-2.033-14.628l26.889-88.528c1.863-6.134,4.386-11.756,7.521-16.773h17.827
				c21.055,0,40.13-8.634,53.872-22.55h11.972c2.884,0,5.627,1.245,7.526,3.415c0.271,0.31,0.561,0.602,0.867,0.876l39.521,35.271
				c6.063,6.642,14.646,10.438,23.661,10.438c9.093,0,17.749-3.863,23.819-10.613l36.689-35.696
				c0.191-0.187,0.376-0.381,0.552-0.582c3.799-4.341,9.285-6.831,15.052-6.831h28.164c0.002,0,0.01,0,0.015,0h15.704
				c5.818,0,11.144,2.402,14.994,6.764s5.573,9.943,4.842,15.801l-5.913,50.812l-27.791,13.896l-26.178-13.089l-3.77-31.646
				c-0.653-5.484-5.631-9.402-11.112-8.747c-5.484,0.653-9.4,5.628-8.747,11.112l12.661,106.299
				c1.249,9.987,9.781,17.519,19.846,17.519h36.324c10.066,0,18.598-7.532,19.854-17.604l14.681-126.156
				c1.423-11.379-2.114-22.836-9.704-31.433C389.443,301.741,386.313,299.142,382.884,297.066z M160.494,261.809
				c-0.003,30.736-25.012,55.741-55.747,55.741h-1.833c13.804-11.025,24.729-26.091,30.965-43.871
				c1.828-5.212-0.915-10.918-6.127-12.747c-5.206-1.825-10.917,0.915-12.746,6.126c-9.309,26.54-31.641,45.426-57.462,49.615
				c22.469-19.26,35.282-47.046,35.282-76.786c0-18.654,15.272-33.831,34.045-33.831h1.1c8.688,0,16.856,3.384,23,9.528
				c6.144,6.144,9.526,14.313,9.525,23L160.494,261.809z M380.271,257.448L380.271,257.448c-0.001,9.144-3.592,17.71-10.112,24.122
				c-6.519,6.411-15.167,9.84-24.303,9.704c-18.333-0.306-33.248-15.804-33.248-34.547v-2.784c11.198,6.797,24.62,10.5,38.31,10.5
				c5.522,0,10-4.477,10-10s-4.478-10-10-10c-11.248,0-22.162-3.351-30.73-9.435c-4.746-3.37-7.579-8.98-7.579-15.008v-10.75
				c0-5.101,4.149-9.25,9.25-9.25h28.412c16.542,0,30,13.458,30,30V257.448z M367.318,460l-36.317,0.058l-6.053-50.818l18.874,9.437
				c2.814,1.407,6.129,1.407,8.943,0l20.557-10.278L367.318,460z"
											/>
											<path
												d="M346.153,0c-23.502,0-46.622,6.201-66.861,17.932c-15.224,8.824-28.599,20.617-39.292,34.56
				c-10.693-13.943-24.069-25.737-39.292-34.56C180.468,6.201,157.348,0,133.846,0C60.043,0,0,60.224,0,134.25
				c0,30.441,11.135,59.707,31.353,82.405c1.976,2.219,4.717,3.349,7.471,3.349c2.366,0,4.741-0.835,6.647-2.533
				c4.124-3.674,4.489-9.995,0.815-14.119C29.335,184.321,20,159.78,20,134.25C20,71.252,71.071,20,133.847,20
				c40.28,0,76.758,20.704,97.58,55.383c1.807,3.011,5.062,4.853,8.573,4.853s6.765-1.842,8.573-4.853
				C269.394,40.704,305.874,20,346.154,20C408.929,20,460,71.252,460,134.25c0,25.529-9.335,50.069-26.284,69.099
				c-3.673,4.124-3.308,10.445,0.816,14.118c4.125,3.674,10.446,3.309,14.119-0.816C468.867,193.954,480,164.689,480,134.25
				C480,60.224,419.957,0,346.153,0z"
											/>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<h3 className="mb-2 text-xl font-bold dark:text-white">
							Wedding Loan 💍
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Make your special day memorable with our Wedding Loan. Cover
							expenses like venue, catering, and outfits with ease.
						</p>
					</div>
					<div>
						<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
							<HomeIcon color="brown" />
						</div>
						<h3 className="mb-2 text-xl font-bold dark:text-white">
							Home Construction Loans 🏡
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Build your dream home with our Home Construction Loan. Flexible
							payment plans and low-interest rates to help you construct with
							confidence.
						</p>
					</div>
					<div>
						<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
							<HomeModernIcon color="yellow" />
						</div>
						<h3 className="mb-2 text-xl font-bold dark:text-white">
							Business Startup Loans 🚀
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Turn your business idea into reality! Our Business Startup Loans
							provide financial support for new entrepreneurs.
						</p>
					</div>
					<div>
						<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
							<AcademicCapIcon color="green" />
						</div>
						<h3 className="mb-2 text-xl font-bold dark:text-white">
							Education Loans 🎓
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Invest in your future with our Education Loans. Whether it's
							university fees or skill development courses, we've got you
							covered.
						</p>
					</div> */}
				{/* <div>
						<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
							<svg
								className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
							</svg>
						</div>
						<h3 className="mb-2 text-xl font-bold dark:text-white">
							Enterprise Design
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Craft beautiful, delightful experiences for both marketing and
							product with real cross-company collaboration.
						</p>
					</div>
					<div>
						<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
							<svg
								className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<h3 className="mb-2 text-xl font-bold dark:text-white">
							Operations
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Keep your company’s lights on with customizable, iterative, and
							structured workflows built for all efficient teams and individual.
						</p>
					</div> */}
				{/* </div> */}
			</div>
		</section>
	);
}
