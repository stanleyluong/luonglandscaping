const fencesImages = ["/fence1.webp", "/fence2.avif", "/fence3.webp"];

export default function FencesGates() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center">
        Fences & Gates
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
        {fencesImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Fence & Gate example ${idx + 1}`}
            className="w-full max-w-lg h-80 object-cover rounded-xl shadow-lg border-4 border-green-200"
          />
        ))}
      </div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-4">
        Custom fences and gates for privacy, security, and curb appeal. Our team
        builds durable, beautiful fencing solutions tailored to your property and
        style preferences.
      </p>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          Types of Fences We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-center sm:text-left sm:columns-2">
          <li>Wood Fences (Cedar, Pine, Redwood)</li>
          <li>Vinyl Fences (PVC)</li>
          <li>Aluminum Fences</li>
          <li>Chain Link Fences</li>
          <li>Wrought Iron Fences</li>
          <li>Composite Fences</li>
          <li>Privacy Fences</li>
          <li>Picket Fences</li>
          <li>Pool Fences</li>
          <li>Driveway Gates</li>
          <li>Pedestrian Gates</li>
          <li>Automated Gates</li>
        </ul>
      </div>
      <p className="text-base text-gray-600 max-w-2xl mx-auto text-center">
        At Luong Landscaping & Gardening, our skilled craftsmen take pride in
        every fence and gate we build. We use only high-quality materials and pay
        attention to every detail, ensuring your new fence is both functional and
        visually stunning. Whether you need added security, a decorative touch, or
        a custom solution, our team brings years of experience and a passion for
        excellence to every project.
      </p>
    </section>
  );
}
