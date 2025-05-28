const irrigationImages = ["/irrigation1.jpg", "/irrigation2.webp", "/irrigation3.jpg"];

export default function Irrigation() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center">Irrigation</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
        {irrigationImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Irrigation example ${idx + 1}`}
            className="w-full max-w-lg h-80 object-cover rounded-xl shadow-lg border-4 border-green-200"
          />
        ))}
      </div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-4">
        Efficient irrigation systems for lush, green lawns. Our smart irrigation solutions save water and keep your landscape thriving.
      </p>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Types of Irrigation Systems We Install</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-center sm:text-left sm:columns-2">
          <li>Drip Irrigation Systems</li>
          <li>Sprinkler Systems (Pop-up, Rotor, Spray)</li>
          <li>Smart Irrigation Controllers (Wi-Fi enabled)</li>
          <li>Rain Sensors & Soil Moisture Sensors</li>
          <li>Micro-Sprinklers & Bubblers</li>
          <li>Subsurface Irrigation</li>
          <li>Irrigation System Audits & Upgrades</li>
          <li>Seasonal Adjustments & Maintenance</li>
          <li>Water-Efficient Nozzles</li>
          <li>Backflow Prevention Devices</li>
        </ul>
      </div>
      <p className="text-base text-gray-600 max-w-2xl mx-auto text-center">
        The Luong Landscaping & Gardening team is highly trained in the latest irrigation technology. We design and install systems that maximize efficiency and minimize waste, ensuring your plants get exactly what they need. Our commitment to quality and sustainability means you can trust us for reliable, long-lasting irrigation solutions.
      </p>
    </section>
  );
}
