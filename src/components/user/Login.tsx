import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext, useState } from 'react';
import UserForm from './UserForm';
import UserType from '../../models/UserType';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserContext } from '../../store/userReducer';
import PopupStyle from '../../styles/PopupStyle';
import CloseIcon from '@mui/icons-material/Close';
import closeIconStyle from '../../styles/CloseButtonStyle';
import Swal from 'sweetalert2';

const Login = () => {
    const { userDispatch } = useContext(UserContext)

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false)
    const handleClose1 = (user: UserType) => {
        axios.post(`http://localhost:3000/api/user/login`, { email: user.email, password: user.password })
            .then((res: AxiosResponse) => {
                console.log(res.data.user)
                userDispatch({
                    type: "LOGIN",
                    data: res.data.user
                })
                setOpen1(false);
            }).catch((err: AxiosError) => {
                if (err.status == 401) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Invalid Email or Password",
                    });
                }
            });
    }
    const handleClose2 = (user: UserType) => {
        axios.post(`http://localhost:3000/api/user/register`, { email: user.email, password: user.password })
            .then(res => {
                userDispatch({
                    type: 'REGISTER',
                    data: { id: res.data.userId, email: user.email, password: user.password }
                })
                setOpen2(false)
            }).catch(err => {
                if (err.status === 400) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "User already exists!",
                    });
                }
                console.log(err.request);
            });
    };

    return (<>
        <Button color='inherit' onClick={() => setOpen1(true)}>Login</Button>
        <Modal
            sx={{ zIndex: '20' }}
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={PopupStyle}>
                <CloseIcon sx={closeIconStyle} onClick={() => setOpen1(false)} />
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Login
                </Typography>
                <Box id="modal-modal-description" sx={{ mt: 2 }} >
                    <UserForm handleSubmit={handleClose1} formAction='LOGIN' />
                </Box>
            </Box>
        </Modal>
        <Button color='inherit' onClick={() => setOpen2(true)}>Register</Button>
        <Modal
            sx={{ zIndex: '20' }}
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={PopupStyle}>
                <CloseIcon sx={closeIconStyle} onClick={() => setOpen2(false)} />
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Register
                </Typography>
                <Box id="modal-modal-description" sx={{ mt: 2 }} >
                    <UserForm handleSubmit={handleClose2} formAction='REGISTER'></UserForm>
                </Box>
            </Box>
        </Modal>

    </>
    );
}
export default Login