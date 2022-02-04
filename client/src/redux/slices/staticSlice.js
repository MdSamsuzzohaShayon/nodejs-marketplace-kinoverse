import { createSlice } from '@reduxjs/toolkit';






const earnLearnInitialState = {
    title: "Earn and Learn",
    img_src: "./img/career.png",
    desc: "Kinoverse will be offering a earn and learn career path that will put you in the right direction to become a freelance screenwriter or 3D animator.",
    imageAfter: false
}


const digitalizedInitialState = {
    title: "Earn and Learn",
    img_src: "./img/career.png",
    desc: "Kinoverse will be offering a earn and learn career path that will put you in the right direction to become a freelance screenwriter or 3D animator.",
    imageAfter: false
}

export const staticSlice = createSlice({
    name: 'static',
    initialState: {
        learnEarn: earnLearnInitialState,
        digitalized: digitalizedInitialState
    }
});



export default staticSlice.reducer;