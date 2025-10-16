import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { partners } from '../utils/data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PartnerDetails: React.FC = () => {
  const { id } = useParams();
  const partner = partners.find(p => p.id === Number(id));

  const getPartnerLink = (partner) => {

    const url = partner.url? partner.url : '';
    const urlName = (partner.urlName && partner.urlName.length > 0? (partner.urlName) : (partner.url.includes('https://')? (partner.url.split('https://')[1].split('/')[0]) : (partner.url.split('/')[0])));

    if(partner.url && partner.url.length > 0)
      return (<a href={url} target='_blank' className='inline-flex items-center text-red-500 hover:text-red-600'>{urlName}<ArrowRight size={20} className="ml-2" /></a>);
    else return (<></>);
  }

  if (!partner) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-center">Partner nie został znaleziony</h1>
          <div className="text-center mt-4">
            <Link to="/" className="text-red-500 hover:text-red-600">
              Wróć do strony głównej
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/#partnerzy" 
            className="inline-flex items-center text-red-500 hover:text-red-600 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Powrót do strony głównej
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-center mb-8">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-32 object-contain"
                />
              </div>
              
              <h1 className="text-3xl font-bold text-center mb-6">{partner.name}</h1>
              
              {partner.fullDescription ? (
                <div className="prose max-w-none">
                  {partner.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700">{partner.description}</p>
              )}
              <br></br>
              {getPartnerLink(partner)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
