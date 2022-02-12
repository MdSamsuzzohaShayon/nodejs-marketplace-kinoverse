import { createSlice } from '@reduxjs/toolkit';






const earnLearnInitialState = {
    title: "Earn and Learn",
    img_src: "img/career.png",
    desc: "Kinoverse is offering a earn and learn career path that will put you in the right direction to become a freelance screenwriter or 3D animator."
}



// ABOUT US PAGE 
const digitalizedInitialState = {
    title: "Digitalizing the filmmaking industry",
    img_src: "img/Digitalizing.jpg",
    desc: "Kinoverse is Digitalizing the filmmaking industry by allowing anyone with the skills to work and operate as a filmmaker or content creator company. Our software is specially made to make every process of filmmaking and content creation easier from hiring, to project management and more."
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


// HOME PAGE 
const clientInitialItem = [
    {
        imgSrc: "icons/computer.svg",
        title: "For Clients",
        parageaph: "Hire a professional filmmaker and video creator of any kind for your business, or film projects with ease. pay hourly or by the project upon completion or by milestone. post your job and sort through lists of qualified candidates to find the right filmmaker."
    },
    {
        imgSrc: "icons/camera.svg",
        title: "For Filmmakers",
        parageaph: "Work on your schedule and post your talents for the world to see. Create your profile and get hired doing what you love to do. Apply to new jobs posted or wait to get invited to apply."
    },
    {
        imgSrc: "icons/business.svg",
        title: "For Business",
        parageaph: "Are you a business looking to manage your creative process? We have you covered as well. KV flow allows you to simplify the filmmaking and content creation process from start to finish."
    }
]

export const staticSlice = createSlice({
    name: 'static',
    initialState: {
        learnEarn: earnLearnInitialState,

        // ABOUT US PAGE 
        digitalized: digitalizedInitialState,
        kvFlow: kvFlowInitialState,
        kvApp: kvAppInitialState,
        clapperboard: clapperboardInitialState,

        // HOME PAGE STATIC ELEMENTS
        clientItem: clientInitialItem
    }
});



export default staticSlice.reducer;