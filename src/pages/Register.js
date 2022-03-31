// import { useState, useEffect } from 'react'
// import Wrapper from '../assets/wrappers/RegisterPage'
//
// const initialState = {
//     name: '',
//     email: '',
//     password: '',
//     isMember: true,
// }
//
// const Register = () => {
//     const [values,setValues] = useState(initialState)
//     // global state and useNavigate
//
//     const handleChange = (e) =>
//     {console.log(e.target)
//     }
//     const onSubmit = (e) => {
//         e.preventDefault()
//         console.log(e.target)
//     }
//
//
//     return (
//         <Wrapper className="full-page">
//             <form className='form' onSubmit={onSubmit}>
//                 <h3>Login</h3>
//
//             </form>
//         </Wrapper>
//     )
// }
import GlobalStyles from '../globalStyles.js'
import {ThemeProvider} from 'styled-components';
import original from "react95/dist/themes/original";
import React, {useState} from 'react';
import styled from 'styled-components';
import {TextField, Button, Cutout} from 'react95';
import Wrapper from '../assets/wrappers/RegisterPage'

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
            <Wrapper style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                <ThemeProvider theme={original}>
                    <Cutout id='cutout'>
                        {/*NAME*/}
                        <TextField
                            placeholder='name...'
                            onChange={handleChange}
                            fullWidth
                        />
                        <br/>
                        {/**/}
                        <TextField
                            placeholder='email...'
                            onChange={handleChange}
                            fullWidth
                        />
                        <br/>
                        <TextField
                            placeholder='password...'
                            onChange={handleChange}
                            fullWidth
                        />
                        <br/>
                        <Button style={{marginLeft: 4}}>
                            <form onSubmit={onSubmit}>Login</form>
                        </Button>
                        {/*<br/>*/}
                        {/*<TextField multiline rows={4} defaultValue='TEXT' fullWidth/>*/}
                        {/*<br/>*/}
                    </Cutout>
                </ThemeProvider>
            </Wrapper>
        </div>
    );
};

export default Register;
