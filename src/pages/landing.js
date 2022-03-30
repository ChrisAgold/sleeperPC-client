// import logo from '../assets/images/logo.svg';
// import logo from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
       <Wrapper>
           {/*NAV BAR*/}
           <nav>
               {/*ADD NAV LOGO*/}
               <div className="container">
                   <div className="info">
                       <h1>
                           Sleeper  <span>PC</span>
                       </h1>
                       <p>Text</p>
                       <button>  <Link to="/register">Login/Register</Link></button>
                   </div>
               </div>
               {/*Add image later*/}
               <img/>
           </nav>
       </Wrapper>
    );
}

export default Landing;
