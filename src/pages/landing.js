// import logo from '../assets/images/logo.svg';
// import logo from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';

const Landing = () => {
    return (
       <Wrapper>
           {/*NAV BAR*/}
           <nav>
               {/*ADD NAV LOGO*/}
               <div className="container">
                   <div className="info">
                       <h1>
                           Sleeper  <span>PC</span> APP
                       </h1>
                       <p>Text</p>
                       <button className="">Login/Register</button>
                   </div>
               </div>
               {/*Add image later*/}
               <img/>
           </nav>
       </Wrapper>
    );
}

export default Landing;
