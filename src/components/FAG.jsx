import {useState} from "react";

const faqData = [
    {
        question: "СКОЛЬКО ДЛИТЬСЯ ЛЕЧЕНИЕ?",
        answer:
            "Аваавыфвывфывавававававыфвывфывавыфвыв",
    },
    {
        question: "КАК ПОДГОТОВИТЬСЯ К ПРОЦЕДУРЕ?",
        answer: `Ответ на второй вопрос`,
    },
    {
        question: "КАКОВА СТОИМОСТЬ ЛЕЧЕНИЯ?",
        answer: `Ответ на третий вопрос`,
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="mt-20 md:mt-44 w-full md:w-max md:px-0 px-[6%]">
            <div className="mb-6 lg:mb-16 relative">
                <h2 className="text-3xl md:text-5xl text-black font-bold">ЧАСТО ЗАДОВАЕМЫЕ <span
                    className="text-[#0E3D91]">ВОПРОСЫ</span></h2>
                <img src="/Faq1.svg" alt="FAG" className="hidden md:block absolute -top-25 -right-45"/>
                <img src="/Faq1.svg" alt="FAG" className="block md:hidden w-20 absolute right-5 top-5"/>
            </div>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="mb-2 md:mb-4 last:mb-0">
                        <div className="bg-[#69A7FB] rounded-xl overflow-hidden">
                            <button
                                className="cursor-pointer flex justify-between items-center w-full bg-[#3689FB] text-white py-4 px-6 font-bold text-xl text-left focus:outline-none rounded-xl"
                                onClick={() => toggleFAQ(index)}
                            >
        <span className="break-words whitespace-pre-line text-left">
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
                            {openIndex === index && (
                                <div
                                    className="bg-[#69A7FB] py-4 px-6 text-white rounded-b-xl break-words whitespace-pre-line"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
