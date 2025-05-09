import React from 'react';

const Request = ({onOpenModal}) => {
    return (
        <div className="flex flex-col py-12 gap-12 md:gap-16 items-center px-[6%] md:px-0">
            <div className="flex flex-row items-center rounded-lg border-2 border-[#0E3D91] h-[110px] md:h-[165px]">
                <img src="/Steps2.svg" alt="Steps" className="hidden md:block md:h-[125%] max-[374px]:mb-0 mb-10"/>
                <img src="/Doc.png" alt="Steps" className="block md:hidden max-[374px]:h-[100%] max-[767px]:h-[100%] max-[374px]:mt-0 mt-0"/>
                <p className="hidden md:flex text-[32px] font-medium flex-col p-4 font-gilroy">
                    <span>
                        Мы сопровождаем вас <span className="text-[#0E3D91]">весь путь</span> —
                    </span>
                    <span>
                        до <span className="text-[#0E3D91]">полного восстановления</span> зрения
                    </span>
                </p>
                <p className="md:hidden max-[374px]:text-[12px] max-[767px]:text-[18px] font-medium p-2 font-gilroy leading-tight">
                    Мы сопровождаем вас <span className="text-[#0E3D91]">весь путь</span> —
                    до <span className="text-[#0E3D91]">полного восстановления</span> зрения
                </p>
            </div>

            <button
                onClick={onOpenModal}
                className="rounded-xl bg-gradient-to-r from-[#3480D4] to-[#5056DC] shadow-[0px_2px_10px_4px_rgba(101,170,243,0.5)] text-white font-bold font-bebas text-2xl md:text-4xl py-4 px-12 cursor-pointer w-full md:w-max">
                Записаться на диагностику
            </button>
        </div>
    );
};

export default Request;