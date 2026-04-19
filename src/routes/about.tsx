import React from "react";
import heroImg from "@/assets/sculpture-hero.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-6">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold hover:underline">
            Vania Suisola
          </a>
          <div className="space-x-4">
            <a href="/about" className="underline">
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

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">About Me</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                I am a contemporary artist working primarily with mixed media,
                exploring themes of identity, memory, and the human condition
                through my work.
              </p>

              <p className="text-lg mb-6">
                My artistic journey began in childhood, but it was during my
                studies that I discovered my passion for combining traditional
                techniques with modern digital approaches.
              </p>

              <p className="text-lg">
                Based in Barcelona, I draw inspiration from the vibrant cultural
                landscape and the interplay between historical and contemporary
                artistic expressions.
              </p>
            </div>

            <div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={heroImg}
                  alt="Artist Vania Suisola"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Education & Experience</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">MFA Fine Arts</h3>
                <p className="text-gray-600">University of Barcelona, 2020</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">BFA Visual Arts</h3>
                <p className="text-gray-600">ELISAVA School of Design, 2018</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Solo Exhibition</h3>
                <p className="text-gray-600">
                  Gallery Contemporani, Barcelona, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
