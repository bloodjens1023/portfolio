import React from 'react';
import { Calendar, Code2 } from 'lucide-react';
import Education from './Education';
import imgs from '../../public/photo.jpg';
import { motion } from 'motion/react';

const About = () => {
  const profileImage = imgs;

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">À Propos de Moi</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
            className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg"
            
            initial={{ opacity: 0, x:100}}
            whileInView={{ opacity: 1, x:0}}
            transition={{ duration: 2 }}
            >
              <img
                src={profileImage}
                alt="Jenny Fandresena"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">RAKOTOHASIMBOLA Hasiniaina Jenny Fandresena</h3>
              <p className="text-gray-600">Développeur Web Full Stack</p>
            </div>
          </div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 , y:100}}
            whileInView={{ opacity: 1 , y:0}}
            transition={{ duration: 2 }}
          >
            <Education />

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expérience</h3>
                <p className="text-gray-600">
                  21 ans, passionnée par le développement web et les nouvelles technologies
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code2 className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-gray-600">
                  Spécialisée dans le développement web full-stack avec une passion pour la création d'interfaces utilisateur modernes et intuitives
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;