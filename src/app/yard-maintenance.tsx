const maintenanceImages = ["/yardmaintenanceandcleanups1.webp", "/yardmaintenanceandcleanups2.jpg", "/yardmaintenanceandcleanups3.jpg"];

export default function YardMaintenance() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center">Yard Maintenance & Clean Ups</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
        {maintenanceImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Yard Maintenance example ${idx + 1}`}
            className="w-full max-w-lg h-80 object-cover rounded-xl shadow-lg border-4 border-green-200"
          />
        ))}
      </div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-4">
        Keep your yard looking its best all year round. We offer regular maintenance, seasonal cleanups, and one-time overhauls for any property size.
      </p>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Our Maintenance & Clean Up Services Include</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-center sm:text-left sm:columns-2">
          <li>Lawn Mowing & Edging</li>
          <li>Trimming & Pruning (Shrubs, Hedges, Small Trees)</li>
          <li>Weed Control (Garden Beds & Lawns)</li>
          <li>Fertilization Programs</li>
          <li>Leaf Removal & Fall Clean Up</li>
          <li>Spring Clean Up & Mulching</li>
          <li>Garden Bed Maintenance</li>
          <li>Aeration & Overseeding</li>
          <li>Debris Hauling</li>
          <li>Storm Damage Clean Up</li>
          <li>Gutter Cleaning (as part of yard cleanup)</li>
          <li>Seasonal Planting & Flower Care</li>
        </ul>
      </div>
      <p className="text-base text-gray-600 max-w-2xl mx-auto text-center">
        Our dedicated maintenance crew is known for reliability, attention to detail, and friendly service. We treat every yard as if it were our own, providing thorough cleanups and ongoing care to keep your landscape healthy and beautiful. With Luong Landscaping & Gardening, you can relax knowing your outdoor space is in expert hands.
      </p>
    </section>
  );
}
