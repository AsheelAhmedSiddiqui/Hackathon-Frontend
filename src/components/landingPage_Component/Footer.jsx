// import Image from "next/image";
// import Link from "next/link";

import { Link } from "react-router-dom";

export default function Footer() {
	const navigation = [
		{ name: "About", href: "#" },
		{ name: "Premium", href: "#" },
		{ name: "Campaigns", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Affiliate Program", href: "#" },
		{ name: "FAQs", href: "#" },
		{ name: "Contact", href: "#" },
	];

	return (
		<footer className="dark:bg-gray-900 text-white py-12">
			<div className="max-w-6xl mx-auto px-4 text-center">
				<div className="flex justify-center items-center mb-6 space-x-2">
					{/* <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
						<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
							<path d="M8 5v14l11-7z" />
						</svg>
					</div> */}
					<span className="text-3xl font-bold">
						Saylani <span className="text-green-500">Microfinance</span>
					</span>
				</div>

				<p className="text-gray-400 max-w-2xl mx-auto mb-8">
					Empowering you with flexible and affordable loans to turn your dreams
					into reality, every step of the way.
				</p>

				<nav className="mb-8">
					<ul className="flex flex-wrap justify-center gap-6">
						{navigation.map((item) => (
							<li key={item.name}>
								<Link
									to={item.href}
									className="text-gray-300 hover:text-white transition-colors"
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="text-gray-500 text-sm">
					© 2025-{new Date().getFullYear()} Saylani Welfare™. All Rights
					Reserved.
				</div>
			</div>
		</footer>
	);
}
