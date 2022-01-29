import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CustomModal() {
    const dispatch = useDispatch();
    // const [open, setOpen] = React.useState(false);
    const open = useSelector(state => state.modal.value.open);
    const text = useSelector(state => state.modal.value.text)
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={e => dispatch(closeModal())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {text.heading}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {text.body}
                    </Typography>
                    {/* <div className="modal-content">
                        <span className="close" id="modal-close">×</span>
                        <div className="modal-body">
                            <h3>Thank you!</h3>
                            <p></p>
                            <p>Share with your friends and potential clients below!</p>
                            <div className="share-wrapper">

                                <a className="icon solid fa-envelope share-email" style="cursor: pointer;">
                                    <span className="label">Email</span>
                                </a>
                                <a className="icon brands fa-facebook-f share-facebook" style="cursor: pointer;" target="_blank">
                                    <span className="label">Facebook</span>
                                </a>
                                <a className="icon brands fa-twitter share-twitter" style="cursor: pointer;" target="_blank">
                                    <span className="label">Twitter</span>
                                </a>
                                <a className="icon brands fa-linkedin-in share-linkedin" style="cursor: pointer;" target="_blank">
                                    <span className="label">Linkedin</span>
                                </a> 
                            </div>
                        </div>
                    </div> */}
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default CustomModal;