const patioImages = ["/patio1.webp", "/patio2.jpg", "/patio3.jpg"];

export default function Patios() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center">
        Patios
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
        {patioImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Patio example ${idx + 1}`}
            className="w-full max-w-lg h-80 object-cover rounded-xl shadow-lg border-4 border-green-200"
          />
        ))}
      </div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-4">
        Beautiful patios for outdoor living and entertaining. Enjoy custom
        hardscapes that expand your living space and add value to your home.
      </p>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          Patio Materials & Styles We Use
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-center sm:text-left sm:columns-2">
          <li>Paver Patios (Concrete, Brick, Natural Stone)</li>
          <li>Flagstone Patios</li>
          <li>Concrete Patios (Stamped, Stained, Broom Finish)</li>
          <li>Brick Patios</li>
          <li>Tile Patios</li>
          <li>Gravel Patios</li>
          <li>Raised Patios</li>
          <li>Multi-level Patios</li>
          <li>Patios with Fire Pits</li>
          <li>Patios with Outdoor Kitchens</li>
        </ul>
      </div>
      <p className="text-base text-gray-600 max-w-2xl mx-auto text-center">
        Our talented team at Luong Landscaping & Gardening is passionate about
        creating inviting outdoor spaces. We work closely with you to design and
        build patios that fit your lifestyle and complement your home. From
        classic to contemporary, our craftsmanship and attention to detail
        ensure your new patio will be a favorite gathering spot for years to
        come.
      </p>
    </section>
  );
}
