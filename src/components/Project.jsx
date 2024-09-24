import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="m-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 relative">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-16 rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 hover:opacity-100"
              style={{ width: '63%', height: '70%', margin: 'auto',bottom: '30%',right: '100%', borderRadius: '8px' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-white"
                >
                  GitHub
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-white"
                >
                  Website
                </a>
              </div>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
