import React, {useState, useEffect} from 'react';

const Hero = ({onOpenModal}) => {
    const scrollToReviews = () => {
        const reviewsSection = document.getElementById('reviews');
        if (reviewsSection) {
            reviewsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [showEye, setShowEye] = useState(true);

    // Automatically hide the eye after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowEye(false);
        }, 4000); // 2 seconds
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div className="pt-2 md:pt-6 md:pb-24 md:px-[6%] bg-[#C0C0C0] md:bg-[#F9F9F9]">
                <div className="hidden md:flex flex-row gap-24 items-center">
                    <div className="flex flex-col gap-8 font-gilroy">
                        <p className="text-6xl font-semibold uppercase text-[#47484A] leading-18 z-50">Верни <span
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
                                <button onClick={scrollToReviews} className="w-full rounded-[11px] bg-white py-3 cursor-pointer">
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
                    <p className="flex flex-col items-center max-[374px]:text-[28px] text-[34px] font-russo text-white leading-12"><span>Верни <span
                        className="text-white bg-[#1B0ED4] rounded-lg max-[374px]:text-[26px] text-[33px] px-3 py-1 leading-none">100% зрение</span></span><span>за 15 минут</span></p>
                    <div
                        className={`transition-all duration-500 md:blur-none ${
                            showEye ? 'blur-sm' : 'blur-none'
                        }`}
                    >
                        <img src="/Hero3.svg" alt="Hero3" className="absolute bottom-0" />
                        <img src="/Hero111.svg" alt="Hero2" className="" />
                        <div className="absolute flex flex-col items-center bottom-15">
                            <p className="mx-[6%] bg-[#808080B0] text-white max-[374px]:p-3 p-4 rounded-xl border-white border-1 max-[374px]:text-xl text-2xl font-bold font-bebas" style={{ backdropFilter: 'blur(13.399999618530273px)' }}><span className="text-[#E4FF35]">Лазерная коррекция</span> зрения “Femto LASIK” — по суперцене <span className="text-[#E4FF35]">410 000 тг</span> за оба глаза только <span className="text-[#E4FF35]">до конца мая!</span></p>
                            <p className="text-center text-red-600 text-[32px] font-bold font-bebas bg-white w-full p-1 mt-2 shadow-[0px_2px_10px_4px_rgba(101,170,243,0.5)]">Ограничения по возрасту 18-45! Город Астана!</p>
                            <button
                                onClick={onOpenModal}
                                className="mx-[6%] mt-2 rounded-xl bg-gradient-to-r from-[#3480D4] to-[#5056DC] shadow-[0px_2px_10px_4px_rgba(101,170,243,0.5)] w-max max-[374px]:py-3 max-[374px]:px-8 py-5 px-12 shadow-[0px 2px 10px 4px #65AAF380]">
                                <p className="text-white font-bold text-2xl font-bebas uppercase">Получить консультацию</p>
                            </button>
                        </div>
                    </div>
                </div>
            <img
                src="/Eye1.png"
                alt="Eye Animation"
                className={`absolute top-[40%] left-[17%] z-10 md:hidden ${
                    showEye ? 'animate-eye' : 'hidden'
                }`}
            />
        </div>
    );
};

export default Hero;