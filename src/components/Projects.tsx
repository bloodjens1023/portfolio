import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'Digitalisation de la Délivrance de la CNI',
    description: 'Une plateforme conçue pour simplifier et digitaliser le processus de délivrance des Cartes Nationales d\'Identité (CNI). Le système permet une demande en ligne, la vérification des informations et le suivi de la livraison.',
    image: 'https://actu.orange.mg/media/2022/08/cin.jpg',
    technologies: ['Svelte', 'Django', 'SQLite'],
    githubLink: 'https://github.com/bloodjens1023/local_identite.git',
    liveLink: '#'
  },
  {
    title: 'Gestion de Bibliothèque - Lycée Saint Pierre Malaza',
    description: 'Une plateforme de gestion de bibliothèque numérique pour le Lycée Saint Pierre Malaza. Le système permet aux élèves et au personnel de gérer les prêts de livres, les retours, et de consulter le catalogue en ligne.',
    image: 'https://goethe-tana.de/wp-content/uploads/2019/12/BIB2.jpg',
    technologies: ['Python', 'PyQT', 'MySql'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site web portfolio moderne et responsive présentant mes projets et compétences.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubLink: '#',
    liveLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0 , y:100}}
            whileInView={{ opacity: 1 , y:0}}
            transition={{ duration: 2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;