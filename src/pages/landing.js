// import logo from '../assets/images/logo.svg';
// import logo from '../assets/images/main.svg';
import styled from 'styled-components';

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

// STYLED COMPONENTS
const Wrapper = styled.main `
nav {
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
}
  h1 {
    font-weight: 700;
    span {
      color: darkgray;
    }
  }
  p {
    color: grey;
  }
`

export default Landing;
