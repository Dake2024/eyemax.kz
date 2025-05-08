import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal.jsx";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Передаем handleOpenModal в Header */}
            <div className="md:px-[6%] md:py-[3%] bg-[#F9F9F9]">
                <Header onOpenModal={handleOpenModal} />
            </div>

            <main className="flex-grow z-1">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <LandingPage onOpenModal={handleOpenModal} />
                        }
                    />
                    <Route
                        path="/request"
                        element={
                            <LandingPage onOpenModal={handleOpenModal} />
                        }
                    />
                </Routes>
            </main>

            <Footer />

            {/* Модальное окно */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default App;