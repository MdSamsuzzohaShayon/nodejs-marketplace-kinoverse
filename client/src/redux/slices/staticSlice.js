import { createSlice } from '@reduxjs/toolkit';
import { Facebook, Drafts, Twitter, LinkedIn } from "@mui/icons-material";






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



const footerInitialNavItems = [
    { to: "/", text: "Home" },
    { to: "/career", text: "Career" },
    { to: "/about", text: "About Us" },
    { to: "/privacy", text: "Privacy Policy" },
    { to: "/partner", text: "Partner" },
];



const footerInitialShareIcon = [
    {
        url: "https://www.facebook.com/kinoverseteam",
        component: <Facebook color='error' sx={{ fontSize: { xs: 30, md: 50 }, marginRight: { xs: 2, md: 3 } }}  ></Facebook>
    },
    {
        url: "https://twitter.com/kinoverseteam",
        component: <Twitter color='error' sx={{ fontSize: { xs: 30, md: 50 }, marginRight: { xs: 2, md: 3 } }}  ></Twitter>
    },
    {
        url: "mailto:info@kinoverse.net",
        component: <Drafts color='error' sx={{ fontSize: { xs: 30, md: 50 }, marginRight: { xs: 2, md: 3 } }}  ></Drafts>
    },
    {
        url: "https://www.linkedin.com/company/kinoverse",
        component: <LinkedIn color='error' sx={{ fontSize: { xs: 30, md: 50 }, marginRight: { xs: 2, md: 3 } }}  ></LinkedIn>
    }
];


// PRIVACY POLICY PAGE 
const privacyPolicyInitialState = {
    ppContent: { head: "Privacy Policy" },
    ppInfoCollect: {
        head: "Information We Collect",
        paras: [
            "Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.",
        ]
    },
    ppLogData: {
        head: "Log Data",
        paras: [
            "When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter. ",
            "Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons."
        ]
    },
    ppPersonalInfo: {
        head: "Personal Information",
        paras: [
            "We may ask for personal information which may include one or more of the following:"
        ],
        lists: [
            "Name",
            "Email",
            "Social Media Profiles",
            "Date of Birth",
            "Phone/Mobile Number"
        ]
    },
    ppReason: {
        head: "Legitimate Reasons for Processing Your Personal Information",
        paras: [
            "We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you."
        ],
    },
    ppCollections: {
        head: "Collection and Use of Information",
        paras: [
            "We may collect personal information from you when you do any of the following on our website:"
        ],
        lists: [
            "Use a mobile device or web browser to access our content",
            "Contact us via email, social media, or on any similar technologies",
            "When you mention us on social media"
        ]
    },
    ppPurpose: {
        paras: [
            "We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes: ",
        ],
        lists: [
            "to enable you to customise or personalise your experience of our website ",
            "to contact and communicate with you",
            "for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you",
            "to enable you to access and use our website, associated applications, and associated social media platforms"
        ]
    },
    ppSecurity: {
        head: "Security of Your Personal Information",
        paras: [
            "When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.",
            "Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.",
            "You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services."
        ]
    },
    ppKeep: {
        head: "How Long We Keep Your Personal Information",
        paras: [
            "We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.",
            "However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes."
        ]
    },
    ppChildren: {
        head: "Children’s Privacy",
        paras: [
            "We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13."
        ]
    },
    ppInternational: {
        head: "International Transfers of Personal Information",
        paras: [
            "The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy."
        ]
    },
    ppRights: {
        head: "Your Rights and Controlling Your Personal Information",
        paras: [
            "You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.",
            "If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.",
            "If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.",
            "If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.",
            "If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint. "
        ]
    },
    ppCookies: {
        head: "Use of Cookies",
        paras: [
            "We use &ldquo;cookies&rdquo; to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.",
            ""
        ]
    },
    ppLimits: {
        head: "Limits of Our Policy",
        paras: [
            "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.",

        ]
    },
    ppChange: {
        head: "Changes to This Policy",
        paras: [
            "At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy. ",
            "If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information."
        ]
    },
    ppContact: {
        head: "Contact Us",
        paras: [
            "For any questions or concerns regarding your privacy, you may contact us using the following details:",
            "Kinoverse Corp",
            "Info@kinoverse.net"
        ]
    }
};


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
        clientItem: clientInitialItem,

        // FOOTER 
        footerNavItems: footerInitialNavItems,
        footerShareIcon: footerInitialShareIcon,




        // PRIVACY POLICY 
        privacyPolicy: privacyPolicyInitialState
    }
});



export default staticSlice.reducer;