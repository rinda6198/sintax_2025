import { Link } from "react-router-dom"
import { ArrowRight, Coffee, Globe, Users, Leaf, Star, Award } from "lucide-react"

const Home = () => {
  const features = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Carefully selected arabica and robusta beans from Indonesia's finest regions",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Export",
      description: "Serving roasteries, importers, and wholesalers worldwide",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Direct Partnership",
      description: "Working directly with local farmers to ensure quality and authenticity",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Practices",
      description: "Committed to environmental sustainability and fair trade",
    },
  ]

  const products = [
    {
      name: "Arabica Premium",
      origin: "Aceh Gayo",
      description: "Rich, full-bodied with chocolate notes",
      image: "/arabika2.jpg?height=200&width=300",
    },
    {
      name: "Robusta Superior",
      origin: "Lampung",
      description: "Strong, bold flavor with earthy undertones",
      image: "/robusta.jpg?height=200&width=300",
    },
    {
      name: "Arabica Specialty",
      origin: "Toraja",
      description: "Complex flavor with fruity and floral notes",
      image: "/k4.jpg?height=200&width=300",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2f1f1b] via-[#3d2a26] to-[#2f1f1b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl">🐱</span>
                <span className="text-orange-300 font-medium">Premium Indonesian Coffee</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                From Indonesian
                <span className="text-orange-300"> Highlands</span>
                <br />
                To Your Cup
              </h1>
              <p className="text-xl text-[#e4cbbb] mb-8 leading-relaxed">
                Discover the authentic taste of Indonesia's finest coffee beans. We export premium arabica and robusta
                directly from local farmers to international markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#e4cbbb] text-[#e4cbbb] hover:bg-[#e4cbbb] hover:text-[#2f1f1b] font-semibold rounded-full transition-all duration-200"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#e4cbbb] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
  src="/minum kopi.jpg"
  alt="Minum Kopi"
  className="w-full h-80 object-cover rounded-2xl"
/>
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                  <Coffee className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-full shadow-lg">
                  <span className="text-2xl">😸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="text-orange-500 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f1f1b] mb-4">Purrfect Coffee Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about delivering the finest Indonesian coffee with the care and attention of a curious
              cat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#e4cbbb]/10 p-8 rounded-2xl text-center hover:bg-[#e4cbbb]/20 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2f1f1b] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-[#e4cbbb]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="text-orange-500 font-semibold">Our Products</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f1f1b] mb-4">Premium Coffee Selection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked from Indonesia's most renowned coffee regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2f1f1b] mb-2">{product.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{product.origin}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Premium Quality</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2f1f1b] to-[#3d2a26] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-3xl">🐱</span>
            <Award className="h-8 w-8 text-orange-300" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Coffee Journey?</h2>
          <p className="text-xl text-[#e4cbbb] mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied international clients who trust Aroma Sriwijaya for their premium Indonesian
            coffee needs. Let's brew something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Your Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-[#e4cbbb] text-[#e4cbbb] hover:bg-[#e4cbbb] hover:text-[#2f1f1b] font-semibold rounded-full transition-all duration-200"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
