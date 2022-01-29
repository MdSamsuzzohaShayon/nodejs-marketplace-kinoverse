
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { value: { open: false, text: { heading: "", body: "" } } };
export const modalSlice = createSlice({
    name: "modal",
    initialState: initialStateValue,
    reducers: {
        openModal: (state) => {
            state.value.open = true;
        },
        closeModal: (state) => {
            state.value.open = false;
        },
        changeText: (state, action) => {
            state.value.text = action.payload;
        }
    }
});


export const { openModal, closeModal, changeText } = modalSlice.actions;

export default modalSlice.reducer;