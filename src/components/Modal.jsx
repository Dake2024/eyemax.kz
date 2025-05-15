import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [successMessage, setSuccessMessage] = useState(''); // Добавляем состояние для успешного сообщения

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = value;

        if (!value) {
            formattedValue = '+';
        } else {
            if (!value.startsWith('7')) {
                value = '7' + value;
            }
            if (value.length >= 1) {
                formattedValue = `+${value.substring(0, 1)}`;
                if (value.length >= 2) {
                    formattedValue += ` ${value.substring(1, 4)}`;
                    if (value.length >= 5) {
                        formattedValue += ` ${value.substring(4, 7)}`;
                        if (value.length >= 8) {
                            formattedValue += ` ${value.substring(7, 9)}`;
                            if (value.length >= 10) {
                                formattedValue += ` ${value.substring(9, 11)}`;
                            }
                        }
                    }
                }
            }
        }

        setFormData((prev) => ({ ...prev, phone: formattedValue }));
    };

    const handlePhoneFocus = (e) => {
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

        try {
            const response = await fetch('https://Dake2025.pythonanywhere.com/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Ошибка сервера');
            }

            setSuccessMessage('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
            setError('');
            
            // Сбрасываем форму через 2 секунды
            setTimeout(() => {
                setFormData({
                    name: '',
                    phone: '',
                    selectedService: 'femto-lasik',
                });
                setSuccessMessage('');
                onClose();
            }, 2000);
            
        } catch (error) {
            console.error('Ошибка:', error);
            setError('Не удалось отправить заявку. Проверьте подключение.');
        }
    };

   
