//* --- HOOKS
import { useAppSelector } from '../../hooks/hooks';

//* --- COMPONENTS
import City from '../City/City';

//* --- SCSS
import './CityList.scss';

export default function CityList() {
  //* --- USE SELECTOR
  const cities = useAppSelector((state) => state.cities);
  const error = useAppSelector((state) => state.error);

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
