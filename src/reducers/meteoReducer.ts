//* --- REDUX ---
import { createReducer, createAction } from '@reduxjs/toolkit';

//* --- TYPES ---
import { ICity } from '../components/@types/city';

//* --- THUNK ---
import fecthDataFromAPI from '../middlewares/fetchDataFromApi';

interface ICitiesReducerState {
  cities: ICity[];
  error: string;
}

//* --- INITIAL STATE ---
const initialState: ICitiesReducerState = {
  cities: [],
  error: '',
};

//* --- ACTIONS ---
export const actionCreatorDeleteCity = createAction<number>('DELETE_CITY');
export const clearError = createAction('CLEAR_ERROR');

//* --- REDUCER
const meteoReducer = createReducer(initialState, (builder) => {
  builder
    //* --- CASE 1 - ADD CITY
    .addCase(fecthDataFromAPI.fulfilled, (state, action) => {
      state.cities.push(action.payload);
    })
    .addCase(fecthDataFromAPI.rejected, (state) => {
      state.error = 'Erreur lors de la recherche.';
    })

    .addCase(clearError, (state) => {
      state.error = '';
    })

    //* --- CASE 2 - DELETE CITY
    .addCase(actionCreatorDeleteCity, (state, action) => {
      state.cities = state.cities.filter((city) => city.id !== action.payload);
    });
});

export default meteoReducer;
