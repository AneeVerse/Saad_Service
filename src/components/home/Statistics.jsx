// components/Statistics.js

export default function Statistics() {
    return (
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-green-600">5,000+</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-600">25,000+</h3>
            <p className="text-gray-600">Documents Processed</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-600">48 hrs</h3>
            <p className="text-gray-600">Fast Turnaround</p>
          </div>
        </div>
      </section>
    );
  }
  