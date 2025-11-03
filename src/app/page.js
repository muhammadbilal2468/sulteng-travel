// src/app/page.js
import { FaCar, FaMapMarkedAlt, FaNewspaper, FaStar } from "react-icons/fa";

const featuredCars = [
  { id: 1, name: "Toyota Avanza", price: "350.000", image: "/car1.jpg" },
  { id: 2, name: "Honda Brio", price: "300.000", image: "/car2.jpg" },
  { id: 3, name: "Mitsubishi Xpander", price: "450.000", image: "/car3.jpg" },
];

const featuredTours = [
  {
    id: 1,
    name: "Taman Nasional Lore Lindu",
    price: "1.200.000",
    image: "/tour1.jpg",
  },
  { id: 2, name: "Pantai Talise", price: "800.000", image: "/tour2.jpg" },
  { id: 3, name: "Danau Poso", price: "1.500.000", image: "/tour3.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Jelajahi Keindahan Sulawesi Tengah
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Rental Mobil & Paket Tour Terbaik di Sulteng
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Pesan Sekarang
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rental Mobil</h3>
              <p className="text-gray-600">
                Armada terawat dengan harga terjangkau
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkedAlt className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paket Tour</h3>
              <p className="text-gray-600">Wisata menarik di Sulawesi Tengah</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaNewspaper className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Artikel Wisata</h3>
              <p className="text-gray-600">Tips dan informasi seputar wisata</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mobil Populer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Gambar {car.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-blue-600 font-bold text-lg">
                    Rp {car.price}/hari
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Paket Tour Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Gambar {tour.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                  <p className="text-red-600 font-bold text-lg">
                    Rp {tour.price}/orang
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
