// src/app/tourpacket/page.js
import { FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";

const toursData = [
  {
    id: 1,
    name: "Taman Nasional Lore Lindu",
    price: "1.200.000",
    duration: "2 Hari",
    location: "Poso",
    participants: "Min. 4 Orang",
    image: "/tour1.jpg",
  },
  {
    id: 2,
    name: "Pantai Talise",
    price: "800.000",
    duration: "1 Hari",
    location: "Palu",
    participants: "Min. 2 Orang",
    image: "/tour2.jpg",
  },
  {
    id: 3,
    name: "Danau Poso",
    price: "1.500.000",
    duration: "3 Hari",
    location: "Poso",
    participants: "Min. 4 Orang",
    image: "/tour3.jpg",
  },
  {
    id: 4,
    name: "Air Terjun Saluopa",
    price: "900.000",
    duration: "1 Hari",
    location: "Poso",
    participants: "Min. 2 Orang",
    image: "/tour4.jpg",
  },
  {
    id: 5,
    name: "Pulau Togean",
    price: "2.500.000",
    duration: "4 Hari",
    location: "Tojo Una-Una",
    participants: "Min. 6 Orang",
    image: "/tour5.jpg",
  },
  {
    id: 6,
    name: "Gunung Gawalise",
    price: "750.000",
    duration: "1 Hari",
    location: "Palu",
    participants: "Min. 4 Orang",
    image: "/tour6.jpg",
  },
  {
    id: 7,
    name: "Kawasan Megalitik Napu",
    price: "1.100.000",
    duration: "2 Hari",
    location: "Poso",
    participants: "Min. 4 Orang",
    image: "/tour7.jpg",
  },
  {
    id: 8,
    name: "Pantai Tanjung Karang",
    price: "850.000",
    duration: "1 Hari",
    location: "Donggala",
    participants: "Min. 2 Orang",
    image: "/tour8.jpg",
  },
];

export default function TourPacket() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Paket Tour Sulawesi Tengah
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursData.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 bg-linear-to-r from-red-500 to-blue-500 flex items-center justify-center text-white">
                <span className="text-xl font-semibold text-center px-4">
                  {tour.name}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{tour.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-red-500" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2 text-blue-500" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2 text-green-500" />
                    <span>{tour.participants}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold text-xl">
                    Rp {tour.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Pesan Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
