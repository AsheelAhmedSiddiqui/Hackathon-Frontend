import React from "react";

export default function CTASection() {
	return (
		<section className=" dark:bg-gray-900 min-h-[400px] flex items-center justify-center bg-[#0B1120] text-white px-4">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					Get started with Flowbite today
				</h1>
				<p className="text-gray-400 text-lg mb-8">
					Connecting with your audience has never been easier with Flowbite
					straightforward email marketing and automation tools.
				</p>

				<div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4">
					<div className="relative flex-1">
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-3 bg-gray-700/50 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-label="Email address"
						/>
						<div className="absolute left-3 top-1/2 transform -translate-y-1/2">
							<svg
								className="w-5 h-5 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
					</div>
					<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
						Subscribe
					</button>
				</div>

				<p className="text-sm text-gray-400">
					Instant signup. No credit card required.{" "}
					<a href="#" className="text-blue-500 hover:underline">
						Terms of Service
					</a>{" "}
					and{" "}
					<a href="#" className="text-blue-500 hover:underline">
						Privacy Policy
					</a>
					.
				</p>
			</div>
		</section>
	);
}
