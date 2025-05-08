import React from 'react';

const Reviews = () => {
    return (
        <div id="reviews" className="py-0 md:py-16 my-20 px-[6%]">
            <div className="flex relative w-[75%]">
                <p className="text-[40px] md:text-[64px] font-bold font-bebas uppercase leading-none">Что говорят <span className="text-[#0E3D91]">наши пациенты</span></p>
                <img src="/Review1.svg" alt="Review" className="hidden md:block absolute right-30 -top-35" />
                <img src="/Review1.svg" alt="Review" className="block md:hidden absolute -bottom-0 -right-20 w-32" />
            </div>
        </div>
    );
};

export default Reviews;