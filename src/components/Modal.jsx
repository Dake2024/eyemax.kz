import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Variants for backdrop fade effect
const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const ConsultationModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        selectedService: 'femto-lasik',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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

        setFormData((prev) => ({ ...prev, phone: formattedValue }));
    };

    const handlePhoneFocus = (e) => {
        // On focus, if the input is empty, set it to '+'
        if (!formData.phone) {
            setFormData((prev) => ({ ...prev, phone: '+' }));
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
            service: formData.selectedService === 'femto-lasik' ? 'femto lasik' : 'smile pro',
        };

        console.log('Отправляемые данные:', payload);

        try {
            await fetch('https://Dake2025.pythonanywhere.com/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            console.log('Заявка успешно отправлена:', payload);
            setError('');
            window.alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'); // Use window.alert
            onClose();
            // Reset form data
            setFormData({
                name: '',
                phone: '',
                selectedService: 'femto-lasik',
            });
        } catch (error) {
            console.error('Ошибка:', error);
            setError('Не удалось отправить заявку. Проверьте подключение.');
            window.alert('Не удалось отправить заявку. Проверьте подключение и попробуйте снова.'); // Use window.alert
        }
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 md:p-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={modalVariants}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl max-w-md w-full overflow-hidden relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="pt-3 px-6 relative">
                            <h2 className="text-black text-2xl md:text-3xl font-bold font-bebas">ОСТАВЬТЕ ЗАЯВКУ</h2>
                            <p className="text-[#0E3D91] text-2xl md:text-3xl font-bold font-bebas">И МЫ С ВАМИ СВЯЖЕМСЯ</p>
                            <button onClick={onClose} className="absolute top-6 right-6 text-black cursor-pointer">
                                <X size={32} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-4">
                                <div className="bg-white border-1 border-[#BABABA] py-2 px-2 md:py-4 md:px-4 rounded-lg flex flex-row items-center gap-2">
                                    <img src="/user.svg" alt="user" className="h-4 w-4 md:h-6 md:w-6" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Имя"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="border-none focus:outline-none w-full text-[14px] md:text-[18px]"
                                    />
                                </div>
                                <div>
                                    <div className="bg-white border-1 border-[#BABABA] py-2 px-2 md:py-4 md:px-4 rounded-lg flex flex-row items-center gap-2">
                                        <img src="/call.svg" alt="phone" className="h-4 w-4 md:h-6 md:w-6" />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            onFocus={handlePhoneFocus}
                                            placeholder="+7 (___) ___-__-__"
                                            className="border-none focus:outline-none w-full text-[14px] md:text-[18px]"
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                </div>


                                {/* Service Selection */}
                                <div className="space-y-2 border-1 border-[#BABABA] rounded-lg">
                                    <label
                                        className={`block rounded-lg p-2 md:p-4 ${formData.selectedService === 'femto-lasik' ? 'bg-[#ECF4FF]' : 'bg-white'}`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <input
                                                type="radio"
                                                name="selectedService"
                                                value="femto-lasik"
                                                checked={formData.selectedService === 'femto-lasik'}
                                                onChange={handleChange}
                                                className="h-3 w-3 md:h-5 md:w-5 text-[#0E3D91] focus:ring-[#0E3D91]"
                                            />
                                            <div>
                                                <p className="font-medium">Femto LASIK</p>
                                                <p className="text-[12px] md:text-[14px] text-gray-500">
                                                    это усовершенствованный вариант классического LASIK, при котором оба этапа операции
                                                    выполняются с помощью лазеров.
                                                </p>
                                            </div>
                                        </div>
                                    </label>

                                    <label
                                        className={`block rounded-lg p-2 md:p-4 ${formData.selectedService === 'smile-pro' ? 'bg-[#ECF4FF]' : 'bg-white'}`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <input
                                                type="radio"
                                                name="selectedService"
                                                value="smile-pro"
                                                checked={formData.selectedService === 'smile-pro'}
                                                onChange={handleChange}
                                                className="h-3 w-3 md:h-5 md:w-5 text-[#0E3D91] focus:ring-[#0E3D91]"
                                            />
                                            <div>
                                                <p className="font-medium">SMILE Pro</p>
                                                <p className="text-[12px] md:text-[14px] text-gray-500">
                                                    это новейшая технология лазерной коррекции зрения, представляющая собой
                                                    усовершенствованную версию метода ReLEx SMILE.
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full mt-4 bg-[#0E3D91] text-white py-2 px-3 md:py-4 md:px-6 rounded-lg font-bold hover:bg-[#135EC8] transition-colors"
                            >
                                Отправить заявку
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConsultationModal;
