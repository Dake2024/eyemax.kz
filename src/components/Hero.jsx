import React from 'react';

const Hero = ({onOpenModal}) => {
    return (
        <div className="pt-2 md:pt-12 md:pb-24 md:px-[6%] bg-[#C0C0C0] md:bg-[#F9F9F9]">
            <div className="hidden md:flex flex-row gap-24 items-center">
                <div className="flex flex-col gap-8">
                    <p className="text-6xl font-gilroy font-semibold uppercase text-[#47484A] leading-18">Верни <span
                        className="text-white bg-[#2968F6] rounded-xl px-4 leading-none">100% зрение</span> за 15 минут</p>
                    <div className="border-b-2 bg-[#D8D8D8]"></div>
                    <p className="text-2xl font-bold"><span className="text-[#2968F6]">Лазерная коррекция</span> зрения “Femto LASIK” — по суперцене <span className="text-[#2968F6]">410 000 тг</span> за оба глаза только <span className="text-[#2968F6]">до конца мая!</span></p>
                    <div className="flex flex-row gap-5 w-full">
                        <button
                            onClick={onOpenModal}
                            className="rounded-xl bg-gradient-to-r from-[#3480D4] to-[#5056DC] cursor-pointer shadow-[0px_2px_10px_4px_rgba(101,170,243,0.5)] w-full py-3 shadow-[0px 2px 10px 4px #65AAF380]">
                            <p className="text-white font-bold text-2xl">Получить консультацию</p>
                        </button>
                        <div className="w-[80%] rounded-xl p-[2px] bg-gradient-to-r from-[#5056DC] to-[#3480D4]">
                            <button className="w-full rounded-[11px] bg-white py-3">
                                <p className="text-2xl bg-gradient-to-r from-[#3480D4] to-[#5056DC] bg-clip-text text-transparent">
                                    Смотреть отзывы
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <img src="/Hero1.svg" alt="Hero" />
            </div>
            <div className="flex flex-col md:hidden w-full justify-center relative">
                <p className="flex flex-col items-center text-3xl font-semibold uppercase text-white leading-10"><span>Верни <span
                    className="text-white bg-[#1B0ED4] rounded-lg px-4 pb-1">100% зрение</span></span><span>за 15 минут</span></p>
                <img src="/Hero111.svg" alt="Hero2" className="" />
                <img src="/Hero3.svg" alt="Hero3" className="absolute bottom-0" />
                <div className="px-[6%] absolute flex flex-col items-center bottom-20">
                    <p className="bg-[#808080B0] text-white p-6 rounded-xl border-white border-1 text-xl font-bold font-bebas" style={{ backdropFilter: 'blur(13.399999618530273px)' }}><span className="text-[#E4FF35]">Лазерная коррекция</span> зрения “Femto LASIK” — по суперцене <span className="text-[#E4FF35]">410 000 тг</span> за оба глаза только <span className="text-[#E4FF35]">до конца мая!</span></p>
                    <button
                        onClick={onOpenModal}
                        className="mt-3 rounded-xl bg-gradient-to-r from-[#3480D4] to-[#5056DC] shadow-[0px_2px_10px_4px_rgba(101,170,243,0.5)] w-max py-5 px-8 shadow-[0px 2px 10px 4px #65AAF380]">
                        <p className="text-white font-bold text-xl uppercase">Получить консультацию</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;