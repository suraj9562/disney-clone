import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import userReducer from '../features/user/Userslice';
import movieReducer from '../features/movies/movieslice';

export default configureStore({
    reducer : {
        user : userReducer,
        movie: movieReducer
    },
    middleware : getDefaultMiddleware({
        serializableCheck : false,
    })
})