import GlobalStyles from '../globalStyles.js';
import {ThemeProvider} from 'styled-components';
import original from "react95/dist/themes/original";
import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {TextField, Button, Cutout} from 'react95';
import Wrapper from '../assets/wrappers/RegisterPage';
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
                {/*<ThemeProvider theme={original}>*/}
                {/*    <Cutout id='cutout'>*/}
<form className="form" onSubmit={onSubmit}>
                        <div className="form-row">
                            <label htmlFor='name' className='form-label'>
                                name
                            </label>
                            <input
                            type='text'
                            value={values.name}
                            name='name'
                            onChange={handleChange}
                            className='form-input'
                            />
                        </div>
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
