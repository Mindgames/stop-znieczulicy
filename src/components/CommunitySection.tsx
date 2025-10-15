import { Facebook, Instagram } from "lucide-react";
import React, { useEffect, useState } from "react";

// Mock social media posts (in a real app, these would come from an API)
const mockPosts = [
  {
    id: 1,
    platform: "instagram",
    author: "stop_znieczulicy_kampania",
    content:
      "Nasze wydarzenie ma jeden cel: zwiększyć świadomość i pokazać, jak BEZPIECZNIE reagować, gdy jesteśmy świadkami przemocy w przestrzeni publicznej. Byłeś/byłaś kiedyś świadkiem przemocy? Chciałeś/-aś zareagować, ale nie wiedziałeś/-aś jak? Chcemy pokazać, że można i trzeba reagować mądrze i bezpiecznie...",
    image: "/instagram_posts/post_5.jpg",
    date: "7.07.2025",
  },
  {
    id: 2,
    platform: "instagram",
    author: "stop_znieczulicy_kampania",
    content:
      "Chcemy, by mieszkańcy Warszawy czuli się bezpieczniej - dlatego razem z naszymi partnerami organizujemy: 🛡️ Szkolenia z samoobrony 👮 Wykłady Komendy Stołecznej Policji o tym, jak bezpiecznie reagować w sytuacjach zagrożenia Obserwuj wydarzenie – zapisy już wkrótce!",
    image: "/instagram_posts/post_4.jpg",
    date: "7.07.2025",
  },
  {
    id: 3,
    platform: "instagram",
    author: "stop_znieczulicy_kampania",
    content:
      "Efekt widza to nie obojętność - to biologiczny mechanizm obronny. Czy widać go w mózgu? Okazuje się, że tak. Holenderscy naukowcy zbadali za pomocą rezonansu magnetycznego mózgi ludzi w wykreowanych wirtualnie sytuacjach zagrożenia.",
    image: "/instagram_posts/post_3.jpg",
    date: "7.07.2025",
  },
  {
    id: 4,
    platform: "instagram",
    author: "stop_znieczulicy_kampania",
    content:
      "Zwiększenie świadomości społecznej na temat bierności wobec przemocy i pokazanie, jak ważne jest, byśmy znów zaczęli widzieć siebie nawzajem. Wierzymy, że reakcja na przemoc to nie obowiązek bohatera, lecz naturalny odruch człowieka żyjącego w społeczeństwie.",
    image: "/instagram_posts/post_2.jpg",
    date: "7.07.2025",
  },
  {
    id: 5,
    platform: "instagram",
    author: "stop_znieczulicy_kampania",
    content:
      "STOP znieczulicy na ulicy to kampania społeczna w sercu Warszawy. Dlaczego tak często przechodzimy obojętnie wobec przemocy w przestrzeni publicznej? Dlaczego nie reagujemy, gdy ktoś potrzebuje pomocy? Znieczulica to nie tylko brak reakcji - to efekt zaniku więzi społecznych, rosnącego indywidualizmu i braku poczucia wspólnoty. Czas to zmienić.",
    image: "/instagram_posts/post_1.jpg",
    date: "7.07.2025",
  },
];

const CommunitySection: React.FC = () => {
  const [posts, setPosts] = useState(mockPosts);

  // In a real app, you might fetch posts from a social media API here
  useEffect(() => {
    // Simulating loading posts from an API
    const timer = setTimeout(() => {
      setPosts(mockPosts);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-500">
            Media społecznościowe
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-10 transition-all duration-500 hover:w-32"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-3">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4">
                <div className="flex items-center mb-3">
                  {post.platform === "instagram" ? (
                    <Instagram
                      size={18}
                      className="text-pink-500 mr-2 transition-all duration-300"
                    />
                  ) : (
                    <Facebook
                      size={18}
                      className="text-blue-600 mr-2 transition-all duration-300"
                    />
                  )}
                  <span className="text-xs transition-all duration-300">
                    @{post.author}
                  </span>
                  <span className="text-gray-500 text-xs ml-auto transition-all duration-300">
                    {post.date}
                  </span>
                </div>

                {post.image && (
                  <div className="rounded-md overflow-hidden mb-3">
                    <img
                      src={post.image}
                      alt="Post"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <p className="text-xs text-gray-700 mb-3 transition-all duration-300">
                  {post.content}
                </p>

                <div className="flex items-center text-gray-500 text-xs">
                  <span className="font-medium text-red-500 transition-all duration-300">
                    #stopznieczulicy
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="text-base mb-4 space-y-3 transition-all duration-300 leading-relaxed text-gray-700">
            <p>
              Dołącz do naszej społeczności i bądź na bieżąco z działaniami kampanii i fundacji.
            </p>
            <p>
              Na naszych profilach publikujemy materiały edukacyjne, relacje z wydarzeń i historie osób,
              które nie przeszły obojętnie wobec krzywdy innych.
            </p>
            <p>
              Obserwuj nas i pomóż szerzyć ideę empatii i odpowiedzialności społecznej.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/stop_znieczulicy_kampania/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition-all duration-300 hover-lift hover:shadow-lg transform hover:scale-105"
            >
              <Instagram size={16} className="mr-2" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579932839803"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#1877F2] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0F5DC8] transition-all duration-300 hover-lift hover:shadow-lg transform hover:scale-105"
            >
              <Facebook size={16} className="mr-2" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
