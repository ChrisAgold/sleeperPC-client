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



import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Cutout } from 'react95';
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
        <Wrapper>
        <div style={{ width: 400 }}>
            <div style={{ display: 'flex' }}>
                <TextField
                    placeholder='name...'
                    onChange={handleChange}
                    fullWidth
                />

                <Button  style={{ marginLeft: 4 }}>
                    <form onSubmit={onSubmit}>Login</form>
                </Button>
            </div>
            <br/>
            <TextField multiline rows={4} defaultValue='TEXT'fullWidth />
            <br />
        </div>
        </Wrapper>
    );
};

export default Register;
