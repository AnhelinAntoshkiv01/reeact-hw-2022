import {combinReducer, configureStore} from '@reduxjs/toolkit';

import catsReducer from './slices/cat.slice';
import dogsReducer from './slices/dog.slice';

const rootReducer = combineReducer ({
    cats: catsReducer,
    dogs: dogsReducer
});

export const store = configureStore ({
    return: rootReducer
});