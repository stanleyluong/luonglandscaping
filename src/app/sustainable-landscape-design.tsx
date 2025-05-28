const designImages = ["/sustainablelandscapedesign1.jpeg", "/sustainablelandscapedesign2.webp", "/sustainablelandscapedesign3.jpeg"];

export default function SustainableLandscapeDesign() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center">Sustainable Landscape Design</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
        {designImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Sustainable Landscape Design example ${idx + 1}`}
            className="w-full max-w-lg h-80 object-cover rounded-xl shadow-lg border-4 border-green-200"
          />
        ))}
      </div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-4">
        Eco-friendly designs for a greener, healthier yard. We use native plants and sustainable practices to create beautiful, low-maintenance landscapes.
      </p>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Our Sustainable Design Approaches</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-center sm:text-left sm:columns-2">
          <li>Native Plant Landscaping</li>
          <li>Drought-Tolerant Landscaping (Xeriscaping)</li>
          <li>Water-Wise Garden Design</li>
          <li>Permeable Paving Solutions</li>
          <li>Rain Gardens & Bioswales</li>
          <li>Organic Lawn Care</li>
          <li>Composting Systems</li>
          <li>Wildlife Habitats (e.g., Pollinator Gardens)</li>
          <li>Reduced Water Usage Plans</li>
          <li>Low-Maintenance Garden Beds</li>
        </ul>
      </div>
      <p className="text-base text-gray-600 max-w-2xl mx-auto text-center">
        Our landscape designers are experts in sustainable solutions that benefit both your property and the environment. We stay up-to-date with the latest green practices and select plants that thrive in our local climate. With Luong Landscaping & Gardening, you get a landscape that’s not only stunning but also easy to care for and environmentally responsible.
      </p>
    </section>
  );
}
