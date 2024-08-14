import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Manado&units=metric&appid=1f1ecc20807651a78c5a9bea1d8b16b4`);
                setWeather(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();

        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const day = dayNames[dateTime.getDay()];
    const date = dateTime.getDate();
    const month = monthNames[dateTime.getMonth()];
    const year = dateTime.getFullYear();
    const time = dateTime.toLocaleTimeString();

    return (
        <div className="text-white text-center mt-10">
            <p className="text-1xl md:text-2xl">{day}, {date} {month} {year}</p>
            <p className="text-1xl md:text-2xl">{weather.main.temp}°C</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className="mx-auto" alt="Weather icon" />
            <p className="text-1xl md:text-2xl">{time}</p>
        </div>
    );
};

export default Weather;