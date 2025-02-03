import { Box, Button, Modal, Typography } from "@mui/material"
import { useContext, useState } from "react"
import UserForm from "./UserForm"
import UserType from "../../models/UserType";
import axios from "axios";
import { UserContext } from "../../store/userReducer";
import { useNavigate } from "react-router";
import PopupStyle from "../../styles/PopupStyle";

const UserUpdate = () => {
    const nevigate = useNavigate();
    const { userDispatch } = useContext(UserContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (user: UserType) => {
        axios.put(`http://localhost:3000/api/user`, { ...user }, {
            headers: { 'user-id': user.id }
        })
            .then(res => {
                userDispatch({
                    type: 'UPDATE_USER',
                    data: res.data
                })
            }).catch(err => {
                console.log(err.request);
            });
        setOpen(false);
        nevigate('/');
    }
    return (
        <>
            <Button color="inherit" onClick={handleOpen}>Update Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={PopupStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update user details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <UserForm handleSubmit={handleClose} formAction="UPDATE_USER"></UserForm>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default UserUpdate