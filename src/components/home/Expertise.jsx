// components/Expertise.js

export default function Expertise() {
    const expertiseItems = [
      {
        title: "Notary Services",
        description: "Professional notary services for all your documents.",
        image: "/images/about/about.webp", // Replace with your own image path
      },
      {
        title: "MEA Services",
        description: "Official attestations by MEA for seamless authentication.",
        image: "/images/about/about.webp", // Replace with your own image path
      },
      {
        title: "Embassy Services",
        description: "Embassy-certified documents for international use.",
        image: "/images/about/about.webp", // Replace with your own image path
    
      },
      {
        title: "Embassy Services",
        description: "Embassy-certified documents for international use.",
        image: "/images/about/about.webp", // Replace with your own image path
      }, 
    ];
  
    return (
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-cover"
              />
              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  