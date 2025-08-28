import React, { useEffect } from 'react';
import HelpContacts from '../components/HelpContacts';

const Help: React.FC = () => {
  useEffect(() => {
    document.title = 'Gdzie szukać pomocy - Stop Znieczulicy na Ulicy';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-xl md:text-2xl font-bold mb-4">Gdzie szukać pomocy</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <HelpContacts />
        </div>
      </div>
    </div>
  );
};

export default Help;

