import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        selectedService: 'Консультация'
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        let formattedValue = value;

        // If the input is empty or starts fresh, prepend '+'
        if (!value) {
            formattedValue = '+';
        } else {
            // Ensure the value starts with '7' (assuming Russian numbers)
            if (!value.startsWith('7')) {
                value = '7' + value;
            }
            // Format the number: +7 XXX XXX XX XX
            if (value.length >= 1) {
                formattedValue = `+${value.substring(0, 1)}`; // +7
                if (value.length >= 2) {
                    formattedValue += ` ${value.substring(1, 4)}`; // XXX
                    if (value.length >= 5) {
                        formattedValue += ` ${value.substring(4, 7)}`; // XXX
                        if (value.length >= 8) {
                            formattedValue += ` ${value.substring(7, 9)}`; // XX
                            if (value.length >= 10) {
                                formattedValue += ` ${value.substring(9, 11)}`; // XX
                            }
                        }
                    }
                }
            }
        }

        setFormData(prev => ({ ...prev, phone: formattedValue }));
    };

    const handlePhoneFocus = (e) => {
        // On focus, if the input is empty, set it to '+'
        if (!formData.phone) {
            setFormData(prev => ({ ...prev, phone: '+' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const digitsOnly = formData.phone.replace(/\D/g, '');
        if (digitsOnly.length !== 11) {
            setError('Номер телефона должен содержать 10 цифр');
            return;
        }
        if (!formData.name.trim()) {
            setError('Пожалуйста, укажите имя');
            return;
        }

        const payload = {
            name: formData.name,
            phone: `+${digitsOnly}`,
            service: formData.selectedService
        };

        console.log('Отправляемые данные:', payload);

        try {
            const response = await fetch('https://Dake2025.pythonanywhere.com/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Заявка успешно отправлена:', payload);
                setError('');
                onClose();
            } else {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    setError(errorData.message || 'Ошибка при отправке заявки');
                } else {
                    setError(`Ошибка сервера: ${response.status} ${response.statusText}`);
                }
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setError('Не удалось отправить заявку. Проверьте подключение.');
        }
    };

    return (
        <div className="px-[6%]">
            <div className="flex flex-col mt-6 md:mt-28 md:flex-row items-center justify-between bg-[#3889FC] rounded-xl py-12 px-8 md:py-12 md:px-16 mx-auto w-full relative">
                {/* Левая часть: текст и изображение */}
                <div className="flex items-center mb-6 md:mb-0 w-full md:w-[65%]">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className="text-white text-[40px] md:text-[64px] font-bold uppercase font-bebas leading-none">Остались вопросы?</h3>
                        <p className="text-[#AED9FF] text-[16px] md:text-[32px] w-2/3 font-gilroy">Оставьте свои данные и мы свяжемся с вами</p>
                    </div>
                    <img src="/Contacts1.svg" alt="Question Mark" className="absolute right-[37%] bottom-0 hidden md:block" />
                    <img src="/Contacts1.svg" alt="Question Mark" className="absolute right-0 top-[10%] block md:hidden w-48" />
                </div>

                {/* Правая часть: форма */}
                <div className="flex flex-col gap-6 w-full md:w-[35%] font-gilroy">
                    <div className="bg-white py-4 px-4 rounded-lg flex flex-row gap-2">
                        <img src="/user.svg" alt="user" className="h-6 w-6" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя"
                            value={formData.name}
                            onChange={handleChange}
                            className="border-none focus:outline-none w-full text-lg"
                        />
                    </div>
                    <div>
                        <div className="bg-white py-4 px-4 rounded-lg flex flex-row gap-2">
                            <img src="/call.svg" alt="phone" className="h-6 w-6" />
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                onFocus={handlePhoneFocus}
                                placeholder="+7 (___) ___-__-__"
                                className="border-none focus:outline-none w-full text-lg"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-black text-white py-4 px-4 rounded-lg font-semibold w-full text-xl font-gilroy hover:bg-gray-800 transition-colors"
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;