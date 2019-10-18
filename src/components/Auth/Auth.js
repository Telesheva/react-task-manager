import React from 'react';
import './Auth.css';
import FormContainer from "../../hoc/FormContainer/FormContainer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Auth = props => (
    <FormContainer>
        <Input
            type="email"
            placeholder="Enter your email"
            errorMessage="Enter the proper email!"
        />
        <Input
            type="password"
            placeholder="Enter your password"
            errorMessage="Enter the proper password!"
        />
        <div className="auth-buttons">
        <Button
            type="auth-btn login-btn"
        >
            Log in
        </Button>
        <Button
            type="auth-btn signup-btn"
        >
            Sign up
        </Button>
        </div>
    </FormContainer>
);

export default Auth;