import { Coffee, Users, Globe, Leaf, Award, Heart, MapPin, Target } from "lucide-react"

const About = () => {
  const values = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Quality First",
      description:
        "We never compromise on the quality of our coffee beans, ensuring every batch meets international standards.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Farmer Partnership",
      description: "Direct collaboration with local farmers ensures fair prices and sustainable farming practices.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Committed to environmentally friendly practices and supporting local communities.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Connecting Indonesian coffee culture with coffee lovers around the world.",
    },
  ]

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "Started as a small family business with a passion for Indonesian coffee",
    },
    {
      year: "2019",
      title: "First Export",
      description: "Successfully exported our first batch to international markets",
    },
    {
      year: "2021",
      title: "Farmer Network",
      description: "Established partnerships with over 50 local coffee farmers",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Received international certification for quality and sustainability",
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Launching our professional website to serve clients better",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2f1f1b] via-[#3d2a26] to-[#2f1f1b] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-3xl">🐱</span>
              <span className="text-orange-300 font-semibold text-lg">About Us</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Our Coffee Story</h1>
            <p className="text-xl text-[#e4cbbb] max-w-3xl mx-auto leading-relaxed">
              From the highlands of Indonesia to your cup, we're passionate about sharing the authentic taste of
              Indonesian coffee with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Target className="h-6 w-6 text-orange-500" />
                <span className="text-orange-500 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-[#2f1f1b] mb-6">Connecting Farmers to the World</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Aroma Sriwijaya, we bridge the gap between Indonesian coffee farmers and international markets. Our
                mission is to showcase the exceptional quality of Indonesian coffee while ensuring fair compensation for
                our farming partners.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great coffee tells a story - from the soil it grows in to the hands that harvest it, and
                finally to the cup that brings joy to coffee lovers worldwide.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#e4cbbb] rounded-3xl p-8 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Coffee farmers"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-full shadow-lg">
                  <span className="text-2xl">😻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#e4cbbb]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="text-orange-500 font-semibold">Our Values</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f1f1b] mb-4">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make, from bean selection to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2f1f1b] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">⏰</span>
              <span className="text-orange-500 font-semibold">Our Journey</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f1f1b] mb-4">Growing Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to international recognition, here's our story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-[#2f1f1b] mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full border-4 border-white shadow-lg">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#e4cbbb]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">👥</span>
              <span className="text-orange-500 font-semibold">Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f1f1b] mb-4">Meet the Coffee Cats</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team works tirelessly to bring you the finest Indonesian coffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmad Sriwijaya",
                role: "Founder & CEO",
                description: "Coffee enthusiast with 15+ years in the industry",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sari Dewi",
                role: "Quality Control Manager",
                description: "Expert in coffee grading and quality assurance",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Budi Santoso",
                role: "Export Manager",
                description: "Specialist in international trade and logistics",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg">
                    <span className="text-xl">😸</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#2f1f1b] mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
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
            <span className="text-3xl">🤝</span>
            <Award className="h-8 w-8 text-orange-300" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl text-[#e4cbbb] mb-8 max-w-3xl mx-auto">
            Ready to experience the finest Indonesian coffee? Let's start a conversation about how we can serve your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
              <MapPin className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
