//* ESLINT
/* eslint-disable @typescript-eslint/no-restricted-imports */
/* eslint-disable import/prefer-default-export */

//* --- REDUX
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

//* STORE
import type { AppDispatch, RootState } from '../store/store';

// ce hook permet d'avoir le state typé dans la fonction de selection
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// ce hook permet d'avoir le type des action qui comprends aussi les actions async
export const useAppDispatch: () => AppDispatch = useDispatch;
