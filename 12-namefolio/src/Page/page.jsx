import React from "react";

function Page() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description:
        "A personal portfolio website to showcase skills, projects, and resume.",
    },
    {
      id: 2,
      name: "E-Commerce App",
      description:
        "An online shopping application with cart, payment, and order tracking features.",
    },
    {
      id: 3,
      name: "Chat Application",
      description:
        "A real-time chat app with user authentication and group messaging.",
    },
    {
      id: 4,
      name: "Task Manager",
      description:
        "A task management tool for creating, updating, and tracking daily tasks.",
    },
    {
      id: 5,
      name: "Weather App",
      description:
        "An app that fetches live weather updates and forecasts using an API.",
    },
    {
      id: 6,
      name: "Blog Platform",
      description:
        "A blogging system where users can create, edit, and comment on posts.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 center">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-start">
        <div className="md:col-span-2">
          <img
            src="https://media.istockphoto.com/id/1352604610/photo/young-woman-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=Svx2qeNGoE8RLoSVKTVK1IKq4lw8MxyBWW0L8p1r-7k="
            alt="profile"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">Nikita Rajput</h2>
            <p className="text-gray-600 text-sm">Software Developer</p>
            <p className="text-gray-700 text-sm mt-1">
              nikitarajput0107@email.com
            </p>
            <p className="text-gray-700 text-sm">+91 99992 73722</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl md:col-span-4 shadow space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a dedicated Software Developer with strong skills in Java,
              Python, C++, JavaScript, React, Node.js, and SQL. I have worked on
              projects including web applications, database systems, and
              automation tools, focusing on clean code and efficient solutions.
              With knowledge of SDLC, Agile, and Software Testing, I aim to build
              scalable, user-friendly, and innovative software that solves
              real-world problems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-cyan-100 p-4 rounded-lg shadow hover:shadow-lg transition border"
                >
                  <h3 className="text-lg font-bold text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
