import { Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import React, { useState } from "react";

const EventsSection: React.FC = () => {
  const [expandedLectures, setExpandedLectures] = useState<string[]>([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ageConfirmation: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const toggleLecture = (lectureId: string) => {
    setExpandedLectures((prev) =>
      prev.includes(lectureId)
        ? prev.filter((id) => id !== lectureId)
        : [...prev, lectureId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "Imię jest wymagane";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Nazwisko jest wymagane";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Numer telefonu jest wymagany";
    }

    if (!formData.email.trim()) {
      errors.email = "Adres email jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Podaj poprawny adres email";
    }

    if (!formData.ageConfirmation) {
      errors.ageConfirmation = "Musisz potwierdzić, że masz ukończone 18 lat";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email with form data
      const emailData = {
        to: "kontakt@stop-znieczulicy.pl",
        subject:
          "Nowe zgłoszenie na kursy samoobrony - STOP znieczulicy na ulicy",
        body: `
Nowe zgłoszenie na kursy samoobrony:

Imię: ${formData.firstName}
Nazwisko: ${formData.lastName}
Telefon: ${formData.phone}
Email: ${formData.email}
Potwierdzenie pełnoletności: ${formData.ageConfirmation ? "Tak" : "Nie"}

Data zgłoszenia: ${new Date().toLocaleString("pl-PL")}
        `,
      };

      const response = await fetch(
        "https://stop-znieczulicy.pl/class_registration.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          ageConfirmation: false,
        });
        setShowRegistrationForm(false);
      } else {
        alert("Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.");
      }
      } catch {
        alert("Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.");
      } finally {
      setIsSubmitting(false);
    }
  };

  const events = [
    {
      date: "13 września 2025",
      lectures: [
        {
          id: "13-1",
          time: "14:30",
          speaker: "mgr Tomasz Prałat - Uniwersytet Civitas",
          title: "Rola liderów opinii i influencerów w walce z obojętnością.",
          description:
            "W dobie wszechobecnych mediów społecznościowych liderzy opinii i influencerzy wywierają rzeczywisty wpływ na postawy, emocje i decyzje społeczne. Wykład porusza zagadnienie ich roli jako współczesnych katalizatorów zmian społecznych tj. osób, które potrafią przełamywać bierność, reagować na kryzysy oraz inicjować istotne debaty publiczne. Omówione zostaną różnorakie typy liderów opinii wraz z mechanizmami ich oddziaływania. Przedstawione zostaną również konkretne przykłady kampanii społecznych, w których głos influencerów przyczynił się do mobilizacji społeczności i pobudzenia zaangażowania społeczności.",
        },
        {
          id: "13-2",
          time: "15:05",
          speaker: "Ewa Majka-Janiak",
          title:
            "Znieczulica wśród najbliższych. Perspektywa kuratora rodzinnego.",
          description: "",
        },
        {
          id: "13-3",
          time: "16:05",
          speaker: "Anna Zielenkiewicz / Sebastian Grzywacz",
          title: "PTSD i pierwsza pomoc emocjonalna / Dotyk bez pytania – niewidzialne granice niewidomych",
          description:
            "Co to jest zespół stresu pourazowego (PTSD), jakie są kryteria diagnostyczne. Czym charakteryzuje się pierwsza pomoc emocjonalna i jakie efekty przynosi. Jaka jest rola osób wspierających ludzi doświadczających przemocy. / Wystąpienie Sebastiana Grzywacza – przedsiębiorcy, trenera motywacyjnego i osoby niewidomej – porusza problem często niedostrzeganej znieczulicy wobec osób z niepełnosprawnością wzroku. W swoim wystąpieniu opowie o przekraczaniu granic fizycznych i emocjonalnych, z jakim mierzą się niewidomi na co dzień – od nagłego łapania za rękę, przez przesuwanie bez zgody, aż po ignorowanie potrzeby samodzielności. Wykład to zaproszenie do refleksji nad tym, jak okazywać pomoc z empatią i szacunkiem – nie „dla kogoś”, ale „z kimś”.",
        },
        {
          id: "13-4",
          time: "17:05",
          speaker: "Anna Zielenkiewicz",
          title: "Reagowanie na przemoc? Kogo na to stać? Warsztat",
          description:
            "Sytuacje noszące znamiona przemocy. Jak mądrze i dojrzale reagować na tego typu zdarzenia. Czym jest współodpowiedzialność. Praca zespołowa - omówienie asertywnego zachowania, możliwości, sposobów wsparcia dla osób doświadczających przemocy. Ilość miejsc na warsztaty jest ograniczona - link do zapisów na naszym Instagramie oraz na wydarzeniu na facebooku.",
          registrationUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLSfzLwG9Dw8Z3zcfKfHDMJo91rXPiPQW0S9Q-0HgDKHerpkF1Q/viewform?usp=header",
        },
      ],
    },
    {
      date: "14 września 2025",
      lectures: [
        {
          id: "14-1",
          time: "14:30",
          speaker: "Wojciech Mościbrodzki - Uniwersytet Civitas, Uniwersytet WSB Merito Gdańsk",
          title: "Nienawiść i pogarda w świecie Sztucznej Inteligencji.",
          description: "Czy sztuczna inteligencja pomaga nam rozwiązywać nasze problemy, czy też przeciwnie: sprawia, że jesteśmy coraz bardziej pełni nienawiści i pogardy. Czy ze zjawiskami tymi można próbować walczyć? A może jesteśmy skazani na porażkę, bo nasze mózgi są nadal zbyt gadzie i prymitywne, by dawać nam nowoczesne narzędzia IT. Jak żyć w świecie, w którym powszechny dostęp do źródeł nie przybliża nas do Prawdy, lecz do Postprawdy?",
        },
        {
          id: "14-2",
          time: "15:30",
          speaker: "Wojciech Mościbrodzki - Uniwersytet Civitas, Uniwersytet WSB Merito Gdańsk",
          title:
            "Obcy, masoneria, żydzi, cioty, oszołomy. Komu opłaca się zarządzanie strachem?",
          description: "Współcześnie bardzo łatwo jest wykrzyczeć w świat słowa, które wstydzilibyśmy się powiedzieć komuś w twarz. Anonimowość, plemienność, przyzwolenie dla zachowań ekstremalnych - to jest obraz naszej codzienności. Pragniemy być zauważeni, więc krzyczymy coraz głośniej i coraz bardziej ekstremalnie. Cisza jest passe, a milczenie jest odbierane jako przyzwolenie. Czy zatem nie ma już szans na normalną rozmowę?",
        },
        {
          id: "14-3",
          time: "16:30",
          speaker: "dr hab. Konrad Bocian, prof. USWPS",
          title: "Dlaczego zamiast pomóc, łatwiej jest nam odwrócić wzrok.",
          description:
            "Każdy z nas chce wierzyć, że w sytuacji kryzysowej zachowa się przyzwoicie – poda rękę, zatrzyma się, zareaguje. A jednak w rzeczywistości często odwracamy wzrok i idziemy dalej. Dlaczego tak się dzieje? Podczas wykładu opowiem o psychologicznych mechanizmach, które stoją za naszą biernością: o efekcie gapia, roli tłumu, strachu przed oceną i codziennych racjonalizacjach. Pokażę też, co sprawia, że niektórzy ludzie przełamują ten schemat i pomagają – nawet wtedy, gdy nikt inny tego nie robi. To opowieść o moralności w praktyce – nie tej deklarowanej, lecz tej, która ujawnia się w działaniu.",
        },
        {
          id: "14-4",
          time: "17:30",
          speaker: "Martyna Wojtczak - USWPS",
          title: "Naruszanie granic dzieci w sieci - znieczulica cyfrowa?",
          description:
            "W dobie mediów społecznościowych rodzice chętnie dzielą się wizerunkiem dzieci. To zjawisko, nazywane sharentingiem, budzi pytania o prawo dziecka do prywatności i autonomii w przestrzeni cyfrowej, a także o powody takiego zachowania rodziców. Wystąpienie będzie próbą odpowiedzi na pytanie: kiedy rodzicielskie publikowanie relacji z życia dziecka przestaje być niewinne, a staje się formą symbolicznej przemocy i społecznie akceptowanego nadużycia?\nPrzyjrzymy się też zjawisku społecznej znieczulicy wobec naruszania granic dzieci oraz temu, dlaczego tak trudno nam na to reagować.",
        },
      ],
    },
    {
      date: "20 września 2025",
      lectures: [
        {
          id: "20-1",
          time: "13:30",
          speaker: "Łukasz Radzikowski - Uniwersytet Civitas",
          title:
            "Osoby LGBTQ+ - kim są i dlaczego tak często doznają przemocy.",
          description:
            'Osoby LGBTQ+ – kim są i dlaczego często doświadczają przemocy? „To nie ludzie, to ideologia" i „tęczowa zaraza" – w przestrzeni publicznej osoby LGBTQ+ doświadczają przemocy, bywają dehumanizowane i poniżane przez osoby na różnych eksponowanych stanowiskach. Czy mowa nienawiści jest w tym wypadku zgodna z prawem? Z drugiej strony osoby LGBTQ+ doświadczają przemocy ze strony najbliżej rodziny. Niezrozumienie, brak akceptacji i odrzucenie są częste. Przemoc na ulicy, w pracy, w miejscach publicznych również nie są rzadkie. Ukrywanie części tożsamości jest często koniecznością. Potrzeba wsparcia jest ogromna.',
        },
        {
          id: "20-2",
          time: "14:30",
          speaker: "Łukasz Radzikowski - Uniwersytet Civitas",
          title: "Czy jestem agresywny? - Ile złego jest w nas samych?",
          description:
            '„Czy jestem agresywny?" – ile złego jest w nas samych? „Trzymajta mnie bo nie wytrzymam!" – cytat z filmu „Kogel-mogel" mówi nam o tym, że każdy człowiek ma w sobie pierwiastek agresji i walki. Czy wiemy gdzie są nasze granice? Czy istnieje próg złości, powyżej którego nie umiemy się kontrolować? Co nas złości? I dlaczego nas złości? Czy możemy kontrolować naszą własną złość? Jak definiujemy agresję? Czy moja agresja jest taka sama jak twoja?',
        },
        {
          id: "20-3",
          time: "15:30",
          speaker: "Sara Lewicka - Uniwersytet Civitas",
          title: "Wpływ stereotypów na nasze myślenie.",
          description:
            "Wystąpienie poświęcone jest wpływowi stereotypów na nasze codzienne myślenie, podejmowanie decyzji i sposób postrzegania innych ludzi. Omówione zostaną mechanizmy, które sprawiają, że – często nieświadomie – przypisujemy całym grupom społecznym uproszczone cechy, co prowadzi do utrwalania podziałów i wzmacniania napięć społecznych. W centrum uwagi znajdą się stereotypy dotyczące m.in. płci, pochodzenia, wieku czy poglądów politycznych. Wskazane zostanie, jak działają one w praktyce, np. w debatach publicznych, mediach czy przestrzeni edukacyjnej oraz jak wpływają na klimat społeczny i zaufanie między obywatelami. Celem wystąpienia jest pokazanie, że stereotypy to nie tylko indywidualne uprzedzenia – to także narzędzia, które mogą być wykorzystywane do dzielenia społeczeństwa.",
        },
        {
          id: "20-4",
          time: "16:30",
          speaker: "Aneta Siejka - Uniwersytet Civitas",
          title: "Cyfrowe Życie, Prawdziwe Wartości: Jak Odzyskać Równowagę?",
          description:
            "W świecie, gdzie coraz częściej patrzymy w ekrany zamiast w oczy, łatwo stracić wrażliwość. Znieczulica cyfrowa nie pojawia się nagle – narasta z każdym kliknięciem, które zastępuje realną rozmowę. Ten wykład to zaproszenie do odzyskania równowagi między technologią a człowieczeństwem. Pokażemy, jak świadomie korzystać z narzędzi cyfrowych, by nie tracić kontaktu z sobą i innymi. Jak humanizować technologię, budować empatię w cyfrowym świecie i dlaczego prawdziwe relacje są dziś aktem odwagi. Bądźmy w realu – obecni, czuli, odpowiedzialni. Bo przyszłość zbudujemy tylko razem – nie w sieci, lecz między sobą.",
        },
        {
          id: "20-5",
          time: "17:30 - 19:45",
          speaker: "Wyszkoleni.com",
          title: "Szkolenie z pierwszej pomocy (z użyciem fantomów).",
          description:
            "To nie jest kolejna teoria do zapomnienia – to praktyczne, życiowe umiejętności, które mogą uratować komuś życie.\n\nPodczas szkolenia dowiesz się:\n\n•⁠  ⁠jak udzielić pierwszej pomocy w sytuacjach nagłych – zarówno dorosłym, jak i dzieciom,\n\n- co zrobić krok po kroku w napadzie drgawek uogólnionych, zadławieniu, zawale serca czy nagłym zatrzymaniu krążenia,\n\n•⁠  ⁠co mówi prawo: kiedy masz obowiązek pomóc i jak jesteś chroniony/a jako osoba udzielająca pomocy.\n\nSzkolenie łączy część teoretyczną z praktycznymi ćwiczeniami, które pozwolą Ci poczuć się pewniej i bezpieczniej w sytuacji kryzysowej – gdy czyjeś życie będzie zależało od Twojego działania.\n\nUdział w szkoleniu jest bezpłatny, ale obowiązują zapisy.",
          registrationUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLSelm2MrtWRn71uVAwtckdQ6oyW7--eQ4_uNQNgb3SgX1Ugltw/viewform?usp=header",
        },
      ],
    },
    {
      date: "21 września 2025",
      lectures: [
        {
          id: "21-1",
          time: "14:30",
          speaker: "Justyna Bakalarska-Stankiewicz - Uniwersytet Civitas",
          title:
            "Niewidzialni obok nas: jak wyuczone przekonania wpływają na reakcje wobec osób potrzebujących.",
          description:
            "Dlaczego w obliczu cierpienia jednych reagujemy, a innych ignorujemy? Wykład przybliża mechanizmy społecznej percepcji i stereotypizacji osób potrzebujących pomocy, pokazując, jak uprzedzenia i automatyzmy wpływają na nasze decyzje, emocje i działania – zarówno w przestrzeni publicznej, jak i prywatnej. To zaproszenie do refleksji nad naszą codzienną wrażliwością i odpowiedzialnością społeczną.",
        },
        {
          id: "21-2",
          time: "15:30",
          speaker: "Justyna Bakalarska-Stankiewicz - Uniwersytet Civitas",
          title:
            "Społeczna wrażliwość wobec osób z niepełnosprawnościami: bariery, stereotypy, ignorowanie.",
          description:
            "Dlaczego tak łatwo przeoczyć osoby z niepełnosprawnościami? Ten wykład analizuje istniejące bariery – nie tylko architektoniczne, ale też społeczne i mentalne – które prowadzą do ich wykluczenia. Uczestnicy poznają najczęstsze stereotypy, formy ignorowania oraz sposoby, dzięki którym można budować bardziej inkluzywne i empatyczne środowisko dla wszystkich członków społeczeństwa.",
        },
        {
          id: "21-3",
          time: "16:30",
          speaker: "Komenda Stołeczna Policji",
          title: "Jak bezpiecznie reagować?",
          description: "Spotkanie poprowadzą oficerowi policji z Komendy Stołecznej Policji. Poruszą zagadnienia związane z formami reagowania na przemoc. Jak skutecznie i bezpiecznie odnaleźć się w sytuacji kryzysowej, kogo w jaki sposób powiadomić, w jaki sposób nie należy reagować. Przekażą szereg wskazówek dla osób, które mogą paść ofiarą w środkach transportu. Oddzielny panel poświęcony zostanie zagrożeniom o charakterze terrorystycznym, a także fizycznym atakom.\nUdział wezmą:\n·        podkom. Jacek Wiśniewski, Komenda Stołeczna Policji\n·        podkom. Łukasz Konieczniak, Komenda Stołeczna Policji\n·        oficer Samodzielnego Pododdziału Kontrterrorystycznego Policji",
        },
        {
          id: "21-4",
          time: "17:30 - 19:45",
          speaker: "Wyszkoleni.com",
          title: "Szkolenie z pierwszej pomocy (z użyciem fantomów).",
          description:
            "To nie jest kolejna teoria do zapomnienia – to praktyczne, życiowe umiejętności, które mogą uratować komuś życie.\n\nPodczas szkolenia dowiesz się:\n\n•⁠  ⁠jak udzielić pierwszej pomocy w sytuacjach nagłych – zarówno dorosłym, jak i dzieciom,\n\n- co zrobić krok po kroku w napadzie drgawek uogólnionych, zadławieniu, zawale serca czy nagłym zatrzymaniu krążenia,\n\n•⁠  ⁠co mówi prawo: kiedy masz obowiązek pomóc i jak jesteś chroniony/a jako osoba udzielająca pomocy.\n\nSzkolenie łączy część teoretyczną z praktycznymi ćwiczeniami, które pozwolą Ci poczuć się pewniej i bezpieczniej w sytuacji kryzysowej – gdy czyjeś życie będzie zależało od Twojego działania.\n\nUdział w szkoleniu jest bezpłatny, ale obowiązują zapisy.",
          registrationUrl:
            "https://docs.google.com/forms/d/e/1FAIpQLScZJd4EWhbH39aXMpHv8ei0pbfdhzdVv6cQ3cLAs0SHatzvNg/viewform?usp=header",
        },
      ],
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center transition-all duration-500">
            Kalendarz – wykłady i warsztaty
          </h2>

          <div className="w-20 h-1 bg-red-500 mx-auto mb-10 transition-all duration-500 hover:w-32"></div>

          <div className="text-base max-w-4xl mx-auto leading-relaxed text-gray-700 mb-8 transition-all duration-500">
            <p>
              We wrześniu 2025 roku zrealizowaliśmy serię wykładów i warsztatów w ramach kampanii{' '}
              <strong className="text-red-500">STOP znieczulicy na ulicy</strong>. W wydarzeniach wzięli udział eksperci z
              zakresu psychologii społecznej, bezpieczeństwa publicznego i komunikacji kryzysowej. Uczestnicy mogli zdobyć
              praktyczną wiedzę o tym, jak reagować na przemoc i sytuacje zagrożenia.
            </p>

            <p>
              W ramach kampanii odbyły się również szkolenia z pierwszej pomocy i samoobrony oraz wykłady poświęcone
              mechanizmowi efektu widza i znieczulicy społecznej. Wszystkie wydarzenia były bezpłatne i otwarte dla
              wszystkich zainteresowanych.
            </p>

            <p>
              Obecnie kontynuujemy naszą misję, pracując nad{' '}
              <strong className="text-red-500">fundacją STOP znieczulicy na ulicy</strong>, która pozwoli nam rozwijać te
              działania i organizować kolejne projekty edukacyjne.
            </p>

            <p>
              Archiwalne wydarzenia z kampanii znajdziesz poniżej. Dziękujemy wszystkim uczestnikom i partnerom za wspólne
              działania przeciwko obojętności.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="text-center bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover-lift animate-slide-in-left">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="text-red-500 mr-3 transition-all duration-300" size={28} />
                <h3 className="text-lg font-bold transition-all duration-300">Kiedy odbyło się wydarzenie</h3>
              </div>
              <p className="text-sm text-gray-700 transition-all duration-300">
                13 - 14 września
                <br />
                20 - 21 września 2025
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover-lift animate-slide-in-right">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="text-red-500 mr-3 transition-all duration-300" size={28} />
                <h3 className="text-lg font-bold transition-all duration-300">Gdzie odbyło się wydarzenie</h3>
              </div>
              <div className="text-sm text-gray-700 transition-all duration-300">
                <p className="mb-1">Uniwersytet Civitas</p>
                <p className="mb-1">Plac Defilad 1, Warszawa</p>
                <p className="mb-3">12 piętro, Pałac Kultury i Nauki</p>
                <p className="text-sm text-gray-500">*Lokalizacja przyjazna osobom z niepełnosprawnościami.</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {/* 13-14 września 2025 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {events.slice(0, 2).map((day, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-all duration-500 hover-lift animate-scale-in"
                >
                  <div className="flex items-center justify-center mb-6">
                    <Calendar
                      className="text-red-500 mr-2 transition-all duration-300"
                      size={24}
                    />
                    <h3 className="text-base font-bold transition-all duration-300">
                      {day.date}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {day.lectures.map((lecture, lectureIndex) => (
                      <div
                        key={lectureIndex}
                        className="border-b border-gray-100 last:border-0 pb-4 last:pb-0 transition-all duration-300"
                      >
                        <div
                          className="cursor-pointer hover:bg-gray-50 p-2 rounded text-center transition-all duration-300"
                          onClick={() => {
                            if (lecture.description.length > 0) {
                              toggleLecture(lecture.id);
                            }
                          }}
                        >
                          <div className="mb-2">
                            <p className="text-xs font-medium text-gray-700 transition-all duration-300">
                              {lecture.speaker}
                            </p>
                            <div className="flex items-center justify-center">
                              <p className="text-xs text-gray-600 transition-all duration-300">
                                {lecture.title}
                              </p>
                              {lecture.description.length > 0 ? (
                                expandedLectures.includes(lecture.id) ? (
                                  <ChevronUp
                                    size={16}
                                    className="ml-2 text-red-500 transition-all duration-300"
                                  />
                                ) : (
                                  <ChevronDown
                                    size={16}
                                    className="ml-2 text-red-500 transition-all duration-300"
                                  />
                                )
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>

                          {expandedLectures.includes(lecture.id) && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-left animate-fade-in">
                              <p className="text-xs text-gray-700 leading-relaxed">
                                {lecture.description}
                              </p>
                              {lecture.registrationUrl && (
                                <div className="mt-3 text-center">
                                  <a
                                    href={lecture.registrationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover-lift hover:shadow-lg transform hover:scale-105"
                                  >
                                    Zapisz się
                                  </a>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 20-21 września 2025 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.slice(2, 4).map((day, index) => (
                <div
                  key={index + 2}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-all duration-500 hover-lift animate-scale-in"
                >
                  <div className="flex items-center justify-center mb-6">
                    <Calendar
                      className="text-red-500 mr-2 transition-all duration-300"
                      size={24}
                    />
                    <h3 className="text-base font-bold transition-all duration-300">
                      {day.date}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {day.lectures.map((lecture, lectureIndex) => (
                      <div
                        key={lectureIndex}
                        className="border-b border-gray-100 last:border-0 pb-4 last:pb-0 transition-all duration-300"
                      >
                          <div
                            className="cursor-pointer hover:bg-gray-50 p-2 rounded text-center transition-all duration-300"
                            onClick={() => {
                              if (lecture.description.length > 0) {
                                toggleLecture(lecture.id);
                              }
                            }}
                          >
                          <div className="mb-2">
                            <p className="text-xs font-medium text-gray-700 transition-all duration-300">
                              {lecture.speaker}
                            </p>
                            <div className="flex items-center justify-center">
                              <p className="text-xs text-gray-600 transition-all duration-300">
                                {lecture.title}
                              </p>
                              {lecture.description.length > 0 ? (
                                expandedLectures.includes(lecture.id) ? (
                                  <ChevronUp
                                    size={16}
                                    className="ml-2 text-red-500 transition-all duration-300"
                                  />
                                ) : (
                                  <ChevronDown
                                    size={16}
                                    className="ml-2 text-red-500 transition-all duration-300"
                                  />
                                )
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>

                          {expandedLectures.includes(lecture.id) && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-left animate-fade-in">
                              <p className="text-xs text-gray-700 leading-relaxed">
                                {lecture.description}
                              </p>
                              {lecture.registrationUrl && (
                                <div className="mt-3 text-center">
                                  <a
                                    href={lecture.registrationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover-lift hover:shadow-lg transform hover:scale-105"
                                  >
                                    Zapisz się
                                  </a>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

            <img
              src="/banner_inner.jpg"
            loading="lazy"
            decoding="async"
            className="max-w-4xl mx-auto mb-10"
            style={{ height: "auto", maxWidth: "100%" }}
          ></img>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 hover:shadow-lg transition-all duration-500 hover-lift animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-center transition-all duration-300">
              Bezpłatne kursy samoobrony <span className="text-red-500">dla kobiet</span>
            </h3>
            <div className="space-y-4 text-sm text-gray-600 transition-all duration-300">
              <p className="text-center">
                We wrześniu 2025 roku, wspólnie ze Strażą Miejską m.st. Warszawy, Dragon’s Den Fight Club oraz Papaj Gym,<br />zorganizowaliśmy serię bezpłatnych kursów samoobrony dla kobiet.
              </p>
              <p className="text-center">
                Szkolenia odbyły się na Woli, Mokotowie i Pradze Północ, gromadząc dziesiątki uczestniczek,<br />które zdobyły praktyczne umiejętności reagowania i obrony w sytuacjach zagrożenia.
              </p>
              <p className="text-center">
                Kursy cieszyły się dużym zainteresowaniem - dlatego planujemy ich kolejne edycje w ramach fundacji.
              </p>
              <p className="text-center">
                Zachęcamy do śledzenia naszych kanałów, by nie przegapić nowych terminów.
              </p>
            </div>
          </div>
          {/* Registration Form Modal */}
          {showRegistrationForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 pt-20 overflow-y-auto">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">
                      Zapisy na kursy samoobrony
                    </h3>
                    <button
                      onClick={() => setShowRegistrationForm(false)}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Imię *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          formErrors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Wprowadź imię"
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nazwisko *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          formErrors.lastName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Wprowadź nazwisko"
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Numer telefonu *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          formErrors.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Wprowadź numer telefonu"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Adres email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          formErrors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Wprowadź adres email"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="mb-6">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="ageConfirmation"
                          name="ageConfirmation"
                          checked={formData.ageConfirmation}
                          onChange={handleInputChange}
                          className={`mt-1 mr-2 ${
                            formErrors.ageConfirmation ? "border-red-500" : ""
                          }`}
                        />
                        <label
                          htmlFor="ageConfirmation"
                          className="text-sm text-gray-700"
                        >
                          Potwierdzam, że mam ukończone 18 lat. *
                        </label>
                      </div>
                      {formErrors.ageConfirmation && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.ageConfirmation}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setShowRegistrationForm(false)}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        Anuluj
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Success Message */}
          {formSubmitted && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Zgłoszenie wysłane!
                </h3>
                <p className="text-gray-600 mb-4">
                  Twoje zgłoszenie na kursy samoobrony zostało przyjęte. Wkrótce
                  skontaktujemy się z Tobą.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  Zamknij
                </button>
              </div>
            </div>
          )}

          {/* Share Your Story Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 mt-10 hover:shadow-lg transition-all duration-500 hover-lift animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-center transition-all duration-300">
              Czy kiedykolwiek byłeś świadkiem przemocy w przestrzeni
              publicznej?
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-sm text-gray-700 transition-all duration-300">
                Czy doświadczyłeś podobnej sytuacji, w której nikt nie
                zareagował – albo przeciwnie, ktoś stanął w Twojej obronie?
              </p>

              <p className="text-sm text-gray-700 transition-all duration-300">
                Twoja historia może pomóc innym zrozumieć, jak ważne jest
                reagowanie. Wybrane, anonimowe relacje opublikujemy w
                materiałach kampanii, by wspólnie{" "}
                <span className="text-red-500 font-medium">przełamywać</span>{" "}
                społeczną obojętność.
              </p>

              <div className="text-center mt-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfjarfRYK9NclBRl4G6eq8geNL8PQbfYDptZKwi0vWjVidzGw/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-500 hover:bg-red-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-lift hover:shadow-lg transform hover:scale-105"
                >
                  Podziel się historią
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
