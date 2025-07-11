import { Language, useTranslation } from "@/lib/i18n";
import projectsImage from "@/assets/projects-grid.jpg";

interface ProjectsSectionProps {
  currentLang: Language;
}

export function ProjectsSection({ currentLang }: ProjectsSectionProps) {
  const t = useTranslation(currentLang);

  // Sample project data
  const projects = [
    { id: 1, category: "Residential" },
    { id: 2, category: "Commercial" },
    { id: 3, category: "Interior" },
    { id: 4, category: "Industrial" },
    { id: 5, category: "Renovation" },
    { id: 6, category: "Infrastructure" }
  ];

  return (
    <section id="projects" className="py-20 bg-construction-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-px bg-primary mr-3"></div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Portfolio
            </span>
            <div className="w-8 h-px bg-primary ml-3"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t.projects.title}
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium">
            All
          </button>
          <button className="bg-white text-foreground px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Building
          </button>
          <button className="bg-white text-foreground px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Interior
          </button>
          <button className="bg-white text-foreground px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Renovation
          </button>
          <button className="bg-white text-foreground px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Architecture
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured project */}
          <div className="md:col-span-2 md:row-span-2">
            <div 
              className="h-96 md:h-full bg-cover bg-center rounded-lg shadow-lg group overflow-hidden relative"
              style={{ backgroundImage: `url(${projectsImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">Residential Complex</h3>
                <p className="text-sm">Modern living spaces</p>
              </div>
            </div>
          </div>

          {/* Regular project items */}
          {projects.slice(0, 4).map((project) => (
            <div key={project.id}>
              <div 
                className="h-48 bg-cover bg-center rounded-lg shadow-lg group overflow-hidden relative"
                style={{ backgroundImage: `url(${projectsImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">{project.category} Project</h3>
                  <p className="text-sm">Professional construction</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}