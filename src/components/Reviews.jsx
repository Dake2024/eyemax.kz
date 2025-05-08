import React from 'react';

const Reviews = () => {
    return (
        <div className="py-0 md:py-16 my-20 px-[6%]">
            <div className="flex relative w-[75%]">
                <p className="text-4xl md:text-5xl font-bold font-bebas uppercase">Что говорят <span className="text-[#0E3D91]">наши пациенты</span></p>
                <img src="/Review1.svg" alt="Review" className="hidden md:block absolute right-0 -top-35" />
                <img src="/Review1.svg" alt="Review" className="block md:hidden absolute -bottom-0 -right-20 w-32" />
            </div>
        </div>
    );
};

export default Reviews;