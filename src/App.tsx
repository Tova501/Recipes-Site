import { useReducer } from "react"
import UserReducer, { UserContext } from "./store/userReducer"
import {  RouterProvider } from "react-router"
import { router } from "./components/Router"
import { Provider } from "react-redux"
import store from "./store/store"
import { createTheme, ThemeProvider } from "@mui/material"

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#455a64'
      },
      secondary: {
        main: '#E33E7F'
      }
    }
  });
     
  const [user, userDispatch] = useReducer(UserReducer, { id: 0, firstName: '', lastName: '', email: '', password: '', address: '', phone: '' })

  return (
    <>
    <ThemeProvider theme={theme}>
      <UserContext value={{ user, userDispatch }}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </UserContext>
      </ThemeProvider>
    </>
  )
}

export default App
