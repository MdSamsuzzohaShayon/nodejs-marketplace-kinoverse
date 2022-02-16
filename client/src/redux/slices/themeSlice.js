import { createSlice } from '@reduxjs/toolkit';
import store from '../store.js';




export const themeSlice = createSlice({
    name: "theme",
    initialState: { resizeScreen: false },
    reducers: {
        changeScreen: (state, action) => {
            // console.log("Problem - ", action.payload);
            state.resizeScreen = action.payload;
        }
    }
});

export const { changeScreen } = themeSlice.actions;

function measureResize() {
    const resizeObserver = new ResizeObserver(entities => {
        // console.log(entities);
        for (let entity of entities) {
            // console.log(entity.contentRect.width);
            if (entity.contentRect.width >= 900) {
                // FLEX DIRECTION REVERSE 
                // CALL DISPATCH
                store.dispatch(changeScreen(false));

            } else {
                store.dispatch(changeScreen(true));
                // console.log("true");
            }
        }
    });
    resizeObserver.observe(document.body);
}
measureResize();


export default themeSlice.reducer;