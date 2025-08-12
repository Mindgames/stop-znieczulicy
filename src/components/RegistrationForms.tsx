import React, { useState } from 'react';
import { Check, ChevronDown, CalendarDays, Users, Building } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  gdprConsent: boolean;
}

type FormType = 'event' | 'volunteer' | 'partner';

const RegistrationForms: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const eventId = query.get('event');

  // Set initial form type based on URL parameter
  const initialFormType: FormType = eventId ? 'event' : 'volunteer';
  
  const [activeForm, setActiveForm] = useState<FormType>(initialFormType);
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    message: '',
    gdprConsent: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormValues]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
    
    // Clear error when user checks the box
    if (errors[name as keyof FormValues]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormValues> = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Podaj poprawny adres email';
    }
    
    if (!formValues.gdprConsent) {
      newErrors.gdprConsent = 'Musisz wyrazić zgodę na przetwarzanie danych';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, this is where you would send the data to your backend

      fetch('https://stop-znieczulicy.pl/class_registration.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          message: formValues.message,
          gdpr_consent: formValues.gdprConsent
        })
      }).then(response => response.text()).then(data => alert(data));
      
      setFormSubmitted(true);
      
      // Reset form after submission
      setFormValues({
        name: '',
        email: '',
        phone: '',
        message: '',
        gdprConsent: false
      });
    }
  };

  const getFormTitle = () => {
    switch (activeForm) {
      case 'event':
        return 'Zapisz się na wydarzenie';
      case 'volunteer':
        return 'Zostań wolontariuszem';
      case 'partner':
        return 'Zostań partnerem lub sponsorem';
      default:
        return 'Formularz rejestracyjny';
    }
  };

  const getFormIcon = (formType: FormType) => {
    switch (formType) {
      case 'event':
        return <CalendarDays size={24} className="text-green-500 transition-all duration-300" />;
      case 'volunteer':
        return <Users size={24} className="text-orange-500 transition-all duration-300" />;
      case 'partner':
        return <Building size={24} className="text-blue-500 transition-all duration-300" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 animate-scale-in">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Form Type Selection */}
          <div 
            className={`p-4 md:p-6 cursor-pointer flex items-center transition-all duration-300 ${activeForm === 'event' ? 'bg-green-50' : 'bg-white hover:bg-gray-50'}`}
            onClick={() => setActiveForm('event')}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${activeForm === 'event' ? 'bg-green-100' : 'bg-gray-100'}`}>
              <CalendarDays size={20} className={`transition-all duration-300 ${activeForm === 'event' ? 'text-green-500' : 'text-gray-500'}`} />
            </div>
            <div>
              <h3 className={`font-semibold transition-all duration-300 ${activeForm === 'event' ? 'text-green-700' : 'text-gray-700'}`}>
                Zapisz się na wydarzenie
              </h3>
            </div>
            {activeForm === 'event' && (
              <div className="ml-auto">
                <Check size={20} className="text-green-500 transition-all duration-300" />
              </div>
            )}
          </div>
          
          <div 
            className={`p-4 md:p-6 cursor-pointer flex items-center transition-all duration-300 ${activeForm === 'volunteer' ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
            onClick={() => setActiveForm('volunteer')}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${activeForm === 'volunteer' ? 'bg-orange-100' : 'bg-gray-100'}`}>
              <Users size={20} className={`transition-all duration-300 ${activeForm === 'volunteer' ? 'text-orange-500' : 'text-gray-500'}`} />
            </div>
            <div>
              <h3 className={`font-semibold transition-all duration-300 ${activeForm === 'volunteer' ? 'text-orange-700' : 'text-gray-700'}`}>
                Zostań wolontariuszem
              </h3>
            </div>
            {activeForm === 'volunteer' && (
              <div className="ml-auto">
                <Check size={20} className="text-orange-500 transition-all duration-300" />
              </div>
            )}
          </div>
          
          <div 
            className={`p-4 md:p-6 cursor-pointer flex items-center transition-all duration-300 ${activeForm === 'partner' ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'}`}
            onClick={() => setActiveForm('partner')}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${activeForm === 'partner' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <Building size={20} className={`transition-all duration-300 ${activeForm === 'partner' ? 'text-blue-500' : 'text-gray-500'}`} />
            </div>
            <div>
              <h3 className={`font-semibold transition-all duration-300 ${activeForm === 'partner' ? 'text-blue-700' : 'text-gray-700'}`}>
                Zostań partnerem
              </h3>
            </div>
            {activeForm === 'partner' && (
              <div className="ml-auto">
                <Check size={20} className="text-blue-500 transition-all duration-300" />
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          {formSubmitted ? (
            <div className="text-center py-8 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4 transition-all duration-300">
                <Check size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-2 transition-all duration-300">Dziękujemy za rejestrację!</h3>
              <p className="text-gray-600 mb-6 transition-all duration-300">
                Twoje zgłoszenie zostało przyjęte. Wkrótce skontaktujemy się z Tobą.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full transition-all duration-300 hover-scale"
              >
                Wypełnij ponownie
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center mb-8 animate-fade-in">
                {getFormIcon(activeForm)}
                <h2 className="text-lg font-bold ml-2 transition-all duration-300">{getFormTitle()}</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="animate-fade-in">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-xs font-medium mb-2 transition-all duration-300">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-100'
                    }`}
                    placeholder="Jan Kowalski"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 transition-all duration-300">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-xs font-medium mb-2 transition-all duration-300">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-red-100'
                    }`}
                    placeholder="jan.kowalski@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 transition-all duration-300">{errors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 text-xs font-medium mb-2 transition-all duration-300">
                    Telefon (opcjonalnie)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-100 transition-all duration-300"
                    placeholder="+48 123 456 789"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-xs font-medium mb-2 transition-all duration-300">
                    Wiadomość / komentarz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-100 transition-all duration-300"
                    placeholder="Twoja wiadomość..."
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="gdprConsent"
                        name="gdprConsent"
                        checked={formValues.gdprConsent}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      />
                    </div>
                    <label htmlFor="gdprConsent" className="ml-2 text-xs text-gray-600 transition-all duration-300">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności (RODO).
                    </label>
                  </div>
                  {errors.gdprConsent && (
                    <p className="text-red-500 text-xs mt-1 transition-all duration-300">{errors.gdprConsent}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-2 rounded-md text-white text-xs font-semibold transition-all duration-300 hover-lift hover:shadow-lg transform hover:scale-105 ${
                    activeForm === 'event' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : activeForm === 'volunteer'
                        ? 'bg-orange-500 hover:bg-orange-600'
                        : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  Wyślij formularz
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForms;