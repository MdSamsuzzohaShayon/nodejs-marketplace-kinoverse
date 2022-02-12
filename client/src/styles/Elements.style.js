import { makeStyles } from "@mui/styles";

const red = "#d54857";
const font = "Averta, Avenir, Helvetica Neue, Calibri, Helvetica, Roboto, sans-serif";
const gray = "rgba(110, 110, 122, 0.5)";
const black = 'rgb(31, 31, 36)';

const useStyles = makeStyles((theme) => ({
    footer_wrapper: {
        backgroundColor: "#303036",
        fontFamily: font,
        fontWeight: 100,
        paddingTop: 20
    },
    footer_typography: {
        fontFamily: font,
        fontWeight: 100,
        fontSize: "30rem"
    },
    footer_link: {
        textDecoration: "none",
        textDecorationStyle: "none",
        color: red
    },
    modal: {
        backgroundColor: black,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        // bgcolor: 'background.paper',
        backgroundColor: black,
        border: '2px solid #000',
        boxShadow: 24,
        padding: 4,
    }

}));



export default useStyles;