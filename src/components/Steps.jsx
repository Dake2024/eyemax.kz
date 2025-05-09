import React from 'react';

const Steps = () => {
    return (
        <div id="steps">
            <div className="pt-2 md:py-16 px-[6%] w-full">
                {/* Заголовок */}
                <h2 className="flex flex-col text-[40px] md:text-[64px] font-bold text-black mb-12 font-bebas leading-none">
                    ВАШ ПУТЬ <span>К <span className="text-[#0E3D91]">ИДЕАЛЬНОМУ ЗРЕНИЮ</span></span>
                </h2>

                {/* Шаги */}
                <div className="relative w-full mx-auto font-gilroy">
                    {/* Вертикальная линия */}
                    <div
                        className="absolute left-0 top-0 bottom-0 md:bottom-12 bg-[#0E3D91] w-1 md:w-2 rounded-3xl"></div>

                    <div className="pt-20 pl-16 relative">
                        {/* Шаг 1 */}
                        <div className="relative flex flex-row items-start gap-3 md:gap-8 mb-8">
                            <div className="flex flex-row justify-end md:justify-center">
                                <div className="absolute -left-16 top-5 bg-[#0E3D91] w-8 h-1 md:w-20 md:h-2"></div>
                                <div
                                    className="flex-shrink-0 bg-[#0E3D91] text-white rounded-lg px-3 md:px-6 py-2 font-bold text-[20px] md:text-[32px]">
                                    Шаг №1
                                </div>
                            </div>
                            <div>
                                <h3 className="max-[374px]:text-[18px] text-[22px] md:text-[40px] font-bold text-[#0E3D91] mb-2">
                                    Полная диагностика
                                </h3>
                                <p className="text-black max-[374px]:text-[14px] text-[18px] md:text-[26px] flex flex-col">
                                    Узнайте, подходит ли вам лазерная коррекция, выберите<span> оптимальный метод вместе с врачом.</span>
                                </p>
                            </div>
                        </div>

                        {/* Шаг 2 */}
                        <div className="relative flex items-start gap-3 md:gap-8 mb-8">
                            <div className="flex flex-row justify-end md:justify-center">
                                <div className="absolute -left-16 top-5 bg-[#0E3D91] w-8 h-1 md:w-20 md:h-2"></div>
                                <div
                                    className="flex-shrink-0 bg-[#0E3D91] text-white rounded-lg px-3 md:px-6 py-2 font-bold text-[20px] md:text-[32px]">
                                    Шаг №2
                                </div>
                            </div>
                            <div>
                                <h3 className="max-[374px]:text-[18px] text-[22px] md:text-[40px] font-extrabold text-[#0E3D91] mb-2">
                                    Быстрая зона на операцию
                                </h3>
                                <p className="text-black max-[374px]:text-[14px] text-[18px] md:text-[26px]">
                                    Планируйте операцию уже на следующий день после диагностики!
                                </p>
                            </div>
                        </div>

                        {/* Шаг 3 */}
                        <div className="relative flex items-start gap-3 md:gap-8 mb-8">
                            <div className="flex flex-row justify-end md:justify-center">
                                <div className="absolute -left-16 top-5 bg-[#0E3D91] w-8 h-1 md:w-20 md:h-2"></div>
                                <div
                                    className="flex-shrink-0 bg-[#0E3D91] text-white rounded-lg px-3 md:px-6 py-2 font-extrabold text-[20px] md:text-[32px]">
                                    Шаг №3
                                </div>
                            </div>
                            <div>
                                <h3 className="max-[374px]:text-[18px] text-[22px] md:text-[40px] font-extrabold text-[#0E3D91] mb-2">
                                    Минимальная подготовка
                                </h3>
                                <p className="text-black max-[374px]:text-[14px] text-[18px] md:text-[26px] flex flex-col">
                                    Сдайте всего 3 анализа (ВИЧ, гепатит, микрофлора глаза) – это можно <span>сделать прямо у
                                    нас в клинике.</span>
                                </p>
                            </div>
                        </div>

                        {/* Шаг 4 */}
                        <div className="relative flex items-start gap-3 md:gap-8">
                            <div className="flex flex-row justify-end md:justify-center">
                                <div
                                    className="absolute -left-16 top-5 bg-[#0E3D91] w-8 h-1 md:w-20 md:h-2 rounded-3xl"></div>
                                <div
                                    className="flex-shrink-0 bg-[#0E3D91] text-white rounded-lg px-3 md:px-6 py-2 font-extrabold text-[20px] md:text-[32px]">
                                    Шаг №4
                                </div>
                            </div>
                            <div>
                                <h3 className="max-[374px]:text-[18px] text-[22px] md:text-[40px] font-extrabold text-[#0E3D91] mb-2">
                                    Новое зрение без очков и линз
                                </h3>
                                <p className="text-black max-[374px]:text-[14px] text-[18px] md:text-[26px]">
                                    Уже на следующий день после коррекции – вы видите мир чётко и ясно!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;