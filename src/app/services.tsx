import { Link, Outlet, useLocation } from "react-router-dom";

const serviceDetails = [
	{
		title: "Fences & Gates",
		images: ["/fence1.webp", "/fence2.avif", "/fence3.webp"],
		desc: "Custom fences and gates for privacy, security, and curb appeal. Our team builds durable, beautiful fencing solutions tailored to your property and style preferences.",
		link: "/services/fences-gates",
	},
	{
		title: "Retaining Walls",
		images: [
			"/retainingwall1.jpg",
			"/retainingwall2.webp",
			"/retainingwall3.jpg",
		],
		desc: "Durable, attractive retaining walls for structure and style. We design and construct walls that prevent erosion and add visual interest to your landscape.",
		link: "/services/retaining-walls",
	},
	{
		title: "Patios",
		images: ["/patio1.webp", "/patio2.jpg", "/patio3.jpg"],
		desc: "Beautiful patios for outdoor living and entertaining. Enjoy custom hardscapes that expand your living space and add value to your home.",
		link: "/services/patios",
	},
	{
		title: "Sustainable Landscape Design",
		images: [
			"/sustainablelandscapedesign1.jpeg",
			"/sustainablelandscapedesign2.webp",
			"/sustainablelandscapedesign3.jpeg",
		],
		desc: "Eco-friendly designs for a greener, healthier yard. We use native plants and sustainable practices to create beautiful, low-maintenance landscapes.",
		link: "/services/sustainable-landscape-design",
	},
	{
		title: "Irrigation",
		images: ["/irrigation1.jpg", "/irrigation2.webp", "/irrigation3.jpg"],
		desc: "Efficient irrigation systems for lush, green lawns. Our smart irrigation solutions save water and keep your landscape thriving.",
		link: "/services/irrigation",
	},
	{
		title: "Yard Maintenance & Clean Ups",
		images: [
			"/yardmaintenanceandcleanups1.webp",
			"/yardmaintenanceandcleanups2.jpg",
			"/yardmaintenanceandcleanups3.jpg",
		],
		desc: "Keep your yard looking its best all year round. We offer regular maintenance, seasonal cleanups, and one-time overhauls for any property size.",
		link: "/services/yard-maintenance",
	},
];

export default function Services() {
	const location = useLocation();

	// Check if the current path is exactly "/services"
	const isServicesPage = location.pathname === "/services";

	return (
		<section className="container mx-auto py-16 px-4">
			{isServicesPage && ( // Only show this content on the main /services page
				<>
					<h2 className="text-4xl font-bold text-green-900 mb-12 text-center font-serif tracking-tight">
						Our Services
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
						{serviceDetails.map((service) => (
							<Link
								to={service.link}
								key={service.title}
								className="bg-white rounded-2xl shadow-lg flex flex-col transition hover:scale-105 focus:outline-none border border-green-100 hover:border-green-400 group overflow-hidden"
								aria-label={`View details for ${service.title}`}
							>
								<img
									src={service.images[0]} // Show first image as preview
									alt={service.title}
									className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
								/>
								<div className="p-6 flex flex-col items-center flex-grow">
									<h3 className="text-2xl font-bold mb-2 text-green-800 font-serif group-hover:text-green-900 tracking-tight text-center">
										{service.title}
									</h3>
									<p className="text-gray-600 text-center text-base font-medium group-hover:text-green-700 line-clamp-3">
										{service.desc}
									</p>
								</div>
							</Link>
						))}
					</div>
				</>
			)}
			<Outlet /> {/* This will render the nested service routes */}
		</section>
	);
}
