import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/button";

const services = [
	{
		title: "Fences & Gates",
		img: "/fence1.webp",
		desc: "Custom fences and gates for privacy, security, and curb appeal.",
		link: "/services/fences-gates",
	},
	{
		title: "Retaining Walls",
		img: "/retainingwall1.jpg",
		desc: "Durable, attractive retaining walls for structure and style.",
		link: "/services/retaining-walls",
	},
	{
		title: "Patios",
		img: "/patio1.webp",
		desc: "Beautiful patios for outdoor living and entertaining.",
		link: "/services/patios",
	},
	{
		title: "Sustainable Landscape Design",
		img: "/sustainablelandscapedesign1.jpeg",
		desc: "Eco-friendly designs for a greener, healthier yard.",
		link: "/services/sustainable-landscape-design",
	},
	{
		title: "Irrigation",
		img: "/irrigation1.jpg",
		desc: "Efficient irrigation systems for lush, green lawns.",
		link: "/services/irrigation",
	},
	{
		title: "Yard Maintenance & Clean Ups",
		img: "/yardmaintenanceandcleanups1.webp",
		desc: "Keep your yard looking its best all year round.",
		link: "/services/yard-maintenance",
	},
];

export default function Home() {
	const navigate = useNavigate();
	return (
		<>
			{/* Hero Section */}
			<section className="w-full bg-[url('/hero.jpg')] bg-cover bg-center py-24 flex flex-col items-center justify-center relative mb-12">
				<div className="absolute inset-0 bg-green-900/70" />
				<div className="relative z-10 text-center text-white">
					<h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
						Transform Your Outdoor Space
					</h1>
					<p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
						Professional landscaping and gardening services for beautiful,
						sustainable outdoor spaces in your community.
					</p>
					<Link to="/contact">
						<Button label="Request a Quote" variant="primary" />
					</Link>
				</div>
			</section>

			{/* Our Philosophy Section */}
			<section className="container mx-auto px-4 mb-24">
				<h2 className="text-4xl font-extrabold text-green-900 mb-12 text-center tracking-tight font-serif">
					Our Philosophy
				</h2>
				<div className="max-w-3xl mx-auto text-center">
					<p className="text-lg text-gray-700 mb-6">
						At Luong Landscaping & Gardening, we believe that a well-designed
						landscape can transform not just your property, but your quality of
						life. Our approach is rooted in a deep respect for nature and a
						commitment to creating beautiful, sustainable, and functional outdoor
						spaces that reflect your personal style and needs.
					</p>
					<p className="text-lg text-gray-700 mb-6">
						We prioritize eco-friendly practices, from selecting native plants
						that thrive in our local climate to implementing water-wise irrigation
						solutions. We work closely with each client, listening to your ideas
						and bringing our expertise to craft a landscape that you will love for
						years to come.
					</p>
					<p className="text-lg text-gray-700">
						Our passion is creating outdoor environments that inspire connection,
						relaxation, and a deeper appreciation for the natural world.
					</p>
				</div>
			</section>

			{/* Reviews Section */}
			<section className="container mx-auto px-4 mb-24">
				<h2 className="text-3xl font-extrabold text-green-900 mb-8 text-center font-serif tracking-tight mt-24">
					What Our Clients Say
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							name: "Sarah M.",
							review:
								"Luong Landscaping transformed our backyard into a beautiful oasis! The team was professional, friendly, and paid attention to every detail. Highly recommend!",
						},
						{
							name: "James T.",
							review:
								"We hired them for a new fence and couldn't be happier. The craftsmanship is top-notch and the crew finished ahead of schedule.",
						},
						{
							name: "Priya S.",
							review:
								"Our new patio is perfect for entertaining. The design process was easy and the results exceeded our expectations.",
						},
						{
							name: "Carlos R.",
							review:
								"The irrigation system they installed is efficient and has made a huge difference in our lawn's health. Great service!",
						},
						{
							name: "Emily W.",
							review:
								"We appreciate their eco-friendly approach. Our sustainable landscape looks amazing and is easy to maintain.",
						},
						{
							name: "David L.",
							review:
								"The team did a fantastic job on our yard clean up. They were thorough, fast, and left everything spotless.",
						},
						{
							name: "Olivia K.",
							review:
								"Retaining wall project was handled with care and expertise. The results are both functional and beautiful.",
						},
						{
							name: "Ben F.",
							review:
								"Very responsive and easy to work with. They listened to our needs and delivered exactly what we wanted.",
						},
						{
							name: "Jasmine P.",
							review:
								"Our garden has never looked better! The seasonal planting service is a must for anyone who loves flowers.",
						},
					].map((r, i) => (
						<div
							key={i}
							className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 border border-green-100"
						>
							<div className="flex items-center gap-3 mb-2">
								<span className="text-green-700 font-bold text-lg font-serif">
									{r.name}
								</span>
								<span className="flex gap-1 text-green-500 text-xl">
									{"★★★★★"}
								</span>
							</div>
							<p className="text-gray-700 text-base font-medium">
								{r.review}
							</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
}