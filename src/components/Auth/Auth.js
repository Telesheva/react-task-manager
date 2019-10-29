import React, {useCallback, useState} from "react";
import './Auth.css';
import {withRouter} from "react-router";
import app from "../../base";
import FormContainer from "../../hoc/FormContainer/FormContainer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import is from 'is_js';

const Auth = ({history}) => {
    const [isAuth, setAuth] = useState({
        isLogin: false,
        isSignUp: false
    });

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const [valid, setValid] = useState({
        validEmail: false,
        validPassword: false,
        touched: false
    });

    return (
        <div>
            <FormContainer onFormSubmit={isAuth.isSignUp ? handleSignUp : isAuth.isLogin ? handleLogin : null}>
                <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    errorMessage="Enter the proper email!"
                    onChange={event => setValid({
                            ...valid,
                            validEmail: is.email(event.target.value)
                    })}
                    valid={valid.validEmail}
                    onFocus={() => setValid({...valid, touched: true})}
                    touched={valid.touched}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    errorMessage="Enter the proper password!"
                    onChange={event => setValid({
                        ...valid,
                        validPassword: event.target.value.length > 6
                    })}
                    valid={valid.validPassword}
                    onFocus={() => setValid({...valid, touched: true})}
                    touched={valid.touched}
                />
                <div className="auth-buttons">
                    <Button
                        type="auth-btn login-btn"
                        onClick={() => setAuth({...isAuth, isLogin: true})}
                        disabled={!valid.validEmail && !valid.validPassword}
                    >
                        Log in
                    </Button>
                    <Button
                        type="auth-btn signup-btn submit"
                        onClick={() => setAuth({...isAuth, isSignUp: true})}
                        disabled={!valid.validEmail && !valid.validPassword}
                    >
                        Sign up
                    </Button>
                </div>
            </FormContainer>
        </div>
    );
};

export default withRouter(Auth);