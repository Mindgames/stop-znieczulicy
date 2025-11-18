import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-slide-in-left">
            <h3 className="text-base font-bold mb-3 transition-all duration-300">STOP znieczulicy na ulicy</h3>
            <p className="text-sm text-gray-300 mb-3 transition-all duration-300">
              Uniwersytet Civitas<br />
              Plac Defilad 1, 12 piętro PKiN<br />
              * lokalizacja przyjazna dla osób z niepełnosprawnościami.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/uniwersytetcivitas" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all duration-300 hover-scale">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/stop_znieczulicy_kampania/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all duration-300 hover-scale">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/user/CollegiumCivitasCC" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all duration-300 hover-scale">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <h3 className="text-base font-bold mb-3 transition-all duration-300">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-xs text-gray-300 hover:text-red-500 transition-all duration-300 hover-scale">Strona główna</Link>
              </li>
              <li>
                <Link to="/#mission" className="text-xs text-gray-300 hover:text-red-500 transition-all duration-300 hover-scale">O kampanii</Link>
              </li>
              <li>
                <Link to="/#events" className="text-xs text-gray-300 hover:text-red-500 transition-all duration-300 hover-scale">Wydarzenia</Link>
              </li>
              <li>
                <Link to="/#tips" className="text-xs text-gray-300 hover:text-red-500 transition-all duration-300 hover-scale">Jak reagować</Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-slide-in-right">
            <h3 className="text-base font-bold mb-3 transition-all duration-300">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={16} className="text-red-500 mr-2 transition-all duration-300" />
                <a href="mailto:kontakt@stop-znieczulicy.pl" className="text-xs text-gray-300 hover:text-red-500 transition-all duration-300 hover-scale">
                  kontakt@stop-znieczulicy.pl
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-red-500 mr-2 transition-all duration-300" />
                <a href="tel:+48513878407" className="text-xs text-gray-300 hover:text-red-500 transition-all duration-300 hover-scale">
                  513 878 407
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 animate-fade-in">
          <p className="text-xs transition-all duration-300">&copy; {new Date().getFullYear()} STOP znieczulicy na ulicy. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
