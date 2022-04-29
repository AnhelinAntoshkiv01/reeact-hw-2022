import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: 'Cars'
};

const secondSlice = createSlice({
    name: 'secondSlice',
    initialState,
});

export const {reducer} = secondSlice;