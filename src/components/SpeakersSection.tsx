import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

import { speakers } from "../utils/data";

const SpeakersSection: React.FC = () => {
  const [expandedSpeakers, setExpandedSpeakers] = useState<number[]>([]);

  const toggleDescription = (speakerId: number) => {
    setExpandedSpeakers((prev) =>
      prev.includes(speakerId)
        ? prev.filter((id) => id !== speakerId)
        : [...prev, speakerId]
    );
  };

  const parseDescription = (speaker) => {
    if (speaker.link) {
      const before = speaker.description.split(speaker.link.text)[0];
      const after = speaker.description.split(speaker.link.text)[1];
      return (
        <>
          {before}
          <a
            href={speaker.link.url}
            target="_blank"
            className="mt-2 text-red-500"
          >
            {speaker.link.text}
          </a>
          {after}
        </>
      );
    } else return speaker.description;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-500">
            Nasi Prelegenci
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-10 transition-all duration-500 hover:w-32"></div>
          <p className="text-base max-w-4xl mx-auto leading-relaxed text-gray-700 transition-all duration-500">
            Poznaj ekspertów, którzy dzielą się swoją wiedzą i doświadczeniem w
            ramach kampanii.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 relative flex flex-col hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="relative overflow-hidden bg-gray-100 flex items-center justify-center transition-all duration-500"
                style={{ minHeight: "200px" }}
              >
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-base font-bold mb-2 transition-all duration-300">
                  {speaker.name}
                </h3>
                <p className="text-xs text-red-500 font-medium mb-3 transition-all duration-300">
                  {speaker.title}
                </p>
                {speaker.description && (
                  <div className="relative">
                    <div
                      className={`text-gray-600 overflow-hidden transition-all duration-500 ${
                        expandedSpeakers.includes(speaker.id)
                          ? "max-h-[1000px]"
                          : "max-h-24"
                      }`}
                    >
                      <p
                        className={`text-xs ${
                          expandedSpeakers.includes(speaker.id)
                            ? ""
                            : "line-clamp-3"
                        }`}
                      >
                        {parseDescription(speaker)}
                      </p>
                    </div>
                    {speaker.description && (
                      <button
                        onClick={() => toggleDescription(speaker.id)}
                        className="mt-2 text-red-500 hover:text-red-600 text-xs font-medium flex items-center transition-all duration-300 hover-scale"
                      >
                        {expandedSpeakers.includes(speaker.id) ? (
                          <>
                            Zwiń
                            <ChevronUp
                              size={14}
                              className="ml-1 transition-transform duration-300"
                            />
                          </>
                        ) : (
                          <>
                            Rozwiń
                            <ChevronDown
                              size={14}
                              className="ml-1 transition-transform duration-300"
                            />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
