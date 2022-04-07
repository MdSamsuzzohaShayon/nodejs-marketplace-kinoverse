import { makeStyles } from '@mui/styles';

const errorColor = "rgb(213, 72, 87)";
const inputBorderColor = "solid 2px rgba(110, 110, 122, 0.5)";

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
        border: inputBorderColor,
        height: "48px"
    },
    admin_page_partners: {

    }
}));

// https://stripe.com/docs/js/elements_object/create_element?type=card#elements_create-options
export const cardElementOptions = {
    style: {
        base: {
            color: "#666",
            fontSize: "20px",
        },
        invalid: {
            color: "#fa755a",
            fontSize: "fa755a",
        },
        border: inputBorderColor
    }
}

export default useStyles;