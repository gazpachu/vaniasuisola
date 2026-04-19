import React from "react";
import heroImg from "@/assets/sculpture-hero.jpeg";
import img2 from "@/assets/sculpture-2.jpeg";
import img3 from "@/assets/sculpture-3.jpeg";
import detailImg from "@/assets/sculpture-detail.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vania Suisola</h1>
          <div className="space-x-4">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/work" className="hover:underline">
              Work
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-6xl font-bold mb-4">Vania Suisola</h2>
          <p className="text-xl mb-8">
            Contemporary Artist exploring form, space, and human expression
          </p>
          <a
            href="/work"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* Gallery Preview */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Recent Works</h3>
          <p className="text-lg text-gray-600">
            A selection of sculptures and mixed media pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <img
              src={img2}
              alt="Sculpture 2"
              className="w-full h-80 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold">Urban Reflections</h4>
            <p className="text-gray-600">Mixed media, 2023</p>
          </div>

          <div className="space-y-4">
            <img
              src={img3}
              alt="Sculpture 3"
              className="w-full h-80 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold">Temporal Forms</h4>
            <p className="text-gray-600">Bronze and steel, 2023</p>
          </div>

          <div className="space-y-4">
            <img
              src={detailImg}
              alt="Sculpture Detail"
              className="w-full h-80 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold">Surface Studies</h4>
            <p className="text-gray-600">Ceramic and found objects, 2022</p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/about"
            className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p className="text-gray-600">
              Learn about my artistic journey and vision
            </p>
          </a>
          <a
            href="/work"
            className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">All Works</h3>
            <p className="text-gray-600">
              Explore my complete portfolio of projects
            </p>
          </a>
          <a
            href="/contact"
            className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-600">Connect with me for collaborations</p>
          </a>
        </div>
      </main>
    </div>
  );
}
