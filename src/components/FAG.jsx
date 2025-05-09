import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Variants for FAQ answer animation
const answerVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    }
};

const faqData = [
    {
        question: "Когда можно водить машину, пользоваться телефоном, смотреть ТВ?",
        answer:
            "- Гаджетами можно пользоваться уже на следующий день без каких либо ограничений! Можно приезжать за рулем на послеоперационный осмотр на следующий день после операции.",
    },
    {
        question: "Можно ли делать коррекцию при беременности?",
        answer: `- Коррекция зрения во времени беременности противопоказана. Можно проводить операцию через 3 месяца после родов.`,
    },
    {
        question: "Когда можно заниматься спортом?",
        answer: `При методике Femto LASIK: через 2 недели.
При методике SMILE PRO: уже на следующий день вы можете заниматься любым видом спорта, кроме плавания.`,
    },
    {
        question: "Когда возвращаться к работе?",
        answer: `Если у Вас офисная работа, то уже на следующий день после операции.
– При необходимости выдаём больничный.`,
    },
    {
        question: "Больно ли? Нужен ли наркоз?",
        answer: `– Нет. Анестезия обеспечивается только за счет глазных капель, без уколов и общего наркоза.`,
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div id="faq" className="mt-20 md:mt-44 w-full md:w-full px-[6%] font-gilroy">
            <div className="mb-6 lg:mb-16 relative">
                <h2 className="w-[80%] text-[40px] md:text-[64px] font-bebas text-black font-bold leading-none">
                    ЧАСТО ЗАДОВАЕМЫЕ <span className="text-[#0E3D91]">ВОПРОСЫ</span>
                </h2>
                <img src="/Faq1.svg" alt="FAQ" className="hidden md:block absolute -top-25 right-0" />
                <img src="/Faq1.svg" alt="FAQ" className="block md:hidden w-20 absolute max-[374px]:right-0 right-10 -top-5" />
            </div>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="mb-2 md:mb-4 last:mb-0">
                        <div className="bg-[#69A7FB] rounded-xl overflow-hidden">
                            <button
                                className="cursor-pointer flex justify-between items-center w-full bg-[#3689FB] text-white py-4 px-6 font-bold text-[20px] md:text-[28px] text-left focus:outline-none rounded-xl"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="break-words whitespace-pre-line text-left font-bebas">
                                    {faq.question}
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                    {openIndex === index ? (
                                        <img src="/Close1.svg" alt="Close" className="h-8 w-8" />
                                    ) : (
                                        <img src="/Open1.svg" alt="Open" className="h-8 w-8" />
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="bg-[#69A7FB] overflow-hidden py-4 px-6 text-[18px] md:text-[24px] text-white font-gilroy rounded-b-xl break-words whitespace-pre-line"
                                        variants={answerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;