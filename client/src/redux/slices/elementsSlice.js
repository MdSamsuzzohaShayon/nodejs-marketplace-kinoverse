import { createSlice } from '@reduxjs/toolkit';


const initialModalState = { open: false, text: { heading: "Heading", body: "Body" } };

const elementsSlice = createSlice({
    name: 'elements',
    initialState: {
        modal: initialModalState,
        isLoading: false
    },
    reducers: {
        openModal: (state, action) => {
            state.modal.open = true;
            state.modal.text = action.payload;
        },
        closeModal: (state) => {
            state.modal.open = false;
        },
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading;
        }
    }
});


export const { openModal, closeModal, toggleLoading } = elementsSlice.actions;





export default elementsSlice.reducer;