import { configureStore } from '@reduxjs/toolkit';

import moiveSlice from './reducerSlice';

const store = configureStore({
	reducer: { Moive: moiveSlice.reducer }
});

export default store;
