import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="shadow-xl shadow-gray-400 rounded-2xl flex flex-col items-center w-full max-w-sm border p-6 gap-5 bg-white">
        <div className="ring-2 ring-black p-1 rounded-full hover:animate-spin bg-black w-36 h-36 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src="ungu3.jpg"
            alt="Foto Rinda"
          />
        </div>

        <div className="text-center">
          <h1 className="font-bold text-2xl">Rinda Wulandari</h1>
          <p className="text-sm text-gray-500 font-light">
            Digital dan Manual Artist
          </p>
        </div>

        <p className="text-gray-600 text-sm text-center leading-relaxed">
          Halo! Perkenalkan, saya Rinda Wulandari — seorang digital dan manual
          artist yang berfokus di bidang gambar. Saya berkomitmen untuk
          menciptakan karya visual yang estetis, ekspresif, dan penuh makna,
          baik melalui media digital maupun tradisional.
        </p>

        <button className="flex items-center justify-center gap-2 w-full py-2 rounded-md bg-black text-amber-50 hover:bg-gray-800 transition-transform">
          <FaInstagram />
          Instagram Follow!
        </button>
      </div>
    </div>
  );
}

export default App;
