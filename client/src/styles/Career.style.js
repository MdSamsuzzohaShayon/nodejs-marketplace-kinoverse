import { makeStyles } from '@mui/styles';


const gray = "rgba(110, 110, 122, 0.5)";
const black = 'rgb(31, 31, 36)';
const blackGray = "#303036";
const grediant = "linear-gradient(45deg, #d54857 20%, #2eaeff 100%)";


const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: blackGray,
    },
    box_image_cover: {
        backgroundColor: grediant,
        backgroundImage: "linear-gradient( 45deg  , rgb(213, 72, 87) 20%, rgb(46, 174, 255) 100%)",
    },
    career_image: {
        backgroundImage: "linear-gradient( 45deg  , rgb(213, 72, 87) 20%, rgb(46, 174, 255) 100%)",
        width: '100%'
    },
    wrap_body: {
        width: "100%",
        backgroundColor: "#1f1f24",
        // backgroundColor: "blue",
        // "::before": {
        //     height: "30%",
        //     paddingBottom: "200px",
        //     backgroundColor: 'red'
        // }
    },
    learn_earn_text: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        justifyContent: 'center',
        margin: '0 100px',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            margin: '0 10px',
            paddingBottom: '50px'
        }
    },
    // background-color: #24242a;
    // color: rgba(255, 255, 255, 0.5);
    apply_here: {
        backgroundColor: "#24242a",
        padding: '80px 0',
        [theme.breakpoints.down('md')]: {
            padding: "30px 0"
        }
    }
}));

export default useStyles;