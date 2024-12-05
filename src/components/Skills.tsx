import { motion } from 'motion/react';
import React from 'react';

const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
  backend: ['DJango', 'Node.Js', 'Python', 'SQL', 'Postgres'],
  tools: ['Git', 'VS Code', 'Docker', 'Figma', 'Postman']
};

const Skills = () => {
  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 , y:100}}
            whileInView={{ opacity: 1 , y:0}}
            transition={{ duration: 2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  whileDrag={{ scale: 0.9, rotate: 10 }}
                  drag
                  
                  
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  whileDrag={{ scale: 0.9, rotate: 10 }}
                  drag
                  className="px-3 py-1 bg-red-50 text-blue-600 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 , y:-100}}
          whileInView={{ opacity: 1 , y:0}}
          transition={{ duration: 2 }}
          
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Outils</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-green-50 text-blue-600 rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  whileDrag={{ scale: 1, rotate: 20 }}
                  drag
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;