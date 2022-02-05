import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';
import useStyles from '../../styles/Home.style.js';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '80%', md: 450 },
    minHeight: 200,
    color: "white",
    bgcolor: '#24242a',
    boxShadow: 24,
    p: 4,
};

function CustomModal() {
    const classes = useStyles();
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
                BackdropProps={{ style: { backgroundColor: "rgba(255, 255, 255, 0.534)" } }}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant='h2' >
                        {text.heading}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {text.body}
                    </Typography>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default CustomModal;