import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#COCOCO] text-white mb-12 mt-12 md:mt-20 px-[6%] pb-[3%]">
            <div className="flex gap-5">
                <div className="flex flex-col gap-6 md:gap-8 w-full rounded-xl border-2 border-[#D4E1F8] p-8 md:p-12 font-bebas">
                    {/* Заголовок */}
                    <h2 className="text-3xl md:text-5xl text-black font-bold uppercase">
                        НАШИ <span className="text-[#0E3D91]">КОНТАКТЫ</span>
                    </h2>

                    <div className="flex gap-4 items-center">
                        <img
                            src="/Phone1.svg"
                            alt="Contacts"
                            className="h-7 md:h-10" // Добавил размеры для иконки
                        />
                        <a
                            href="tel:+77088008778"
                            className="text-black text-3xl md:text-4xl leading-[110%] tracking-[0.01em] font-bebas hover:opacity-80 transition-opacity"
                        >
                            +7 708 800 8778
                        </a>
                    </div>

                    <div className="flex gap-3 md:gap-2 items-center">
                        <a href="#" className="bg-[#135EC8] h-12 w-12 md:h-16 md:w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Insta1.svg"
                                alt="Instagram"
                                className="h-8 md:h-12"
                            />
                        </a>
                        <a href="#" className="bg-[#135EC8] h-12 w-12 md:h-16 md:w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Wp1.svg"
                                alt="Whatsapp"
                                className="h-8 md:h-12"
                            />
                        </a>
                        <a href="#" className="bg-[#135EC8] h-12 w-12 md:h-16 md:w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Yt1.svg"
                                alt="YouTube"
                                className="h-8 md:h-12"
                            />
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-8 w-full mx-auto rounded-xl border-2 border-[#D4E1F8] p-12">
                    {/* Заголовок */}
                    <h2 className="font-bebas text-4xl md:text-5xl text-black font-bold uppercase">
                        НАШ <span className="text-[#0E3D91]">АДРЕС</span>
                    </h2>

                    <div className="flex gap-4 items-center">
                        <img
                            src="/Address1.svg"
                            alt="Contacts"
                            className="h-8 md:h-10" // Добавил размеры для иконки
                        />
                        <a
                            href="#"
                            className="text-black text-4xl leading-[110%] tracking-[0.01em] font-bebas hover:opacity-80 transition-opacity"
                        >
                            УЛ. ВАЛОВЛАОВ 43/2
                        </a>
                    </div>

                    <div className="flex gap-2 items-center">
                        <a href="#" className="bg-[#135EC8] h-16 w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Address2.svg"
                                alt="Map"
                            />
                        </a>
                        <a href="#" className="bg-[#135EC8] h-16 w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Address3.svg"
                                alt="Map"
                            />
                        </a>
                        <a href="#" className="bg-[#135EC8] h-16 w-16 rounded-[10px] flex items-center justify-center">
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}