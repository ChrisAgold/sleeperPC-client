import Wrapper from '../assets/wrappers/ErrorPage'
import { Link } from 'react-router-dom'
import GlobalStyles from '../globalStyles.js'
import error from '../images/error.png';
import {Button, Cutout} from 'react95';
import {ThemeProvider} from 'styled-components';
import original from "react95/dist/themes/original";

const Error = () => {
    return (
        <div>
            <GlobalStyles/>
        <Wrapper className="error-page">
            <ThemeProvider theme={original}>
                <div className="error-cutout">
                <Cutout id='cutout'>
                    <div className='error-container'>
                <img style={{width: '50%', height: '50%'}} src={error} alt="error" />;
                <h3>404 PAGE NOT FOUND</h3>
                <p>We can't seem to find the page you're looking for......</p>
                <Link to="/register">
                    <Button style={{margin: 4}}>
                        Register
                    </Button>
                </Link>
                    </div>
                </Cutout>
                </div>
            </ThemeProvider>
        </Wrapper>
        </div>
    )
}

export default Error
