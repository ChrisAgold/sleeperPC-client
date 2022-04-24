import Wrapper from '../assets/wrappers/Navbar'
import {FaUserCircle} from 'react-icons/fa'
import {useAppContext} from "../context/appContext";
import GlobalStyles from "../globalStyles";

const Navbar = () => {
    const {logoutUser, user} = useAppContext()
    return (
        <div>
            <GlobalStyles/>
            <Wrapper>
                <div>
                    <div>
                        <h3>Dashboard</h3>
                    </div>
                    <div>
                        <div>
                            <FaUserCircle/>
                            {user?.name}
                            <div>
                                <button type="button" onClick={logoutUser}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
</div>
)
}

export default Navbar


