import React, { useState, useEffect } from 'react';
import './App.css';

interface Channel {
  id: string;
  name: string;
  category: string;
  image: string;
  embedUrl: string;
}

function App() {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsMenuOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const channels: Channel[] = [
    // Deportes
    {
      id: '1',
      name: 'Fox Sports Mexico',
      category: 'Deportes',
      image: 'https://i.imgur.com/cbdDd0G.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/101'
    },
    {
      id: '2',
      name: 'Fox Sports 2',
      category: 'Deportes',
      image: 'https://i.imgur.com/Y4SBIlL.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/102'
    },
    {
      id: '3',
      name: 'Fox Sports 3',
      category: 'Deportes',
      image: 'https://i.imgur.com/rJskZGE.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/103'
    },
    {
      id: '4',
      name: 'Fox Sports Premium Mexico',
      category: 'Deportes',
      image: 'https://i.imgur.com/tUctN5P.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/104'
    },
    {
      id: '5',
      name: 'Fox Sports 1 Arg',
      category: 'Deportes',
      image: 'https://i.imgur.com/rcNGlgt.jpeg',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/78'
    },
    {
      id: '6',
      name: 'Fox Sports 2 Arg',
      category: 'Deportes',
      image: 'https://i.imgur.com/5mbncRn.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/79'
    },

    {
      id: '7',
      name: 'Fox Sports 3 Arg',
      category: 'Deportes',
      image: 'https://i.imgur.com/iOExVTm.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/80'
    },
        {
      id: '8',
      name: 'Fox Sports deportes',
      category: 'Deportes',
      image: 'https://i.imgur.com/tJVxZCD.jpeg',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/70'
    },
    },
        {
      id: '9',
      name: 'ESPN MEXICO',
      category: 'Deportes',
      image: 'https://i.imgur.com/embylOd.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/97'
    },
    {
      id: '10',
      name: 'ESPN 2 MEXICO',
      category: 'Deportes',
      image: 'https://i.imgur.com/7ePkVLy.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/98'
    },
    {
      id: '10',
      name: 'ESPN 3 MEXICO',
      category: 'Deportes',
      image: 'https://i.imgur.com/8iJvPpS.png',
      embedUrl: 'https://tarjetarojaenvivo.lat/player/1/99'
    },

    // Noticias
    {
      id: '18',
      name: 'Fox',
      category: 'Noticias',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/cnn'
    },
    {
      id: '19',
      name: 'Telemundo Noticias',
      category: 'Noticias',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/telemundo'
    },
    {
      id: '20',
      name: 'Univision Noticias',
      category: 'Noticias',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/univision'
    },
    {
      id: '21',
      name: 'RT en Español',
      category: 'Noticias',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/rt'
    },
    {
      id: '22',
      name: 'DW Español',
      category: 'Noticias',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/dw'
    },
    {
      id: '23',
      name: 'France 24',
      category: 'Noticias',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/france24'
    },
    // Entretenimiento
    {
      id: '24',
      name: 'MTV Latino',
      category: 'Entretenimiento',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/mtv'
    },
    {
      id: '25',
      name: 'Canal Sony',
      category: 'Entretenimiento',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/sony'
    },
    {
      id: '26',
      name: 'Warner TV',
      category: 'Entretenimiento',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/warner'
    },
    {
      id: '27',
      name: 'AXN',
      category: 'Entretenimiento',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/axn'
    },
    {
      id: '28',
      name: 'FX',
      category: 'Entretenimiento',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/fx'
    },
    // Documentales
    {
      id: '28',
      name: 'Discovery Channel',
      category: 'Documentales',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/discovery'
    },
    {
      id: '29',
      name: 'National Geographic',
      category: 'Documentales',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/natgeo'
    },
    {
      id: '30',
      name: 'History Channel',
      category: 'Documentales',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/history'
    },
    {
      id: "31"',
      name: 'Animal Planet',
      category: 'Documentales',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/animalplanet'
    },
    {
      id: '32',
      name: 'Discovery Science',
      category: 'Documentales',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/science'
    },
    // Infantil
    {
      id: '33',
      name: 'Cartoon Network',
      category: 'Infantil',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/cartoon'
    },
    {
      id: '34',
      name: 'Disney Channel',
      category: 'Infantil',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/disney'
    },
    {
      id: '35',
      name: 'Nickelodeon',
      category: 'Infantil',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/nick'
    },
    {
      id: '36',
      name: 'Disney Junior',
      category: 'Infantil',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/disneyjr'
    },
    {
      id: '37',
      name: 'Discovery Kids',
      category: 'Infantil',
      image: 'https://placehold.co/50x50',
      embedUrl: 'https://ejemplo.com/embed/discoverykids'
    }
  ];

  const categories = Array.from(new Set(channels.map(channel => channel.category)));

  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
      {/* Menú lateral con efecto burbuja */}
      <div 
        className={`
          fixed md:relative
          z-50 md:z-auto
          h-full
          bg-gray-800 
          transition-all duration-300
          ${isMenuOpen ? 'w-full md:w-64' : 'w-16'}
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full p-4 text-white hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          {isMenuOpen ? '←' : '→'}
        </button>
        <div className="overflow-y-auto h-[calc(100vh-4rem)]">
          {categories.map(category => (
            <div key={category} className="p-4">
              <h2 className="text-white font-bold mb-2">{category}</h2>
              <div className="space-y-2">
                {channels
                  .filter(channel => channel.category === category)
                  .map(channel => (
                    <button
                      key={channel.id}
                      onClick={() => handleChannelSelect(channel)}
                      className={`flex items-center space-x-2 w-full p-2 rounded-lg transition-all transform hover:scale-105 
                        ${selectedChannel?.id === channel.id ? 'bg-blue-600' : 'bg-gray-700'}`}
                    >
                      <img 
                        src={channel.image} 
                        alt={channel.name}
                        className="w-8 h-8 rounded-full"
                      />
                      {isMenuOpen && (
                        <span className="text-white text-sm truncate">
                          {channel.name}
                        </span>
                      )}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón flotante para móvil */}
      {isMobile && !isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg"
        >
          ☰
        </button>
      )}

      {/* Área principal del reproductor */}
      <div className="flex-1 p-4 md:p-6">
        {selectedChannel ? (
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
            <iframe
              src={selectedChannel.embedUrl}
              className="w-full h-full"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-white text-xl text-center px-4">Selecciona un canal para comenzar</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;