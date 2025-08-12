import React, { useEffect } from 'react';
import RegistrationForms from '../components/RegistrationForms';

const Registration: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Rejestracja - Stop Znieczulicy na Ulicy';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-2xl font-bold mb-4">Dołącz do nas</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-10"></div>
          <p className="text-base max-w-3xl mx-auto leading-relaxed text-gray-700">
            Wybierz sposób, w jaki chcesz się zaangażować w kampanię "Stop Znieczulicy na Ulicy". 
            Razem możemy zbudować bardziej wrażliwe społeczeństwo.
          </p>
        </div>
        
        <RegistrationForms />
      </div>
    </div>
  );
};

export default Registration;