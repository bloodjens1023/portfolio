import React from 'react';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from "motion/react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Jenny Fandresena</h3>
            <p className="text-gray-400">Développeur Web</p>
          </div>
          
          <div className="flex space-x-6">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            href="https://github.com/bloodjens1023" className="hover:text-blue-400 transition-colors" target='blank'>
              <Github size={24} />
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com/bloodjens1023/" className="hover:text-blue-400 transition-colors" target='blank'>
              <Facebook size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            href="mailto:bloodjens32@gmail.com" className="hover:text-blue-400 transition-colors" target='blank'>
              <Mail size={24} />
            </motion.a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jenny Fandresena. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;