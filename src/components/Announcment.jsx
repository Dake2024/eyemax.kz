import React, {useState, useEffect} from 'react';

export default function Announcement({onOpenModal}) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date();
        const targetDate = new Date(now.getFullYear(), 3, 30); // 30 апреля текущего года
        if (now > targetDate) {
            targetDate.setFullYear(targetDate.getFullYear() + 1); // Если дата прошла, берем следующий год
        }

        const difference = targetDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col gap-12 md:gap-16 items-center px-[6%]">
            {/* Заголовок */}

            <div className="hidden md:flex flex-row items-end gap-5">
                <div className="w-[776px] relative">
                    <h2 className="text-2xl md:text-5xl font-bold font-bebas mb-16 uppercase text-black">
                        УСПЕЙ ЗАПИСАТЬСЯ ДО <span className="text-[#0E3D91]">30 АПРЕЛЯ</span> И ПОЛУЧИ:
                    </h2>
                    <img src="/Banner4.svg" alt="Banner" className="absolute -top-15 -right-20"/>
                    {/* Блок 1 - Скидка */}
                    <img src="/Banner1.svg" alt="Banner"/>
                </div>

                <div className="flex flex-col gap-5">
                    <img src="/Banner2.svg" alt="Banner"/>

                    {/* Блок 3 - Консультация */}
                    <img src="/Banner3.svg" alt="Banner"/>
                </div>
            </div>

            <div className="flex flex-col gap-5 md:hidden relative">
                <h2 className="w-2/3 text-4xl md:text-5xl font-bold font-bebas mb-8 uppercase text-black">
                    УСПЕЙ ЗАПИСАТЬСЯ ДО <span className="text-[#0E3D91]">30 АПРЕЛЯ</span>
                </h2>
                <h2 className="w-2/3 text-3xl md:text-5xl font-bold mb-2 uppercase text-black font-bebas">И ПОЛУЧИ:</h2>
                <img src="/Banner4.svg" alt="Banner" className="absolute top-20 right-[10%] w-32"/>

                <img src="/Banner1.svg" alt="Banner"/>

                <img src="/Banner2.svg" alt="Banner"/>

                <img src="/Banner3.svg" alt="Banner"/>
            </div>

            {/* Таймер */}
            <div>
                <p className="text-center text-5xl font-bold font-bebas mb-8 hidden md:block">ОСТАЛОСЬ:</p>
                <div className="flex gap-2 md:gap-8 text-white font-bebas font-bold">
                    <div
                        className="text-center bg-[#244D97] w-28 h-28 md:w-48 md:h-48 rounded-[20px] flex flex-col items-center justify-center">
                        <div className="text-6xl md:text-8xl">{timeLeft.days}</div>
                        <div className="text-3xl md:text-4xl uppercase">Дней</div>
                    </div>
                    <div
                        className="text-center bg-[#244D97] w-28 h-28 md:w-48 md:h-48 rounded-[20px] flex flex-col items-center justify-center">
                        <div className="text-6xl md:text-8xl font-bold">{timeLeft.hours}</div>
                        <div className="text-3xl md:text-4xl uppercase">Часов</div>
                    </div>
                    <div
                        className="text-center bg-[#244D97] w-28 h-28 md:w-48 md:h-48 rounded-[20px] flex flex-col items-center justify-center">
                        <div className="text-6xl md:text-8xl font-bold">{timeLeft.minutes}</div>
                        <div className="text-3xl md:text-4xl uppercase">Минут</div>
                    </div>
                </div>
            </div>

            <button
                onClick={onOpenModal}
                className="md:hidden w-max px-20 py-6 bg-gradient-to-r from-[#3480D4] to-[#5056DC] shadow-[0px_2px_10px_4px_rgba(101,170,243,0.5)] rounded-xl text-2xl text-white uppercase leading-none cursor-pointer">
                Записаться
            </button>
        </div>
    );
}