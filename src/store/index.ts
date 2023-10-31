import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersApi } from './services/usersApiSlice';
import { useDispatch } from 'react-redux';


export const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
