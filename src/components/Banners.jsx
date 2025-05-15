import React from 'react';

export default function WhyEyemax() {
    const benefits = [
        {
            id: '01',
            title: 'ОПЫТНЫЕ ХИРУРГИ',
            description: '10+ ЛЕТ УСПЕШНОЙ ПРАКТИКИ'
        },
        {
            id: '02',
            title: 'БЕЗ',
            description: 'БОЛИ И НАРКОЗА'
        },
        {
            id: '03',
            title: 'БЕЗ ГОСПИТАЛИЗАЦИИ',
            description: 'ОТПУСКАЕМ ДОМОЙ В ТОТ ЖЕ ДЕНЬ'
        },
        {
            id: '04',
            title: 'ПОЖИЗНЕННОЕ',
            description: 'СОПРОВОЖДЕНИЕ ОТ КОМАНДЫ EYEMAX'
        },
        {
            id: '05',
            title: 'РАССРОЧКА БЕЗ ПЕРЕПЛАТ',
            description: 'КАSPI 0-0-24 — УДОБНЫЕ УСЛОВИЯ ДЛЯ ВСЕХ'
        },
    ];

    return (
        <div id="about" className="relative md:pt-16">
            <img src="/Side2.svg" alt="Side" className="hidden md:block absolute right-0 -top-30" />
            <img src="/Side2.svg" alt="Side" className="block md:hidden absolute right-0 -top-30 w-32" />
            <section className="py-16 md:pb-8 bg-white px-[6%]">
                <div className="container mx-auto w-full">
                    {/* Заголовок и подзаголовок */}
                    <div className="mb-8">
                        <h1 className="text-[40px] md:text-[64px] font-bebas text-[#0E3D91] font-bold uppercase mb-2 md:mb-4">
                            SMILE PRO
                        </h1>
                        <p className="text-xl md:text-4xl text-black font-gilroy">
                            Новейшая технология лазерной коррекции зрения
                        </p>
                    </div>

                    {/* Карточки */}
                    <div className="flex md:flex-row flex-col gap-6 w-full mx-auto">
                        {/* Карточка 1 */}
                        <div className="bg-[#FAFCFD] border-1 border-[#314F86] bg-opacity-10 rounded-2xl p-6 md:p-8 md:h-72 md:w-full flex md:flex-col relative">
                            <p className="text-2xl md:text-5xl font-bold text-[#314F86] w-[75%] font-bebas">
                                ПЕРЕДОВАЯ ЛАЗЕРНАЯ ТЕХНОЛОГИЯ
                            </p>
                            <img
                                src="/Banner5.svg" // Замените на путь к изображению
                                alt="Лазерная технология"
                                className="md:w-60 w-36 md:absolute right-8 bottom-8"
                            />
                        </div>

                        {/* Карточка 2 */}
                        <div className="bg-[#FAFCFD] border-1 border-[#314F86] bg-opacity-10 rounded-2xl p-6 md:p-8 md:h-72 md:w-full flex md:flex-col relative">
                            <p className="text-2xl md:text-5xl font-bold text-[#314F86] w-[75%] font-bebas">
                                ПРОЦЕДУРА ДЛИТСЯ ВСЕГО 9 СЕКУНД!
                            </p>
                            <img
                                src="/Banner6.svg" // Замените на путь к изображению
                                alt="Процедура длится всего 9 секунд"
                                className="md:w-60 w-36 md:absolute right-8 bottom-8"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <img src="/Side1.svg" alt="Side" className="hidden md:block absolute left-0 top-96" />
            <img src="/Side1.svg" alt="Side" className="block md:hidden absolute left-0 bottom-1/3 w-32" />
            <section className=" pb-12 md:py-16 bg-white px-[6%]">
                <div className="container mx-auto w-full">
                    {/* Заголовок секции */}
                    <div className="mb-8">
                        <h2 className="text-[40px] md:text-[64px] font-bebas text-[#0E3D91] font-bold uppercase mb-2 md:mb-4">
                            ПОЧЕМУ <span className="text-black">EYEMAX?</span>
                        </h2>
                        <p className="text-xl md:text-4xl text-black font-gilroy">
                            С нами это просто и безопасно
                        </p>
                    </div>

                    {/* Список преимуществ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`bg-[#314F86] rounded-2xl p-6 md:p-8 border border-[#D4E1F8] hover:shadow-lg transition-all ${
                                    index === 4 ? 'md:col-span-2 md:justify-self-center md:max-w-[50%]' : ''
                                }`}
                            >
                                <div className="flex items-start gap-4 font-bebas">
                                    <div className="bg-white rounded-full py-3 px-4">
                                        <p className="text-[#314F86] text-[22px] md:text-[32px] font-bold leading-none">{benefit.id}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[21px] md:text-[32px] font-bold text-[#E4FF35]">
                                            {benefit.title}
                                        </h3>
                                        {benefit.description && (
                                            <p className="text-white text-[21px] md:text-[32px] font-bold">
                                                {benefit.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <img src="/Side3.svg" alt="Side" className="hidden md:block absolute right-0 bottom-30" />
            <img src="/Side3.svg" alt="Side" className="block md:hidden absolute right-0 bottom-0 w-32" />
        </div>
    );
}
