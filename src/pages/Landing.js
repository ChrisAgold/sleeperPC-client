// import logo from '../assets/images/logo.svg';
// import logo from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import {Link} from 'react-router-dom';
import GlobalStyles from '../globalStyles.js'
import {Button, Cutout} from 'react95';
import {ThemeProvider} from 'styled-components';
import original from "react95/dist/themes/original";
import pc from '../images/95.png';

const Landing = () => {
    return (
        <div>
            <GlobalStyles/>
            <Wrapper className="landing">
                <ThemeProvider theme={original}>
                    <div className="cutout-container">
                        <Cutout id='cutout'>
                            {/*NAV BAR*/}
                            <img style={{marginTop:'20px',width: '25%', height: '25%'}} src={pc} />;
                            <nav className="nav">
                                {/*ADD NAV LOGO*/}
                                <div>
                                    <span className="sleeper">Sleeper</span><strong className="pc">PC</strong>
                                    <br/>
                                    <br/>
                                    <Link to="/register">
                                        <Button>
                                            Register
                                        </Button>
                                    </Link>
                                </div>
                                {/*Add image later*/}
                                <img/>
                            </nav>
                        </Cutout>
                    </div>
                </ThemeProvider>
            </Wrapper>
        </div>

    );
}

export default Landing;
