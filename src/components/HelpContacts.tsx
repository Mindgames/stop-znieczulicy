import React from 'react';

const HelpContacts: React.FC = () => {
  return (
    <div className="space-y-8 text-gray-800 text-sm leading-relaxed">
      <section>
        <h2 className="text-base font-semibold mb-2">Telefon interwencyjny dla osób w trudnej sytuacji życiowej</h2>
        <p className="mb-2">(w tym osób myślących o samobójstwie)</p>
        <p>ul. 6-go Sierpnia 1/5 02-843, Warszawa (Ursynów-Pyry)</p>
        <p>24 godziny 7 dni w tygodniu</p>
        <p>
          <span className="mr-2">kom.:</span>
          <a href="tel:+48514202619" className="text-red-600 hover:underline">514 202 619</a>
        </p>
        <p>
          <span className="mr-2">tel:</span>
          <a href="tel:+48228554432" className="text-red-600 hover:underline">22 855 44 32</a>
        </p>
        <p>
          <a href="mailto:sekretariat@woik.waw.pl" className="text-red-600 hover:underline">sekretariat@woik.waw.pl</a>
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-2">Telefon dla osób dorosłych w kryzysie samobójczym</h2>
        <p>
          tel. <a href="tel:+48511200200" className="text-red-600 hover:underline">511 200 200</a>
        </p>
        <p>czynny 24 godziny 7 dni w tygodniu</p>
        <p>obsługiwany przez psychologów, terapeutów i pracowników socjalnych</p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-2">Kryzysowy Telefon Zaufania - wsparcie psychologiczne</h2>
        <p>Czynny codziennie 24h.</p>
        <p>
          <a href="tel:116123" className="text-red-600 hover:underline">116 123</a>
        </p>
        <p>
          <a href="https://www.116sos.pl/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">https://www.116sos.pl/</a>
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-2">Telefon zaufania dla dzieci i młodzieży</h2>
        <p>
          <a href="tel:116111" className="text-red-600 hover:underline">116 111</a>
        </p>
        <p>Darmowy numer pomagający w poradzeniu sobie w trudnych sytuacjach.</p>
        <p>Czynny codziennie 24h.</p>
        <p>
          <a href="https://116111.pl/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">https://116111.pl/</a>
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-2">Centrum Praw Kobiet</h2>
        <p>Pomoc prawna - w każdy czwartek w godzinach 16-21 pod numerem: <a href="tel:800107777" className="text-red-600 hover:underline">800 107 777</a> lub drogą mailową na adres: <a href="mailto:porady.prawne@cpk.org.pl" className="text-red-600 hover:underline">porady.prawne@cpk.org.pl</a></p>
        <p>
          <a href="https://cpk.org.pl/pomoc/pomoc-prawna/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">https://cpk.org.pl/pomoc/pomoc-prawna/</a>
        </p>
        <p>Całodobowy telefon interwencyjny dla kobiet ofiar przemocy.</p>
        <p>
          <a href="tel:+48600070717" className="text-red-600 hover:underline">600 070 717</a>
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-2">Ogólnopolskie Pogotowie dla Ofiar Przemocy w Rodzinie (IPZ PTP)</h2>
        <p>
          <a href="tel:+48226687000" className="text-red-600 hover:underline">22 668 70 00</a>
        </p>
        <p>Poradnia działa 7 dni w tygodniu w godzinach 12:00-18:00.</p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-2">Centrum Wsparcia dla Osób Dorosłych w Kryzysie Psychicznym</h2>
        <p>Telefoniczne Centrum Wsparcia <a href="tel:800702222" className="text-red-600 hover:underline">800 70 2222</a></p>
        <p>linia jest bezpłatna</p>
        <p>pomoc psychologa 24 godziny przez 7 dni w tygodniu</p>
        <p>
          e-mail: <a href="mailto:porady@centrumwsparcia.pl" className="text-red-600 hover:underline">porady@centrumwsparcia.pl</a>
        </p>
        <p>
          strona <a href="https://www.centrumwsparcia.pl" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">www.centrumwsparcia.pl</a>
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-2">Dziecięcy telefon zaufania Rzecznika Praw Dziecka</h2>
        <p>
          <a href="tel:800121212" className="text-red-600 hover:underline">800 12 12 12</a>
        </p>
        <p>Bezpłatna, całodobowa linia interwencyjna dla dzieci i młodzieży.</p>
        <p>Telefon i czat internetowy czynne są przez całą dobę, siedem dni w tygodniu. Czat dostępny na stronie telefonu zaufania RPD.</p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-2">Kryzysowy Telefon Zaufania - wsparcie psychologiczne</h2>
        <p>
          <a href="tel:116123" className="text-red-600 hover:underline">116 123</a>
        </p>
        <p>Czynny 24 h / 7 dni w tygodniu.</p>
      </section>
    </div>
  );
};

export default HelpContacts;

