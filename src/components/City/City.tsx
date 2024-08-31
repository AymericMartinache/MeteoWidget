//* --- REACT-FEATHER
import { XCircle } from 'react-feather';

//* --- TYPES
import { ICity } from '../@types/city';

//* --- REDUCER
import { actionCreatorDeleteCity } from '../../reducers/meteoReducer';

//* --- HOOKS
import { useAppDispatch } from '../../hooks/hooks';

//* --- SCSS
import './City.scss';

export default function City({ city }: { city: ICity }) {
  //* --- DISPATCH
  const dispatch = useAppDispatch();
  // console.log(city);

  return (
    <div className="city-container">
      <div className="city-infos">
        <div className="city-name">
          <p>
            {city.city} - {city.country}
          </p>
          <p className="weather-detail">{city.current_weather_description}</p>
        </div>
        <div className="temperature">{Math.round(city.current_temp)}°C</div>
      </div>
      <div className="weather-icon">{city.current_weather_icon}</div>

      <button
        className="delete-icon"
        type="button"
        onClick={() => {
          //* ACTION TO DISPATCH
          dispatch(actionCreatorDeleteCity(city.id));
        }}
      >
        <XCircle color="#fff" />
      </button>
    </div>
  );
}
