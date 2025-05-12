import React, { useEffect } from 'react'; // Добавляем useEffect
import Hero from "../components/Hero.jsx";
import Banners from "../components/Banners.jsx";
import Steps from "../components/Steps.jsx";
import Request from "../components/Request.jsx";
import Reviews from "../components/Reviews.jsx";
import Announcement from "../components/Announcment.jsx";
import FAG from "../components/FAG.jsx";
import Contact from "../components/Contact.jsx";

const LandingPage = ({ onOpenModal }) => {
  // Добавляем эффект для инициализации пикселя
  useEffect(() => {
    // Проверяем загрузился ли пиксель
    const initPixel = () => {
      if (typeof fbq === 'function') {
        fbq('init', '1157267149417924');
        fbq('track', 'PageView');
      } else {
        // Если не загрузился - проверяем снова через 500мс
        setTimeout(initPixel, 500);
      }
    };

    // Первоначальная инициализация
    if (!window.fbq) {
      window.fbq = function() {
        window.fbq.callMethod ?
        window.fbq.callMethod.apply(window.fbq, arguments) :
        window.fbq.queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
    }

    initPixel();

    // Очистка при размонтировании (опционально)
    return () => {
      if (typeof fbq === 'function') {
        fbq('track', 'PageView');
      }
    };
  }, []); // Пустой массив - выполняется только при монтировании

  return (
    <>
      <Hero onOpenModal={onOpenModal}/>
      <Banners onOpenModal={onOpenModal}/>
      <Steps onOpenModal={onOpenModal}/>
      <div className="w-full flex justify-center">
        <Request onOpenModal={onOpenModal}/>
      </div>
      <Reviews onOpenModal={onOpenModal}/>
      <Announcement onOpenModal={onOpenModal}/>
      <div className="w-full flex justify-center">
        <FAG onOpenModal={onOpenModal}/>
      </div>
      <Contact onOpenModal={onOpenModal}/>

      {/* Добавляем noscript-тэг */}
      <noscript>
        <img
          height="1"
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1157267149417924&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
};

export default LandingPage;