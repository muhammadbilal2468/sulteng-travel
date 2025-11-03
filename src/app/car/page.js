// src/app/car/page.js
import { FaUsers, FaGasPump } from "react-icons/fa";

const carsData = [
  {
    id: 1,
    name: "Toyota Avanza",
    price: "350.000",
    available: 5,
    passengers: 7,
    fuel: "Bensin",
    image: "/car1.jpg",
  },
  {
    id: 2,
    name: "Honda Brio",
    price: "300.000",
    available: 3,
    passengers: 5,
    fuel: "Bensin",
    image: "/car2.jpg",
  },
  {
    id: 3,
    name: "Mitsubishi Xpander",
    price: "450.000",
    available: 4,
    passengers: 7,
    fuel: "Bensin",
    image: "/car3.jpg",
  },
  {
    id: 4,
    name: "Toyota Innova",
    price: "500.000",
    available: 2,
    passengers: 7,
    fuel: "Diesel",
    image: "/car4.jpg",
  },
  {
    id: 5,
    name: "Daihatsu Terios",
    price: "400.000",
    available: 6,
    passengers: 7,
    fuel: "Bensin",
    image: "/car5.jpg",
  },
  {
    id: 6,
    name: "Suzuki Ertiga",
    price: "380.000",
    available: 4,
    passengers: 7,
    fuel: "Bensin",
    image: "/car6.jpg",
  },
  {
    id: 7,
    name: "Honda HR-V",
    price: "550.000",
    available: 3,
    passengers: 5,
    fuel: "Bensin",
    image: "/car7.jpg",
  },
  {
    id: 8,
    name: "Toyota Rush",
    price: "480.000",
    available: 2,
    passengers: 7,
    fuel: "Bensin",
    image: "/car8.jpg",
  },
];

export default function Car() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Daftar Mobil</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carsData.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 bg-linear-to-r from-blue-500 to-red-500 flex items-center justify-center text-white">
                <span className="text-xl font-semibold">{car.name}</span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{car.name}</h3>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 flex items-center">
                    <FaUsers className="mr-1" /> {car.passengers} Kursi
                  </span>
                  <span className="text-sm text-gray-600 flex items-center">
                    <FaGasPump className="mr-1" /> {car.fuel}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-green-600 font-semibold">
                    Tersedia: {car.available} unit
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-lg">
                    Rp {car.price}/hari
                  </span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition duration-300">
                    Pesan
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
