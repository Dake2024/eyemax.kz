import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal.jsx";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // TikTok Pixel вставка
    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
            !function (w, d, t) {
              w.TiktokAnalyticsObject = t;
              var ttq = w[t] = w[t] || [];
              ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
              ttq.setAndDefer = function (t, e) {
                t[e] = function () {
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                }
              };
              for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
              ttq.instance = function (t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
                return e
              };
              ttq.load = function (e, n) {
                var r = "https://analytics.tiktok.com/i18n/pixel/events.js",
                    o = n && n.partner;
                ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = r;
                ttq._t = ttq._t || {}, ttq._t[e] = +new Date;
                ttq._o = ttq._o || {}, ttq._o[e] = n || {};
                var a = document.createElement("script");
                a.type = "text/javascript", a.async = !0, a.src = r + "?sdkid=" + e + "&lib=" + t;
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(a, s)
              };
              ttq.load('D11BDNJC77U3RR3TOG00');
              ttq.page();
            }(window, document, 'ttq');
        `;
        script.type = "text/javascript";
        document.head.appendChild(script);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9]">
            <div className={`sticky top-0 z-50 transition-all duration-50 bg-transparent`}>
                <div className="md:px-[6%] md:py-[3%]">
                    <Header onOpenModal={handleOpenModal} />
                </div>
            </div>

            <main className="flex-grow z-1">
                <Routes>
                    <Route
                        path="/"
                        element={<LandingPage onOpenModal={handleOpenModal} />}
                    />
                    <Route
                        path="/request"
                        element={<LandingPage onOpenModal={handleOpenModal} />}
                    />
                </Routes>
            </main>

            <Footer />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default App;
