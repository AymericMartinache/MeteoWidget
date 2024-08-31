//* --- TOOLKIT
import { configureStore } from '@reduxjs/toolkit';

//* --- REDUCER
import meteoReducer from '../reducers/meteoReducer';

const store = configureStore({
  reducer: meteoReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
