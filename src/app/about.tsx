
export default function About() {
  return (
    <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-green-900 mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Luong Landscaping & Gardening is a family-owned business dedicated to
          creating beautiful, sustainable outdoor spaces. Our team brings years of
          experience and a passion for quality craftsmanship to every project.
        </p>
        <p className="text-gray-700 mb-4">
          We believe in eco-friendly practices and personalized service, ensuring
          your yard is both stunning and sustainable.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-green-700 text-white rounded font-semibold hover:bg-green-800 transition-colors"
        >
          Contact Us
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="/landscapingteam.jpg"
          alt="Luong Landscaping Team"
          className="rounded-lg shadow-lg w-80 h-80 object-cover"
        />
      </div>
    </section>
  );
}
