import { Box, AppBar, Toolbar, Button, Avatar } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../store/userReducer"
import Login from "./user/Login";
import { Link, useNavigate } from "react-router";
import UserUpdate from "./user/UserUpdate";

const NavBar = () => {
    const nevigate = useNavigate();
    const { user, userDispatch } = useContext(UserContext);
    const handleClickLogout = () => {
        userDispatch({ type: 'LOGOUT' })
        nevigate('/')
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, width: "100vw", zIndex: '100' }}>
                <AppBar position="static">
                    <Toolbar>
                        <Avatar>{user.firstName != '' ? user.firstName[0] : user.lastName ? user.lastName[0] : ''}</Avatar>
                        {user.id == 0 ? <Login /> :
                            <Box style={{ left: '75px', position: 'fixed' }}>
                                <UserUpdate />
                                |
                                <Button color="inherit" onClick={handleClickLogout}>Logout</Button>
                            </Box>
                        }
                        <Box sx={{ right: '20px', position: 'fixed' }}>
                            <Button color="inherit">
                                <Link className="nav-link" to="/recipes">Recipes</Link>
                            </Button>
                            |
                            {user.id != 0 && (
                                <>
                                <Button color="inherit">
                                    <Link className="nav-link" to="/recipes/add">Add recipe</Link>
                                </Button>
                                |
                                </>)}
                            <Button color="inherit">
                                <Link className="nav-link" to="/">Home</Link>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default NavBar