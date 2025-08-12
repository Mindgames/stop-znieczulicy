import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import EventsSection from '../components/EventsSection';
import TipsSection from '../components/TipsSection';
import PartnersSection from '../components/PartnersSection';
import CommunitySection from '../components/CommunitySection';
import SpeakersSection from '../components/SpeakersSection';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for the fixed header
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    // Set page title
    document.title = 'Stop Znieczulicy na Ulicy - Kampania Społeczna';
  }, []);

  return (
    <div>
      <HeroSection />
      <MissionSection />
      <EventsSection />
      <SpeakersSection />
      <TipsSection />
      <PartnersSection />
      <CommunitySection />
    </div>
  );
};

export default Home;