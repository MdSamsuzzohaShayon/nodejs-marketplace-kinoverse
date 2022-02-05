import { createSlice } from '@reduxjs/toolkit';






const earnLearnInitialState = {
    title: "Earn and Learn",
    img_src: "img/career.png",
    desc: "Kinoverse is offering a earn and learn career path that will put you in the right direction to become a freelance screenwriter or 3D animator."
}


const digitalizedInitialState = {
    title: "Earn and Learn",
    img_src: "img/Digitalizing.jpg",
    desc: "Kinoverse will be offering a earn and learn career path that will put you in the right direction to become a freelance screenwriter or 3D animator."
}

const kvFlowInitialState = {
    title: "KV Flow",
    img_src: "img/kv-flow.jpg",
    desc: "Simplify the filmmaking process all on one platform and manage your jobs. With KV flow’s array of tools, you can manage your jobs, employees, and your projects."
}

const kvAppInitialState = {
    title: "Kinoverse App",
    img_src: "img/kv-app.jpg",
    desc: "Filmmaker and content creator marketplace. Work, hire, and process payments all in one app. Showcase your skills and get paid with a Filmmaker account, or hire your next freelancer with a client account. Or both."
}

const clapperboardInitialState = {
    title: "Clapperboard",
    img_src: "img/clapperboard.jpg",
    desc: "Become an investor for the future of the film industry by donating spare change and rounding up your everyday purchases. Apply for financing for your film or startup business with Clapperboard."
}

export const staticSlice = createSlice({
    name: 'static',
    initialState: {
        learnEarn: earnLearnInitialState,
        digitalized: digitalizedInitialState,
        kvFlow: kvFlowInitialState,
        kvApp: kvAppInitialState,
        clapperboard: clapperboardInitialState
    }
});



export default staticSlice.reducer;