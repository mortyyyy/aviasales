import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from '../features/TicketList/ticketSlice';


export default configureStore({
    reducer: {
        tickets: ticketReducer,
    }
})