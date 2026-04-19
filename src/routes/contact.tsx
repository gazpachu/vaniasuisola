import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-6">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold hover:underline">
            Vania Suisola
          </a>
          <div className="space-x-4">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/work" className="hover:underline">
              Work
            </a>
            <a href="/contact" className="underline">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12">Get in Touch</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>

              <p className="text-lg mb-8">
                I'm always interested in new projects, collaborations, and
                opportunities to share my work. Whether you're a gallery owner,
                fellow artist, or art enthusiast, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:hello@vaniasuisola.com"
                    className="text-blue-600 hover:underline"
                  >
                    hello@vaniasuisola.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>Barcelona, Spain</p>
                </div>

                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <a
                    href="https://instagram.com/vaniasuisola"
                    className="text-blue-600 hover:underline"
                  >
                    @vaniasuisola
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
