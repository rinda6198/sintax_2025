import React from 'react'

export default function Home() {
    return (
        <section className="pt-20 pb-20 bg-gradient-to-br from-blue-100 to-blue-300 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Bagian Kiri */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Selamat Datang di <span className="text-blue-600">cat coffee sriwijaya</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Deskripsi singkat tentang acara, produk, atau layananmu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Daftar Sekarang
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/lelah ngoding - Copy.jpg"
            alt="Ilustrasi Hero"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
       
}
