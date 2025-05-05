// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#FFF8F0] text-[#1D1D1D] min-h-screen">
      <Head>
        <title>Your Portfolio</title>
        <meta name="description" content="Digital Art Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#FFF8F0] shadow-md z-50 py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#E63946]">Mr JK</h1>
        <ul className="flex gap-6 font-medium">
          <li><a href="#about" className="hover:text-[#E63946]">About</a></li>
          <li><a href="#projects" className="hover:text-[#E63946]">Projects</a></li>  
          <a href="#contact" className="hover:text-[#E63946] transition">Contact</a>

        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-screen px-4 pt-20">
        <h2 className="text-5xl md:text-6xl font-bold text-[#E63946]">Welcome to My Portfolio</h2>
        <p className="text-lg mt-4">Made with passion</p>
        <button className="mt-6 bg-[#F4A261] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e98b3b]">Explore</button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src="/ChatGPT Image May 3, 2025, 12_06_09 PM.png" alt="Profile" className="rounded-2xl shadow-md w-full h-auto" />
          <div>
            <h3 className="text-3xl font-bold text-[#E63946] mb-4">About Me</h3>
            <p className="mb-4 text-lg">I&apos;m a passionate digital artist focused on creating expressive and meaningful visual stories. With a background in design and years of experimentation, I blend creativity with technical skills to bring ideas to life.</p>
            <h4 className="text-xl font-semibold mt-6 mb-2">Skills:</h4>
            <ul className="list-disc list-inside">
              <li>Digital Illustration</li>
              <li>Photoshop, Krita, Procreate</li>
              <li>UI/UX Design</li>
              <li>Next.js, Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
<section id="projects" className="bg-[#FFF8F0] text-[#1D1D1D] py-20 px-5">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10 text-[#E63946]">My Projects</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Project 1 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <img src="/projects/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-sm text-gray-600 mb-4">A personal digital portfolio to showcase my work, built with Next.js and Tailwind CSS.</p>
          <a href="https://yourprojectlink.com" target="_blank" className="text-[#E63946] font-medium hover:underline">
            View Project →
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <img src="/projects/project2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">Illustration Gallery</h3>
          <p className="text-sm text-gray-600 mb-4">A web gallery of my digital illustrations, with category filters and animations.</p>
          <a href="https://yourillustrationlink.com" target="_blank" className="text-[#E63946] font-medium hover:underline">
            View Project →
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <img src="/projects/project3.jpg" alt="Project 3" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">NLP Sentiment App</h3>
          <p className="text-sm text-gray-600 mb-4">A final-year project that analyzes text sentiment using Natural Language Processing.</p>
          <a href="https://github.com/yourrepo" target="_blank" className="text-[#E63946] font-medium hover:underline">
            View Project →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#FFF8F0] text-[#1D1D1D]">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
    <p className="mb-8 text-lg">
      Whether you have a project in mind, want to collaborate, or just want to say hi —
      my inbox is always open.
    </p>
    <a
      href="mailto:youremail@example.com"
      className="inline-block bg-[#E63946] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#d62828] transition"
    >
      Send Email
    </a>
    <div className="mt-10 flex justify-center gap-6 text-2xl">
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63946] transition">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63946] transition">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63946] transition">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63946] transition">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}