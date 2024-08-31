//* --- HOOKS
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

//* --- REACT ---
import { useEffect } from "react";

//* --- COMPONENTS
import City from "../City/City";
import { clearError } from "../../reducers/meteoReducer";

//* --- SCSS
import "./CityList.scss";

// Affiche la liste des villes
export default function CityList() {
    //* --- STATES
    // Liste des villes
    const cities = useAppSelector((state) => state.cities);

    // Liste des erreurs
    const error = useAppSelector((state) => state.error);

    //* --- DISPATCH
    const dispatch = useAppDispatch();

    //* -- USE EFFECT
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                dispatch(clearError());
            }, 4000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [error, dispatch]);

    return !error ? (
        <div className="city-list">
            {cities.map((city) => (
                <City key={city.id} city={city} />
            ))}
        </div>
    ) : (
        <div className="error-container">{error}</div>
    );
}
