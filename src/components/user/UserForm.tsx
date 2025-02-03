import { FormEvent, useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import UserType from "../../models/UserType";
import { UserContext } from "../../store/userReducer";

const UserForm = ({ formAction, handleSubmit }: { formAction: 'LOGIN' | 'UPDATE_USER' | 'REGISTER', handleSubmit: Function }) => {

    const userContext = useContext(UserContext)
    const [user, setUser] = useState<UserType>(userContext.user)

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleFormSumbit = (e: FormEvent) => {
        e.preventDefault();
        handleSubmit(user);
    }

    return (
        <>
            <form onSubmit={handleFormSumbit}>

                <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                {
                    formAction == 'UPDATE_USER' &&
                    <><TextField
                        name="firstName"
                        label="First Name"
                        fullWidth
                        margin="normal"
                        value={user.firstName}
                        onChange={handleChange}
                    />
                        <TextField
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            margin="normal"
                            value={user.lastName}
                            onChange={handleChange}
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            fullWidth
                            margin="normal"
                            value={user.phone}
                            onChange={handleChange}
                        />
                    </>
                }

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </>
    )
}

export default UserForm