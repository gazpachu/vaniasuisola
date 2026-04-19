import React from "react";
import heroImg from "@/assets/sculpture-hero.jpeg";
import img2 from "@/assets/sculpture-2.jpeg";
import img3 from "@/assets/sculpture-3.jpeg";
import img4 from "@/assets/sculpture-4.jpeg";
import detailImg from "@/assets/sculpture-detail.jpeg";

export default function Work() {
  const projects = [
    {
      title: "Urban Reflections",
      year: "2023",
      medium: "Mixed media on canvas",
      description:
        "A series exploring the relationship between urban architecture and human emotion.",
      image: heroImg,
    },
    {
      title: "Digital Memories",
      year: "2022",
      medium: "Digital art & photography",
      description:
        "An exploration of how digital technology shapes our memories and perceptions.",
      image: img2,
    },
    {
      title: "Fragments of Time",
      year: "2021",
      medium: "Oil and collage",
      description:
        "A meditation on the passage of time through layered visual narratives.",
      image: img3,
    },
    {
      title: "Nature's Code",
      year: "2020",
      medium: "Installation",
      description:
        "An interactive installation examining the patterns in nature and technology.",
      image: img4,
    },
    {
      title: "Surface Studies",
      year: "2022",
      medium: "Ceramic and found objects",
      description: "Detailed explorations of texture, form, and materiality.",
      image: detailImg,
    },
  ];

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
            <a href="/work" className="underline">
              Work
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-12">My Work</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-gray-600">
                    {project.year} • {project.medium}
                  </p>
                  <p className="text-lg mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in my work?</h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm always open to discussing new projects and collaborations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
