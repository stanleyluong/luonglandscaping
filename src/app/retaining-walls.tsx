const retainingWallImages = ["/retainingwall1.jpg", "/retainingwall2.webp", "/retainingwall3.jpg"];

export default function RetainingWalls() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center">Retaining Walls</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
        {retainingWallImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Retaining Wall example ${idx + 1}`}
            className="w-full max-w-lg h-80 object-cover rounded-xl shadow-lg border-4 border-green-200"
          />
        ))}
      </div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-4">
        Durable, attractive retaining walls for structure and style. We design and construct walls that prevent erosion and add visual interest to your landscape.
      </p>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Types of Retaining Walls We Build</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-center sm:text-left sm:columns-2">
          <li>Concrete Block Walls</li>
          <li>Poured Concrete Walls</li>
          <li>Natural Stone Walls (e.g., Granite, Limestone)</li>
          <li>Brick Retaining Walls</li>
          <li>Timber/Wood Retaining Walls</li>
          <li>Gabion Walls</li>
          <li>Segmental Retaining Walls (SRW)</li>
          <li>Gravity Walls</li>
          <li>Cantilever Walls</li>
          <li>Anchored Walls</li>
        </ul>
      </div>
      <p className="text-base text-gray-600 max-w-2xl mx-auto text-center">
        Our team specializes in building strong, long-lasting retaining walls that blend seamlessly with your landscape. We understand the importance of both function and beauty, and our experts use proven techniques and quality materials to ensure your wall stands the test of time. Trust Luong Landscaping & Gardening to deliver a solution that protects your property and enhances its natural appeal.
      </p>
    </section>
  );
}
