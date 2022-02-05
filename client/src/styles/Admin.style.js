import { makeStyles } from '@mui/styles';

const errorColor = "rgb(213, 72, 87)";

const useStyles = makeStyles((theme) => ({
    login_page: {
        minHeight: '80vh',
    },
    admin_page: {
        minHeight: '80vh',
    },
    admin_page_userlist: {
        // border: `1px solid ${errorColor}`,
        backgroundColor: "white",
        color: 'black'
    },
    admin_page_userlistitem: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    admin_page_usertextfield: {
        color: "white",
        border: "solid 2px rgba(110, 110, 122, 0.5)",
        height: "48px"
    }
}));


export default useStyles;