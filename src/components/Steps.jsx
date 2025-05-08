import React from 'react';

const Steps = () => {
    return (
        <div>
            <div className="py-0 md:py-16 px-[6%] w-full">
                {/* Заголовок */}
                <h2 className="flex flex-col text-3xl md:text-5xl font-bold text-black mb-12 font-bebas">
                    ВАШ ПУТЬ <span>К <span className="text-[#0E3D91]">ИДЕАЛЬНОМУ ЗРЕНИЮ</span></span>
                </h2>

                {/* Шаги */}
                <div className="relative w-full mx-auto font-gilroy">
                    {/* Вертикальная линия */}
                    <div className="absolute left-0 top-0 bottom-0 md:bottom-12 bg-[#0E3D91] w-1 md:w-2 rounded-3xl"></div>

                   <div className="pt-20 pl-16 relative">
                       {/* Шаг 1 */}
                       <div className="relative flex items-start gap-8 mb-8">
                           <div className="flex flex-row justify-center">
                               <div className="absolute -left-16 top-5 bg-[#0E3D91] w-10 h-1 md:w-20 md:h-2"></div>
                               <div className="flex-shrink-0 bg-[#0E3D91] text-white rounded-lg px-3 md:px-6 py-2 font-extrabold text-xl md:text-2xl">
                                   Шаг №1
                               </div>
                           </div>
                           <div>
                               <h3 className="text-xl md:text-3xl font-extrabold text-[#0E3D91] mb-2">
                                   Полная диагностика
                               </h3>
                               <p className="text-black text-lg">
                                   Узнайте, подходит ли вам лазерная коррекция, выберите оптимальный метод вместе с врачом.
                               </p>
                           </div>
                       </div>

                       {/* Шаг 2 */}
                       <div className="relative flex items-start gap-8 mb-8">
                           <div className="flex flex-row justify-center">
                               <div className="absolute -left-16 top-5 bg-[#0E3D91] w-10 h-1 md:w-20 md:h-2"></div>
                               <div className="flex-shrink-0 bg-[#0E3D91] text-white rounded-lg px-3 md:px-6 py-2 font-extrabold text-xl md:text-2xl">
                                   Шаг №2
                               </div>
                           </div>
                           <div>
                               <h3 className="text-xl md:text-3xl font-extrabold text-[#0E3D91] mb-2">
                                   Быстрая зона на операцию
                               </h3>
                               <p className="text-black text-lg">
                                   Планируйте операцию уже на следующий день после диагностики!
                               </p>
                           </div>
                       </div>

                       {/* Шаг 3 */}
                       <div className="relative flex items-start gap-8 mb-8">
                           <div className="flex flex-row justify-center">
                               <div className="absolute -left-16 top-5 bg-[#0E3D91] w-10 h-1 md:w-20 md:h-2"></div>
                               <div className="flex-shrink-0 bg-[#0E3D91] text-white rounded-lg px-3 md:px-6 py-2 font-extrabold text-xl md:text-2xl">
                                   Шаг №3
                               </div>
                           </div>
                           <div>
                               <h3 className="text-xl md:text-3xl font-extrabold text-[#0E3D91] mb-2">
                                   Минимальная подготовка
                               </h3>
                               <p className="text-black text-lg">
                                   Сдайте всего 3 анализа (ВИЧ, гепатит, микрофлора глаза) – это можно сделать прямо у нас в клинике.
                               </p>
                           </div>
                       </div>

                       {/* Шаг 4 */}
                       <div className="relative flex items-start gap-8">
                           <div className="flex flex-row justify-center">
                               <div className="absolute -left-16 top-5 bg-[#0E3D91] w-10 h-1 md:w-20 md:h-2 rounded-3xl"></div>
                               <div className="flex-shrink-0 bg-[#0E3D91] text-white rounded-lg px-3 md:px-6 py-2 font-extrabold text-xl md:text-2xl">
                                   Шаг №4
                               </div>
                           </div>
                           <div>
                               <h3 className="text-xl md:text-3xl font-extrabold text-[#0E3D91] mb-2">
                                   Новое зрение без очков и линз
                               </h3>
                               <p className="text-black text-lg">
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