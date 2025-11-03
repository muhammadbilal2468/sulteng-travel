// src/app/about/page.js
import { FaUsers, FaAward, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tentang Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perusahaan terpercaya dalam menyediakan jasa rental mobil dan paket
            tour di Sulawesi Tengah sejak 2015.
          </p>
        </div>

        {/* Visi Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Visi Kami</h2>
            <p className="text-gray-700 text-lg">
              Menjadi perusahaan travel terdepan di Sulawesi Tengah yang
              memberikan pengalaman terbaik bagi setiap pelanggan dengan layanan
              berkualitas dan harga kompetitif.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Misi Kami</h2>
            <ul className="text-gray-700 text-lg space-y-2">
              <li>• Menyediakan armada mobil terawat dan nyaman</li>
              <li>• Menawarkan paket tour menarik dengan harga terjangkau</li>
              <li>• Memberikan pelayanan terbaik 24/7</li>
              <li>• Mengutamakan keselamatan dan kenyamanan pelanggan</li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Profesional</h3>
            <p className="text-gray-600">
              Tim berpengalaman dan profesional di bidangnya
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="text-red-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Berkualitas</h3>
            <p className="text-gray-600">
              Layanan dan armada berkualitas tinggi
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Terpercaya</h3>
            <p className="text-gray-600">Terpercaya oleh ribuan pelanggan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
