import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const mission = document.getElementById('mission');
    if (mission) {
      mission.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-0 transition-opacity duration-1000"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transform scale-105 transition-transform duration-1000 hover:scale-110"
        style={{ 
          backgroundImage: "url('/hero_2.jpg')",
          backgroundBlendMode: "overlay",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 text-center pt-32 animate-fade-in">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight animate-slide-in-left">
          Wysłuchaj nas i zrozum problem,<br />
          zanim to spotka <span className="text-red-500">kogoś, kogo kochasz.</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg mb-6 max-w-4xl mx-auto animate-slide-in-right">
          Celem kampanii STOP znieczulicy na ulicy jest uświadomienie, dlaczego tak często odwracamy wzrok, gdy ktoś potrzebuje pomocy, oraz pokazanie, co możemy zrobić, by to zmienić. Wyjaśnimy, jak reagować mądrze i bezpiecznie, budując poczucie wspólnej sprawy. To może być Twoja siostra, brat, czy rodzic.<br></br><span className="font-bold">Wiedza daje siłę, a reakcja życie.</span>
        </p>

        <p className="text-xs sm:text-sm mb-8 max-w-3xl mx-auto italic text-gray-300 animate-scale-in">
          Kampanię dedykujemy Lizie, do której pomoc nie dotarła na czas.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-scale-in">
          <Link 
            to="/#tips" 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover-lift"
          >
            Zobacz, jak pomóc
          </Link>
          <a 
            href="https://www.facebook.com/profile.php?id=61579932839803" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover-lift"
          >
            Facebook
          </a>
        </div>
        
        <button 
          onClick={scrollToNextSection}
          className="animate-bounce bg-transparent rounded-full p-2 border border-white/30 hover:border-white/60 transition-all duration-300 hover:bg-white/10 hover-scale"
          aria-label="Przewiń w dół"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
