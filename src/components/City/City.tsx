//* --- REACT-FEATHER ---
import { XCircle } from "react-feather";

//* --- TYPES ---
import { ICity } from "../@types/city";

//* --- REACT ---
import React, { useState } from "react";

//* --- REDUCER ---
import { actionCreatorDeleteCity } from "../../reducers/meteoReducer";

//* --- HOOKS ---
import { useAppDispatch } from "../../hooks/hooks";

//* --- SCSS ---
import "./City.scss";

export default function City({ city }: { city: ICity }) {
    const dispatch = useAppDispatch();
    const [isRemoving, setIsRemoving] = useState(false);

    const handleDelete = () => {
        setIsRemoving(true);
        setTimeout(() => {
            dispatch(actionCreatorDeleteCity(city.id));
        }, 600); // Correspond à la durée de l'animation fadeOutBubble
    };

    return (
        <div className={`city-container ${isRemoving ? "fade-out" : ""}`}>
            <div className="city-infos">
                <div className="city-name">
                    <p>
                        {city.city} - {city.country}
                    </p>
                    <p className="weather-detail">
                        {city.current_weather_description}
                    </p>
                </div>
                <div className="temperature">
                    {Math.round(city.current_temp)}°C
                </div>
            </div>
            <div className="weather-icon">{city.current_weather_icon}</div>

            <button
                className="delete-icon"
                type="button"
                onClick={handleDelete}
            >
                <XCircle color="#fff" />
            </button>
        </div>
    );
}
