import { useContext } from "react";
import { UserContext } from "../store/userReducer";

const Home =()=>{

    const {user} = useContext(UserContext);

    return(
        <>
        
        <div className="home">
            
            {user.id>0 ? <>
                <div className="homee">Hello {user.firstName+ " "+ user.lastName}</div>
                <div className="homee">Enjoy your meal...</div>
            </>
             :<div className="homee"> Welcome...</div> }
        </div>

        </>
    )
}

export default Home