import React from 'react';
import { Link } from 'react-router-dom';

const MoreMaterialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Chcesz więcej materiałów?
              </h2>
              <p className="text-base text-gray-700">
                Wypełnij formularz rejestracyjny, aby otrzymywać dostęp do wszystkich naszych materiałów dla aktywistów i edukatorów.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Link 
                to="/registration" 
                className="inline-block bg-red-500 hover:bg-red-600 text-white text-base px-6 py-3 rounded-full font-medium transition-colors transform hover:scale-105"
              >
                Zarejestruj się
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreMaterialsSection;