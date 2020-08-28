import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ticketReducer from '../features/TicketList/ticketSlice';

const middleware = [...getDefaultMiddleware()]


export default configureStore({
    reducer: {
        tickets: ticketReducer,
    },
    middleware,
})