import GlobalStyles from '../globalStyles.js'
import {ThemeProvider} from 'styled-components';
import original from "react95/dist/themes/original";
import React, {useState} from 'react';
import styled from 'styled-components';
import {TextField, Button, Cutout} from 'react95';
import Wrapper from '../assets/wrappers/RegisterPage'
import {Link} from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

export const Register = () => {
    const [values, setValues] = useState(initialState)
    // global state and useNavigate

    const handleChange = (e) => {
        console.log(e.target)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <div>
            <GlobalStyles/>
            <Wrapper className="register">
                <ThemeProvider theme={original}>
                    <Cutout id='cutout'>
                        {/*NAME*/}
                        <TextField
                            placeholder='name...'
                            onChange={handleChange}
                            fullWidth
                        />
                        <br/>
                        {/*EMAIL*/}
                        <TextField
                            placeholder='email...'
                            onChange={handleChange}
                            fullWidth
                        />
                        <br/>
                        {/*PASSWORD*/}
                        <TextField
                            placeholder='password...'
                            onChange={handleChange}
                            fullWidth
                        />
                        <br/>
                        {/*LOGIN BUTTON*/}
                        <div style={{display: 'flex', margin: 4, alignItems: 'center', justifyContent: 'center'}}>
                            <Button style={{margin: 4}}>
                                <form onSubmit={onSubmit}>Login</form>
                            </Button>
                        </div>
                        {/*<br/>*/}
                        {/*<TextField multiline rows={4} defaultValue='TEXT' fullWidth/>*/}
                        {/*<br/>*/}
                        <br/>
                        {/*LANDING BUTTON*/}
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Link to="/landing">
                                <Button>
                                    Home
                                </Button>
                            </Link>
                        </div>
                    </Cutout>
                </ThemeProvider>
            </Wrapper>
        </div>
    );
};

export default Register;
