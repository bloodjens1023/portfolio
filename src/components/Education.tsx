import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from "motion/react"

const educationData = [
  {
    title: "Licence en Informatique",
    year: "2024",
    institution: "Université ESMIA"
  },
  {
    title: "Baccalauréat",
    year: "2019",
    institution: "Lycée Saint Pièrre Malaza"
  }
];

const Education = () => {
  return (
    <motion.div className="space-y-6" 
    >
      {educationData.map((education, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <GraduationCap className="text-blue-600" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">{education.title}</h3>
            <p className="text-gray-600">{education.institution}</p>
            <p className="text-gray-500 text-sm">{education.year}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Education;