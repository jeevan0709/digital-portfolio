// src/app/projects/page.tsx
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
    {
      title: 'Cyber Girl',
      description: 'A futuristic character illustration in neon color tones.',
      image: '/projects/cybergirl.jpg', // ✅ Correct path
      tools: ['Photoshop', 'Wacom'],
      link: 'https://www.instagram.com/yourartpage'
    },
    {
      title: 'Dragon Blaze',
      description: 'Digital dragon in blazing flames, concept art style.',
      image: '/projects/dragonblaze.jpg', // ✅ Correct path
      tools: ['Procreate'],
      link: ''
    },
    {
      title: 'Sketch Portrait',
      description: 'Detailed pencil-style digital sketch portrait.',
      image: '/projects/portrait.jpg', // ✅ Correct path
      tools: ['Krita'],
      link: ''
    },
  ]  

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-2xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="mt-2 text-xs text-gray-500">
                Tools: {project.tools.join(', ')}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-3 inline-block text-blue-500 hover:underline text-sm"
                >
                  View More
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
