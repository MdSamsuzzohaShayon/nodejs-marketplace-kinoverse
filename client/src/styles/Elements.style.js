import { makeStyles } from "@mui/styles";

const red = "#d54857";
const font = "Averta, Avenir, Helvetica Neue, Calibri, Helvetica, Roboto, sans-serif";

const useStyles = makeStyles((theme) => ({
    footer_wrapper: {
        backgroundColor: "#303036",
        fontFamily: font,
        fontWeight: 100,
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

}));



export default useStyles;