// import logo from '../assets/images/logo.svg';
// import logo from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Link } from 'react-router-dom';
import GlobalStyles from '../globalStyles.js'

const Landing = () => {
    return (
        <div>
            <GlobalStyles/>
       <Wrapper className="full-page-alt">
           {/*NAV BAR*/}
           <nav>
               {/*ADD NAV LOGO*/}
               <div className="container">
                   <div className="info">
                       <span className="sleeper">Sleeper</span><strong className="pc">PC</strong>
                       <br/>
                       <br/>
                       <button>  <Link to="/register">Login/Register</Link></button>
                   </div>
               </div>
               {/*Add image later*/}
               <img/>
           </nav>
       </Wrapper>
        </div>
    );
}

export default Landing;
