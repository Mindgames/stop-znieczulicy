import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-500">
            Nasza Misja i Cele
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-10 transition-all duration-500 hover:w-32"></div>
          
          <p className="text-base max-w-4xl mx-auto leading-relaxed text-gray-700 text-center mb-6 transition-all duration-500">
            Pierwsza edycja kampanii odbyła się we wrześniu 2025 roku jako oddolna inicjatywa społeczna. Powstała w odpowiedzi na narastający problem obojętności wobec przemocy i braku reakcji świadków. Naszym celem było i nadal jest edukowanie, jak reagować skutecznie i bezpiecznie w sytuacjach zagrożenia oraz uświadamianie, jak duże konsekwencje niesie za sobą brak działania.
          </p>
          
          <p className="text-base max-w-4xl mx-auto leading-relaxed text-gray-700 text-center mb-6 transition-all duration-500">
            <span className="text-red-500 font-medium">
              Dziś kontynuujemy tę misję, pracując nad założeniem fundacji, która pozwoli nam rozwijać działania rozpoczęte podczas kampanii – prowadzić warsztaty, wspierać inicjatywy lokalne i budować kulturę empatii oraz odpowiedzialności społecznej.
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-transform duration-500 hover:-translate-y-1">
            <div className="bg-red-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-red-200 hover:scale-105">
              <Heart className="text-red-500" size={32} />
            </div>
            <h3 className="text-base font-bold mb-3">Usłysz: wykłady edukacyjne</h3>
            <p className="text-sm text-gray-600 text-center">
              Wykładowcy Uniwersytetu Civitas, SWPS i Uniwersytetu Warszawskiego wyjaśniają, dlaczego tak często nie reagujemy, choć powinniśmy, i jak można to zmienić.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-transform duration-500 hover:-translate-y-1">
            <div className="bg-red-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-red-200 hover:scale-105">
              <Shield className="text-red-500" size={32} />
            </div>
            <h3 className="text-base font-bold mb-3">Zrozum: wykłady ekspertów</h3>
            <p className="text-sm text-gray-600 text-center">
              Psychoterapeutka opowie o perspektywie ofiar i pierwszej pomocy emocjonalnej, a kuratorka sądowa przybliży temat przemocy domowej.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-transform duration-500 hover:-translate-y-1">
            <div className="bg-red-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-red-200 hover:scale-105">
              <Users className="text-red-500" size={32} />
            </div>
            <h3 className="text-base font-bold mb-3">Działaj: szkolenia</h3>
            <p className="text-sm text-gray-600 text-center">
              Szkolenia z pierwszej pomocy i samoobrony oraz warsztaty z funkcjonariuszami Policji uczą, jak reagować bezpiecznie i skutecznie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
