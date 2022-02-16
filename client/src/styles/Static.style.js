import { makeStyles } from '@mui/styles';


const gray = "rgba(110, 110, 122, 0.5)";
const black = 'rgb(31, 31, 36)';
const blackGray = "#303036";
const grediant = "linear-gradient(45deg, #d54857 20%, #2eaeff 100%)";


const useStyles = makeStyles((theme) => ({
    privacy_list_item: {
        // fontSize: "0.8rem",
        color: gray,
        // textTransform: 'capitalize'
    },
    partner_textarea: {
        minWidth: "97.5%",
        minHeight: "80px",
        marginTop: '20px',
        backgroundColor: "#24242a",
        // outlineC: theme.error,
        outlineColor: "rgb(213, 72, 87)",
        color: "white",
        padding: "12px",
        [theme.breakpoints.down('md')]: {
            minWidth: "92%"
        }
    }
}));

export default useStyles;