import React from 'react';
import { Download, FileText, Presentation as FilePresentation } from 'lucide-react';
import { materials } from '../utils/data';

const DownloadsSection: React.FC = () => {
  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.pdf')) {
      return <FileText size={24} className="text-red-500 transition-all duration-300" />;
    } else if (fileName.endsWith('.pptx')) {
      return <FilePresentation size={24} className="text-red-500 transition-all duration-300" />;
    } else {
      return <FileText size={24} className="text-red-500 transition-all duration-300" />;
    }
  };

  return (
    <section id="downloads" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-500">
            Materiały do pobrania
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-10 transition-all duration-500 hover:w-32"></div>
          <p className="text-base max-w-4xl mx-auto leading-relaxed text-gray-700 transition-all duration-500">
            Pobierz nasze materiały edukacyjne i pomóż szerzyć wiedzę o reagowaniu 
            na przemoc i niebezpieczne sytuacje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <div 
              key={material.id} 
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-full hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  {getFileIcon(material.fileName)}
                  <h3 className="text-sm font-semibold ml-2 transition-all duration-300">{material.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-xs transition-all duration-300">
                  {material.description}
                </p>
              </div>
              
              <div className="p-6 pt-0">
                <a 
                  href={material.downloadUrl} 
                  className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-xs transition-all duration-300 w-full hover-lift hover:shadow-lg transform hover:scale-105"
                  download
                >
                  <Download size={14} className="mr-2 transition-all duration-300" />
                  Pobierz
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;