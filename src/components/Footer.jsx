import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#COCOCO] text-white mb-12 mt-12 md:mt-20 px-[6%] pb-[3%]">
            {/* Основной контент футера */}
            <div className="flex flex-col md:flex-row gap-5">
                {/* Контакты */}
                <div className="flex flex-col gap-6 md:gap-8 w-full rounded-xl border-2 border-[#D4E1F8] p-8 md:p-12 font-bebas">
                    <h2 className="text-[40px] md:text-[48px] text-black font-bold uppercase">
                        НАШИ <span className="text-[#0E3D91]">КОНТАКТЫ</span>
                    </h2>

                    <div className="flex gap-4 items-center">
                        <img
                            src="/Phone1.svg"
                            alt="Contacts"
                            className="h-7 md:h-10"
                        />
                        <a
                            href="tel:+77088008778"
                            className="text-black text-[32px] md:text-[40px] leading-[110%] tracking-[0.01em] font-bebas hover:opacity-80 transition-opacity"
                        >
                            +7 708 800 8778
                        </a>
                    </div>

                    <div className="flex gap-3 md:gap-2 items-center">
                        <a href="https://www.instagram.com/eyemax_astana?igsh=MWNrdGZvejIweTZ5dA== " className="bg-[#135EC8] h-12 w-12 md:h-16 md:w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Insta1.svg"
                                alt="Instagram"
                                className="h-8 md:h-12"
                            />
                        </a>
                        <a href="https://wa.me/77008008796 " className="bg-[#135EC8] h-12 w-12 md:h-16 md:w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Wp1.svg"
                                alt="Whatsapp"
                                className="h-8 md:h-12"
                            />
                        </a>
                        <a href="https://youtube.com/ @eyemax-astana?si=EhcDziv0R6xRqbgK" className="bg-[#135EC8] h-12 w-12 md:h-16 md:w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Yt1.svg"
                                alt="YouTube"
                                className="h-8 md:h-12"
                            />
                        </a>
                    </div>
                </div>

                {/* Адрес */}
                <div className="flex flex-col gap-6 md:gap-8 w-full mx-auto rounded-xl border-2 border-[#D4E1F8] p-8 md:p-12 font-bebas">
                    <h2 className="font-bebas text-[40px] md:text-[48px] text-black font-bold uppercase">
                        НАШ <span className="text-[#0E3D91]">АДРЕС</span>
                    </h2>

                    <div className="flex gap-4 items-center">
                        <img
                            src="/Address1.svg"
                            alt="Contacts"
                            className="h-7 md:h-10"
                        />
                        <a
                            href="#"
                            className="text-black text-[32px] md:text-[40px] leading-[110%] tracking-[0.01em] font-bebas hover:opacity-80 transition-opacity"
                        >
                            УЛ. КАБАНБАЙ БАТЫР 48/8
                        </a>
                    </div>

                    <div className="flex gap-2 items-center">
                        <a href="https://2gis.kz/astana/geo/70000001089686002 " className="bg-[#135EC8] h-12 w-12 md:h-16 md:w-16 rounded-[10px] flex items-center justify-center">
                            <img
                                src="/Address2.svg"
                                alt="Map"
                                className="h-8 md:h-12"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="mt-12 text-sm md:text-base text-center text-gray-400">
                <p>ФТОО «Лазерный центр Коновалова»</p>
                <p>БИН 240741018428</p>
                <p>Номер лицензии: #15012370.</p>
                <p className="mb-1">Дата выдачи: 14.03.2011</p>
                <p className="mb-1">ЕСТЬ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</p>
                <p>Политика конфиденциальность и условия обработки персональных данных</p>
            </div>
        </footer>
    );
}
