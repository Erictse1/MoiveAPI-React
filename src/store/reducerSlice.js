import { createSlice } from '@reduxjs/toolkit';

const moiveSlice = createSlice({
	name: 'Moive',
	initialState: { query: '', counter: 1, id: null },
	reducers: {
		PageNext(state) {
			state.counter++;
		},
		PagePrevious(state) {
			state.counter--;
		},
		Search(state, action) {
			state.query = action.payload;
		},
		Genres(state, action) {
			state.id = action.payload;
		}
		//dispatch.Search({a:b,c:d})==>action.payload={a:b,c:d}
	}
});

export default moiveSlice;

export const moiveSliceAction = moiveSlice.actions;
