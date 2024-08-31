//* --- AXIOS
import axios from 'axios';

//* --- TOOLKIT
import { createAsyncThunk } from '@reduxjs/toolkit';

//* --- FETCH
const fecthDataFromAPI = createAsyncThunk(
  'FETCH_METEO',
  // Call API
  async (cityName: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b6b0c8aca4ea0fe1bad01cea0f3eb091`
    );
    // console.dir(response);

    const fetchData = response.data;
    // console.log(fetchData);

    //* --- Weather icons
    let weatherIcon = fetchData.weather[0].icon;
    if (
      fetchData.weather[0].icon === '02d' ||
      fetchData.weather[0].icon === '02n' ||
      fetchData.weather[0].icon === '03d' ||
      fetchData.weather[0].icon === '03n'
    ) {
      weatherIcon = '🌤️';
    } else if (
      fetchData.weather[0].icon === '04d' ||
      fetchData.weather[0].icon === '04n'
    ) {
      weatherIcon = '☁️';
    } else if (
      fetchData.weather[0].icon === '10d' ||
      fetchData.weather[0].icon === '10n'
    ) {
      weatherIcon = '🌧️';
    } else if (
      fetchData.weather[0].icon === '50d' ||
      fetchData.weather[0].icon === '50n' ||
      fetchData.weather[0].icon === '01d' ||
      fetchData.weather[0].icon === '01n'
    ) {
      weatherIcon = '☀️';
    }

    return {
      id: Date.now(),
      country: fetchData.sys.country,
      city: fetchData.name,
      current_temp: fetchData.main.temp,
      current_weather_description: fetchData.weather[0].description,
      current_weather_icon: weatherIcon,
    };
  }
);

export default fecthDataFromAPI;
