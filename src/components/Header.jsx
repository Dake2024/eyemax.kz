import {useState} from 'react';

export default function Header({onOpenModal}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="md:bg-white bg-[#C0C0C0] sticky top-0 z-50 md:rounded-[20px] md:shadow-[0_0_24px_0_rgba(238,238,229,0.1)]">
            <div className="container mx-auto md:px-8 md:py-8 px-6 py-12 font-gilroy">
                <div className="flex justify-between items-center">
                    {/* Логотип */}
                    <div className="flex items-center">
                        <a href="#" className="flex items-center">
                            <img
                                src="/Logo1.svg"
                                alt="EY3MAX Logo"
                                className="h-8 md:h-9 hidden md:block"
                            />
                            <img
                                src="/Logo2.svg"
                                alt="EY3MAX Logo"
                                className="h-6 block md:hidden"
                            />
                        </a>
                    </div>

                    {/* Десктопное меню (скрывается на мобильных) */}
                    <nav className="hidden md:flex space-x-8 text-black text-[16px] font-medium">
                        <a href="#about">
                            O нас
                        </a>
                        <a href="#steps">
                            Этапы
                        </a>
                        <a href="#reviews">
                            Отзывы
                        </a>
                        <a href="#promo">
                            Акция
                        </a>
                        <a href="#faq">
                            FAQ
                        </a>
                    </nav>

                    <button
                        onClick={onOpenModal}
                        className="hidden md:block bg-[#2968F6] text-white py-3 px-11 rounded-xl text-lg font-medium transition-colors cursor-pointer"
                    >
                        Записаться
                    </button>

                    {/* Кнопка мобильного меню */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <img src="/Sidebar.svg" alt="Sidebar" />
                    </button>
                </div>

                {/* Мобильное меню */}
                {isMenuOpen && (
                    <div className="md:hidden mt-8 pb-2 space-y-3 text-white text-[16px] font-medium">
                        <a
                            href="#about"
                            className="block py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            O нас
                        </a>
                        <a
                            href="#steps"
                            className="block py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Этапы
                        </a>
                        <a
                            href="#reviews"
                            className="block py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Отзывы
                        </a>
                        <a
                            href="#promo"
                            className="block py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Акция
                        </a>
                        <a
                            href="#faq"
                            className="block py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQ
                        </a>
                        <button
                            onClick={onOpenModal}
                            className="block mt-4 bg-[#2968F6] text-white rounded-xl font-medium w-full transition-colors py-3 px-11 text-lg cursor-pointer"
                        >
                            Записаться
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}