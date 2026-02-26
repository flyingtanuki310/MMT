import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || t('contact.error', "Une erreur est survenue lors de l'envoi du message."));
            }
        } catch (error) {
            console.error("Erreur d'envoi", error);
            setStatus('error');
            setErrorMessage(t('contact.error', "Erreur lors de la communication avec le serveur."));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <div
                className="absolute inset-0 cursor-pointer"
                onClick={onClose}
                aria-label="Fermer"
            />

            <div className="relative w-full max-w-lg bg-[#fdfcf8] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-stone-100 rounded-full text-stone-500 hover:text-mmt-dark hover:bg-stone-200 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-8 overflow-y-auto w-full">
                    <h2 className="text-3xl font-serif italic text-mmt-dark mb-2">{t('contact.title')}</h2>
                    <p className="text-stone-600 mb-8 font-sans">{t('contact.desc')}</p>

                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center bg-stone-50 rounded-xl border border-stone-200">
                            <CheckCircle size={48} className="text-green-600 mb-4" />
                            <h3 className="text-xl font-serif text-mmt-dark mb-2">{t('contact.success')}</h3>
                            <p className="text-stone-600">{t('contact.success_desc')}</p>
                            <button
                                onClick={onClose}
                                className="mt-6 px-6 py-2 bg-mmt-dark text-mmt-light rounded-full text-sm hover:bg-[#1c1917] transition-colors"
                            >
                                {t('contact.close')}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">{t('contact.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-mmt-gold/20 focus:border-mmt-gold outline-none transition-all text-stone-800"
                                    placeholder={t('contact.placeholder_name')}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">{t('contact.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-mmt-gold/20 focus:border-mmt-gold outline-none transition-all text-stone-800"
                                    placeholder={t('contact.placeholder_email')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">{t('contact.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-mmt-gold/20 focus:border-mmt-gold outline-none transition-all text-stone-800 resize-none"
                                    placeholder={t('contact.placeholder_message')}
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg flex flex-col gap-1 border border-red-100">
                                    <div className="flex items-center gap-2 font-medium">
                                        <AlertCircle size={18} className="shrink-0" />
                                        <span>{t('contact.error')}</span>
                                    </div>
                                    <span className="text-xs opacity-90">{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-mmt-dark text-mmt-light rounded-xl font-serif text-lg italic hover:bg-[#1c1917] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        {t('contact.sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        {t('contact.send')}
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
