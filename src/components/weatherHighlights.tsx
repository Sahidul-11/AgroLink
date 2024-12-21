import React from "react";

interface Forecast {
    day: string;
    temperature: number;
    status: string;
    icon: string; // Emoji or icon URL
}

interface WeatherData {
    temperature: number;
    status: string;
    icon: string;
    forecast: Forecast[];
}

const WeatherHighlights: React.FC = () => {
    const weatherData: WeatherData = {
        temperature: 28,
        status: "Sunny",
        icon: "☀️", // Emoji or use an image URL
        forecast: [
            { day: "Tomorrow", temperature: 30, status: "Partly Cloudy", icon: "⛅" },
            { day: "Day After", temperature: 27, status: "Rainy", icon: "🌧️" },
            { day: "3rd Day", temperature: 25, status: "Cloudy", icon: "☁️" },
        ],
    };

    return (
        <div className=" bg-gradient-to-r from-gray-300 to-amber-900 py-8 rounded-lg shadow-lg space-y-6  mx-auto">
            <div className="containers">
                {/* Current Weather */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold text-green-800">
                            Current Weather
                        </h2>
                        <p className="text-lg text-[#4CAF50] font-medium">{weatherData.status}</p>
                    </div>
                    <div className="text-6xl">{weatherData.icon}</div>
                </div>
                <div className="text-5xl font-semibold text-[#2E7D32]">
                    {weatherData.temperature}°C
                </div>

                {/* 3-Day Forecast */}
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#2E7D32] mb-4">
                        3-Day Forecast
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {weatherData.forecast.map((day, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md text-center border border-[#4CAF50]"
                            >
                                <p className="text-md font-semibold text-[#2E7D32]">{day.day}</p>
                                <div className="text-4xl my-3">{day.icon}</div>
                                <p className="text-lg font-bold text-[#4CAF50]">
                                    {day.temperature}°C
                                </p>
                                <p className="text-gray-600 font-medium">{day.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherHighlights;
