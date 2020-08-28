import {createAsyncThunk} from '@reduxjs/toolkit';
import {updateTickets} from './ticketSlice';

const baseURL = 'https://front-test.beta.aviasales.ru';

export const fetchSearchId = createAsyncThunk(
    'tickets/fetchSearchId',
    async () => {
        const response = await fetch(`${baseURL}/search`);
        return await response.json();
    }
)

export const startFetchTicketLoop = createAsyncThunk(
    'tickets/startFetchTicketLoop',
    async (_, {dispatch, getState}) => {
        let stop = false;
        const state = getState();
        const searchId = state.tickets.searchId;

        async function fetchTickets() {
            return await fetch(`${baseURL}/tickets?searchId=${searchId}`);
        }

        while (!stop) {
            try {
                const newTickets = await fetchTickets();
                const r = await newTickets.json();
                stop = r.stop;
                dispatch(updateTickets(r.tickets));
            } catch (error) {
                console.error(error);
            }
        }
    }
);