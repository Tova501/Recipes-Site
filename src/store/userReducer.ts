import { createContext, Dispatch} from "react";
import UserType, { UserRegisterType} from "../models/UserType";

type ActionType ={
    type: 'REGISTER',
    data:  UserRegisterType
} | {
    type: 'LOGIN',
    data:  UserType
} | {
    type: 'UPDATE_USER',
    data: UserType
} | {
    type: 'LOGOUT'
}

const defaultUser: UserType = { id: 0, email: '', password: '', firstName: '', lastName: '', address: '', phone: '' };
export const UserContext = createContext<{
    user: UserType;
    userDispatch: Dispatch<ActionType>;
}>({
    user: defaultUser,
    userDispatch: () => null
});

const UserReducer = (state: UserType, action: ActionType): UserType => {
    switch (action.type) {
        case 'REGISTER':
            return {...state, ...action.data}
        case 'LOGIN':
            console.log('login: ',action.data)
            return {...state,...action.data};
        case 'UPDATE_USER':
            return {
                ...state,...action.data
            }
        case 'LOGOUT':
            return { ...defaultUser }
        default:
            return state;
    }
}

export default UserReducer