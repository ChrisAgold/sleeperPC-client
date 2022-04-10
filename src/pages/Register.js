import GlobalStyles from '../globalStyles.js';
import {ThemeProvider} from 'styled-components';
import original from "react95/dist/themes/original";
import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {TextField, Button, Cutout} from 'react95';
import Wrapper from '../assets/wrappers/RegisterPage';
import {Link} from 'react-router-dom';

import { FormRow,Alert } from '../components';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: true,
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
                {/*<ThemeProvider theme={original}>*/}
                {/*    <Cutout id='cutout'>*/}
<form className="form" onSubmit={onSubmit}>
    <h3>Login</h3>
    {values.showAlert && <Alert/>}
    {/*NAME INPUT*/}
    <FormRow
    type='text'
    name='name'
    value={values.name}
    handleChange={handleChange}
    />
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
<button type='submit' className='btn btn-block'>
    submit
</button>
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
