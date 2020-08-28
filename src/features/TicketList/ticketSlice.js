import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId } from './actions';

export const ticketSlice = createSlice({
    name: 'tickets',
    initialState: {
        searchId: null,
        tickets: [],
    },
    reducers: {
        updateTickets: (state, action) => {
            state.tickets = [...state.tickets, ...action.payload];
        }
    },
    extraReducers: {
        [fetchSearchId.fulfilled]: (state, action) => {
            state.searchId = action.payload.searchId;
        }
    }
});

export const { updateTickets } = ticketSlice.actions;

export const selectCount = state => state.counter.value;

export default ticketSlice.reducer;