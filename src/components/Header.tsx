import React from 'react';
import { Menu, X, Github, Mail, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">Jenny Fandresena</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#apropos" className="hover:text-blue-600 transition-colors">À propos</a>
            <a href="#competences" className="hover:text-blue-600 transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-blue-600 transition-colors">Projets</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/bloodjens1023" className="hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.facebook.com/bloodjens1023/" className="hover:text-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="mailto:bloodjens32@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil"  className="hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#apropos"  className="hover:text-blue-600 transition-colors">À propos</a>
              <a href="#competences"  className="hover:text-blue-600 transition-colors">Compétences</a>
              <a href="#projets"  className="hover:text-blue-600 transition-colors">Projets</a>
              <a href="#contact"  className="hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;