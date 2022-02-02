import { makeStyles } from '@mui/styles';


const gray = "rgba(110, 110, 122, 0.5)";
const black = 'rgb(31, 31, 36)';


const useStyles = makeStyles((theme) => ({
    image_fluid: {
        width: "100%",
        // height: "100%",
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
        [theme.breakpoints.down('md')]: {
            width: "35%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "70%"
        }
    },
    input_field: {
        border: `solid 2px ${gray}`
    },
    grid_br: {
        [theme.breakpoints.down('md')]: {
            // backgroundColor: "blue",
            // flexDirection: "column-reverse",
            // flexDirection: "column-reverse"
        },
    },
    purpose: {
        backgroundColor: black,
        padding: '4em 0',
        [theme.breakpoints.down('md')]: {
            padding: '2em 0',
            // backgroundColor: "blue"
        },
    },
    image_border: {
        width: '7.2em',
        height: "7.2em",
        border: `solid 3px ${gray}`,
        transform: "rotate(45deg)",
        borderRadius: "1em",
        marginLeft: "37%",
        [theme.breakpoints.down('md')]: {
            marginLeft: "35%"
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: "32%"
        },
    },
    icon_img: {
        width: "4em",
        transform: "translate(0, 1.5em) rotate(-45deg)",
    }
}));

export default useStyles;