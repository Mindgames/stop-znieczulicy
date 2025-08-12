import React from 'react';
import { 
  Megaphone, Phone, Heart, Shield, Eye
} from 'lucide-react';
import { tips } from '../utils/data';

const TipsSection: React.FC = () => {
  const renderIcon = (iconName: string, size = 36) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone size={size} className="text-red-500 transition-all duration-300" />;
      case 'Phone':
        return <Phone size={size} className="text-red-500 transition-all duration-300" />;
      case 'Heart':
        return <Heart size={size} className="text-red-500 transition-all duration-300" />;
      case 'Shield':
        return <Shield size={size} className="text-red-500 transition-all duration-300" />;
      case 'Eye':
        return <Eye size={size} className="text-red-500 transition-all duration-300" />;
      default:
        return <Megaphone size={size} className="text-red-500 transition-all duration-300" />;
    }
  };

  return (
    <section id="tips" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-500">
            Praktyczne wskazówki: Jak reagować?
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-10 transition-all duration-500 hover:w-32"></div>
          <p className="text-base max-w-4xl mx-auto leading-relaxed text-gray-700 transition-all duration-500">
            Reagowanie na przemoc wymaga rozwagi i bezpieczeństwa. Poniższe wskazówki 
            pomogą Ci działać skutecznie, nie narażając siebie na niebezpieczeństwo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={tip.id} 
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-red-100 w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-200 hover-scale">
                {renderIcon(tip.icon)}
              </div>
              
              <h3 className="text-base font-semibold mb-3 transition-all duration-300">{tip.title}</h3>
              
              <p className="text-xs text-gray-600 leading-relaxed transition-all duration-300">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;