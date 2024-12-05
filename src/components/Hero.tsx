import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';



const Hero = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: 650, // 10 cm équivaut à environ 100 pixels (ajuste selon la résolution)
      behavior: 'smooth', // Défilement fluide
    });
  };
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            RAKOTOHASIMBOLA Hasiniaina Jenny Fandresena
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Développeur Web | Diplômée en Informatique
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="mailto:bloodjens32@gmail.com?subject=Demande d'information&body=Bonjour,%20je%20souhaite%20obtenir%20des%20informations%20concernant%20votre%20produit.%20Merci."
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              target='blank'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Me Contacter
            </motion.a>
            <motion.a
              href="https://github.com/bloodjens1023"
              className="cursor-pointer border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
              target='blank'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes projets
            </motion.a>
          </div>
          <div className="mt-16 animate-bounce cursor-pointer" onClick={scrollDown}>
            <ArrowDown className="mx-auto text-blue-600" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;