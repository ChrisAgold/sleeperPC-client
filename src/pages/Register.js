import GlobalStyles from '../globalStyles.js';
// import {ThemeProvider} from 'styled-components';
// import original from "react95/dist/themes/original";

import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
// import styled from 'styled-components';
// import {TextField, Button, Cutout} from 'react95';
import Wrapper from '../assets/wrappers/RegisterPage';
// import {Link} from 'react-router-dom';
import {useAppContext} from '../context/appContext';

import {FormRow, Alert} from '../components';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

export const Register = () => {
    // global state -> useNavigate
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState)
    // CONTEXT -> showAlert GLOBAL STATE
    const {
        user,
        isLoading,
        showAlert,
        displayAlert,
        registerUser,
        loginUser,
        setupUser,
    } = useAppContext()

    // MEMBER
    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    // REGISTER
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const {name, email, password, isMember} = values
        if (!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
        const currentUser = {name, email, password}
        if (isMember) {
            setupUser({
                currentUser,
                endPoint: 'login',
                alertText: 'Login Successful! Redirecting...'
            })
        } else {
            setupUser({
                currentUser,
                endPoint: 'register',
                alertText: 'User Created! Redirecting...'
            })
        }
        console.log(values)
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [user, navigate])

    return (
        <div>
            <GlobalStyles/>
            <Wrapper className="register">
                {/*<ThemeProvider theme={original}>*/}
                {/*    <Cutout id='cutout'>*/}
                <form className="form" onSubmit={onSubmit}>
                    <h3>{values.isMember ? "Login" : "Register"}</h3>
                    {showAlert && <Alert/>}
                    {/*NAME INPUT*/}
                    {!values.isMember && (
                        <FormRow
                            type='text'
                            name='name'
                            value={values.name}
                            handleChange={handleChange}
                        />
                    )}
                    {/*EMAIL INPUT*/}
                    <FormRow
                        type='email'
                        name='email'
                        value={values.email}
                        handleChange={handleChange}
                    />
                    {/*PASSWORD INPUT*/}
                    <FormRow
                        type='password'
                        name='password'
                        value={values.password}
                        handleChange={handleChange}
                    />
                    <button type='submit' className='btn btn-block' disabled={isLoading}>
                        submit
                    </button>
                    <p>
                        {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                        <button type="button" onClick={toggleMember} className='register-btn'>
                            {values.isMember ? 'Register' : 'Login'}
                        </button>
                    </p>
                </form>
                {/*NAME*/}
                {/*<TextField*/}
                {/*    value={values.name}*/}
                {/*    placeholder='name...'*/}
                {/*    onChange={handleChange}*/}
                {/*    fullWidth*/}
                {/*/>*/}
                {/*<br/>*/}
                {/*/!*EMAIL*!/*/}
                {/*<TextField*/}
                {/*    value={values.email}*/}
                {/*    name="name"*/}
                {/*    placeholder='email...'*/}
                {/*    onChange={handleChange}*/}
                {/*    fullWidth*/}
                {/*/>*/}
                {/*<br/>*/}
                {/*/!*PASSWORD*!/*/}
                {/*<TextField*/}
                {/*    value={values.password}*/}
                {/*    placeholder='password...'*/}
                {/*    onChange={handleChange}*/}
                {/*    fullWidth*/}
                {/*/>*/}
                {/*<br/>*/}
                {/*/!*LOGIN BUTTON*!/*/}
                {/*<div style={{display: 'flex', margin: 4, alignItems: 'center', justifyContent: 'center'}}>*/}
                {/*    <button type="submit" onSubmit={onSubmit} style={{margin: 4}}>*/}
                {/*        submit*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*/!*<br/>*!/*/}
                {/*/!*<TextField multiline rows={4} defaultValue='TEXT' fullWidth/>*!/*/}
                {/*/!*<br/>*!/*/}
                {/*<br/>*/}
                {/*LANDING BUTTON*/}
                {/*        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>*/}
                {/*            <Link to="/landing">*/}
                {/*                <Button>*/}
                {/*                    Home*/}
                {/*                </Button>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*    </Cutout>*/}
                {/*</ThemeProvider>*/}
            </Wrapper>
        </div>
    );
};

export default Register;
