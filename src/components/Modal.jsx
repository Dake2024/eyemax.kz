import React, { useState } from 'react';
import { X } from 'lucide-react';

const ConsultationModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        selectedService: 'femto-lasik'
    });
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        let formattedValue = value;

        if (value.length > 1) {
            formattedValue = `+7 ${value.substring(1, 4)} ${value.substring(4, 7)} ${value.substring(7, 9)} ${value.substring(9, 11)}`.trim();
        }

        setFormData(prev => ({ ...prev, phone: formattedValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const digitsOnly = formData.phone.replace(/\D/g, '');
        if (digitsOnly.length !== 11) {
            setError('Номер телефона должен содержать 10 цифр');
            return;
        }
        console.log('Форма отправлена:', { name, phone: `+${digitsOnly}` });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 md:p-4">
            <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden">
                {/* Header */}
                <div className="pt-3 px-6 relative">
                    <h2 className="text-black text-2xl md:text-3xl font-bold font-bebas">ОСТАВЬТЕ ЗАЯВКУ</h2>
                    <p className="text-[#0E3D91] text-2xl md:text-3xl font-bold font-bebas">И МЫ С ВАМИ СВЯЖЕМСЯ</p>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-black cursor-pointer"
                    >
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
                                    placeholder="+7 (___) ___-__-__"
                                    className="border-none focus:outline-none w-full text-[14px] md:text-[18px]"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>

                        {/* Service Selection */}
                        <div className="space-y-2 border-1 border-[#BABABA] rounded-lg">
                            <label className={`block rounded-lg p-2 md:p-4 ${formData.selectedService === 'femto-lasik' ? 'bg-[#ECF4FF]' : 'bg-white'}`}>
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
                                            это усовершенствованный вариант классического LASIK, при котором оба этапа операции выполняются с помощью лазеров.
                                        </p>
                                    </div>
                                </div>
                            </label>

                            <label className={`block rounded-lg p-2 md:p-4 ${formData.selectedService === 'smile-pro' ? 'bg-[#ECF4FF]' : 'bg-white'}`}>
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
                                            это новейшая технология лазерной коррекции зрения, представляющая собой усовершенствованную версию метода ReLEx SMILE.
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
            </div>
        </div>
    );
};

export default ConsultationModal;