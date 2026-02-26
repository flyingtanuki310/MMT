import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Countdown = ({ targetDate }) => {
    const { t } = useTranslation();

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div key={interval} className="flex flex-col items-center mx-2 md:mx-4 px-2 md:px-4">
                <span className="text-4xl md:text-5xl font-serif text-mmt-gold drop-shadow-lg leading-none">
                    {timeLeft[interval].toString().padStart(2, '0')}
                </span>
                <span className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest mt-2 font-sans">
                    {t(`countdown.${interval}`)}
                </span>
            </div>
        );
    });

    return (
        <div className="flex justify-center items-center my-10 p-6 md:p-8 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] mx-auto max-w-2xl">
            {timerComponents.length ? (
                <div className="flex items-center divide-x divide-white/10 w-full justify-center">
                    {timerComponents}
                </div>
            ) : (
                <span className="text-2xl md:text-3xl font-serif text-mmt-gold italic drop-shadow-md">
                    {t('countdown.launched')}
                </span>
            )}
        </div>
    );
};

export default Countdown;
