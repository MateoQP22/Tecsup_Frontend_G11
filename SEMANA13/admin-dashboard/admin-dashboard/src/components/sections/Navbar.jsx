import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import useUser from "../../hooks/useUser";

const Navbar = () => {
    const { user, setUser } = useUser();
    console.log(auth)
    createUserWithEmailAndPassword( auth , '73276257@continental.edu.pe','MQ2022!');
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    {user ?
                        <button onClick={() => { setUser(false) }}>Logout</button>
                        :
                        <NavLink to="/login">Login</NavLink>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar