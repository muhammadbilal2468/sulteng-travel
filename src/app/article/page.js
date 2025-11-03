// src/app/article/page.js
import Link from "next/link";

const articlesData = [
  {
    id: 1,
    slug: "wisata-alam-sulawesi-tengah",
    title: "Wisata Alam Terbaik di Sulawesi Tengah",
    description:
      "Jelajahi keindahan alam Sulawesi Tengah yang memukau dengan pemandangan yang tak terlupakan...",
    date: "15 Jan 2024",
    category: "Wisata Alam",
  },
  {
    id: 2,
    slug: "tips-rental-mobil-palu",
    title: "Tips Rental Mobil di Palu",
    description:
      "Panduan lengkap untuk menyewa mobil di kota Palu dengan harga terbaik dan pelayanan terpercaya...",
    date: "12 Jan 2024",
    category: "Tips & Trik",
  },
  {
    id: 3,
    slug: "kuliner-khas-sulteng",
    title: "Kuliner Khas Sulteng yang Wajib Dicoba",
    description:
      "Temukan berbagai makanan tradisional khas Sulawesi Tengah yang menggugah selera...",
    date: "10 Jan 2024",
    category: "Kuliner",
  },
  {
    id: 4,
    slug: "festival-budaya-lore-lindu",
    title: "Festival Budaya di Lore Lindu",
    description:
      "Menyaksikan keunikan budaya dan tradisi masyarakat sekitar Taman Nasional Lore Lindu...",
    date: "8 Jan 2024",
    category: "Budaya",
  },
  {
    id: 5,
    slug: "panduan-pulau-togean",
    title: "Panduan Wisata ke Pulau Togean",
    description:
      "Semua yang perlu Anda ketahui sebelum mengunjungi surga tropis di Kepulauan Togean...",
    date: "5 Jan 2024",
    category: "Wisata Bahari",
  },
  {
    id: 6,
    slug: "transportasi-sulawesi-tengah",
    title: "Transportasi Umum di Sulawesi Tengah",
    description:
      "Informasi lengkap tentang moda transportasi yang tersedia untuk berkeliling Sulteng...",
    date: "3 Jan 2024",
    category: "Transportasi",
  },
  {
    id: 7,
    slug: "penginapan-murah-poso",
    title: "Penginapan Murah di Kota Poso",
    description:
      "Rekomendasi penginapan budget-friendly dengan fasilitas memadai di kawasan Poso...",
    date: "1 Jan 2024",
    category: "Akomodasi",
  },
  {
    id: 8,
    slug: "spot-foto-danau-poso",
    title: "Spot Foto Instagramable di Danau Poso",
    description:
      "Temukan lokasi-lokasi terbaik untuk mengambil foto dengan latar Danau Poso yang indah...",
    date: "28 Des 2023",
    category: "Fotografi",
  },
];

export default function Article() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Artikel Wisata</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 bg-linear-to-r from-blue-500 to-red-500 flex items-center justify-center text-white">
                <span className="text-lg font-semibold text-center px-4">
                  {article.title}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>

                <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mb-3">
                  {article.category}
                </span>

                <p className="text-gray-600 mb-4 text-sm">
                  {article.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <Link
                    href={`/article/${article.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-300"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
