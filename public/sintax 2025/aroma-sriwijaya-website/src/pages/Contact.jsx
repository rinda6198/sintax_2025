"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Coffee } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    message: "",
    productInterest: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will get back to you soon. 🐱☕")
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "info@aromasriwijaya.com",
      description: "Send us your inquiries anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+62 812-3456-7890",
      description: "Available during business hours",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "Palembang, South Sumatra",
      description: "Indonesia",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 8AM - 6PM",
      description: "GMT+7 (Jakarta Time)",
    },
  ]

  const productOptions = [
    "Arabica Premium (Aceh Gayo)",
    "Robusta Superior (Lampung)",
    "Arabica Specialty (Toraja)",
    "Custom Blend",
    "Bulk Order Inquiry",
    "Other",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2f1f1b] via-[#3d2a26] to-[#2f1f1b] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-3xl">📞</span>
              <span className="text-orange-300 font-semibold text-lg">Contact Us</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Let's Brew Something Amazing Together</h1>
            <p className="text-xl text-[#e4cbbb] max-w-3xl mx-auto leading-relaxed">
              Ready to experience premium Indonesian coffee? Get in touch with us for quotes, partnerships, or any
              questions about our products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="text-orange-500 font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f1f1b] mb-4">We're Here to Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#e4cbbb]/10 p-8 rounded-2xl text-center hover:bg-[#e4cbbb]/20 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2f1f1b] mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-2">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#e4cbbb]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <MessageCircle className="h-6 w-6 text-orange-500" />
                <span className="text-orange-500 font-semibold">Send Message</span>
              </div>
              <h2 className="text-4xl font-bold text-[#2f1f1b] mb-6">Request a Quote</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. Let us know your specific
                requirements and we'll provide a customized solution.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2f1f1b] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2f1f1b] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#2f1f1b] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#2f1f1b] mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-[#2f1f1b] mb-2">
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a product</option>
                    {productOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2f1f1b] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements, quantity needed, delivery timeline, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl">☕</span>
                <span className="text-orange-500 font-semibold">Why Choose Us</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2f1f1b] mb-6">Your Trusted Coffee Partner</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f1f1b] mb-1">International Experience</h4>
                    <p className="text-gray-600 text-sm">
                      Serving clients across multiple countries with reliable export services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Coffee className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f1f1b] mb-1">Premium Quality</h4>
                    <p className="text-gray-600 text-sm">
                      Carefully selected beans with international quality certifications
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f1f1b] mb-1">Fast Response</h4>
                    <p className="text-gray-600 text-sm">Quick turnaround on quotes and inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2f1f1b] mb-1">Personal Service</h4>
                    <p className="text-gray-600 text-sm">Dedicated support team to handle all your requirements</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#e4cbbb]/20 rounded-xl">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xl">😸</span>
                  <span className="font-semibold text-[#2f1f1b]">Fun Fact</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Our team is as curious and dedicated as cats when it comes to finding the perfect coffee beans for our
                  clients!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">🗺️</span>
              <span className="text-orange-500 font-semibold">Find Us</span>
            </div>
            <h2 className="text-4xl font-bold text-[#2f1f1b] mb-4">Our Location</h2>
            <p className="text-xl text-gray-600">Located in the heart of South Sumatra, Indonesia</p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#2f1f1b] mb-2">Palembang, South Sumatra</h3>
              <p className="text-gray-600">Indonesia</p>
              <p className="text-sm text-gray-500 mt-2">Interactive map coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
