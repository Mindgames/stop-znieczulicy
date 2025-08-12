import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-500">Nasza Misja i Cele</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-10 transition-all duration-500 hover:w-32"></div>
          
          <p className="text-base max-w-4xl mx-auto leading-relaxed text-gray-700 text-center mb-6 transition-all duration-500">
            Kampania ma charakter oddolny i powstała jako odpowiedź na liczne przypadki obojętności wobec przemocy, które obserwujemy zarówno w Polsce, jak i na świecie. To, co dzieje się na naszych oczach – i zbyt często pozostaje bez żadnej odpowiedzi – pokazuje, jak poważnym problemem jest bierność świadków. Celem naszej inicjatywy jest edukacja w zakresie skutecznych, a zarazem bezpiecznych sposobów reagowania w sytuacjach zagrożenia oraz uświadamianie, jak ogromne konsekwencje niesie za sobą brak działania.
          </p>
          
          <p className="text-base max-w-4xl mx-auto leading-relaxed text-gray-700 text-center mb-6 transition-all duration-500">
            <span className="text-red-500 font-medium">Znieczulica to zanik więzi społecznych.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-500 hover-lift animate-slide-in-left">
            <div className="bg-red-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-200 hover-scale">
              <Heart className="text-red-500 transition-all duration-300" size={32} />
            </div>
            <h3 className="text-base font-bold mb-3 transition-all duration-300">Usłysz: wykłady edukacyjne</h3>
            <p className="text-sm text-gray-600 text-center transition-all duration-300">
              Wykładowcy Uniwersytetu Civitas, SWPS i Uniwersytetu Warszawskiego wyjaśnią, dlaczego tak często nie reagujemy, choć powinniśmy - oraz jak sobie z tym radzić. Czy stereotypy mają wpływ na podejmowane przez nas decyzje?
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-500 hover-lift animate-scale-in">
            <div className="bg-red-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-200 hover-scale">
              <Shield className="text-red-500 transition-all duration-300" size={32} />
            </div>
            <h3 className="text-base font-bold mb-3 transition-all duration-300">Zrozum: wykłady ekspertów</h3>
            <p className="text-sm text-gray-600 text-center transition-all duration-300">
              O perspektywie ofiar, PTSD i pierwszej pomocy emocjonalnej opowie doświadczona psychoterapeutka. Usłyszymy też głos kuratorki sądowej, która przybliży temat przemocy w rodzinie i przedstawi swoją perspektywę.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-500 hover-lift animate-slide-in-right">
            <div className="bg-red-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-200 hover-scale">
              <Users className="text-red-500 transition-all duration-300" size={32} />
            </div>
            <h3 className="text-base font-bold mb-3 transition-all duration-300">Działaj: szkolenia</h3>
            <p className="text-sm text-gray-600 text-center transition-all duration-300">
              Podczas wydarzenia odbędzie się dwudniowe szkolenie z pierwszej pomocy dzięki Wyszkoleni.com oraz praktyczne zajęcia z samoobrony dla chętnych. Wiedzę o bezpiecznym reagowaniu w sytuacjach zagrożenia przekażą także funkcjonariusze Komendy Stołecznej Policji podczas specjalnych wykładów i warsztatów.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;