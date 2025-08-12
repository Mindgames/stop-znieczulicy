import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { partners } from "../utils/data";

const PartnersSection: React.FC = () => {
  return (
    <section id="partnerzy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-500">
            Nasi Partnerzy
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-10 transition-all duration-500 hover:w-32"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 hover-lift animate-scale-in flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Logo section - fixed height */}
              <div className="h-16 md:h-20 flex items-center justify-center mb-2 md:mb-3 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 md:max-h-14 max-w-full object-contain transition-all duration-300 hover-scale"
                />
              </div>

              {/* Title section - responsive height with smaller text on mobile */}
              <div className="min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center mb-2">
                <h3 className="text-center text-xs md:text-sm font-medium transition-all duration-300 leading-tight px-1 md:px-2">
                  {partner.name}
                </h3>
              </div>

              {/* Description section - flexible height with minimum, smaller text on mobile */}
              <div className="flex-grow mb-2 md:mb-3">
                <p className="text-xs text-gray-600 transition-all duration-300 line-clamp-2 md:line-clamp-3 text-center leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Button section - fixed at bottom */}
              <div className="mt-auto">
                {partner.fullDescription ? (
                  <div className="text-center">
                    <Link
                      to={`/partner/${partner.id}`}
                      className="inline-flex items-center text-red-500 hover:text-red-600 text-xs font-medium transition-all duration-300 hover-scale"
                    >
                      Zobacz więcej
                      <ChevronRight
                        size={12}
                        className="ml-1 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="h-4 md:h-5"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
