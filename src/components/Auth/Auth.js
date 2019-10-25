import React, {useCallback, useContext, useState} from "react";
import './Auth.css';
import {withRouter} from "react-router";
import app from "../../base";
import FormContainer from "../../hoc/FormContainer/FormContainer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
//import {AuthContext} from "../../AuthContext";


const Auth = ({ history }) => {

    const [isAuth, setAuth] = useState({
        isLogin: false,
        isSignUp: false
    });

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
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
            const { email, password } = event.target.elements;
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

/*    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }
*/

    return (
        <div>
            <FormContainer onFormSubmit={isAuth.isSignUp ? handleSignUp : isAuth.isLogin ? handleLogin : null}>
                <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    errorMessage="Enter the proper email!"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    errorMessage="Enter the proper password!"
                />
                <div className="auth-buttons">
                    <Button
                        type="auth-btn login-btn"
                        onClick={() => setAuth({...isAuth, isLogin: true})}
                    >
                        Log in
                    </Button>
                    <Button
                        type="auth-btn signup-btn submit"
                        onClick={() => setAuth({...isAuth, isSignUp: true})}
                    >
                        Sign up
                    </Button>
                </div>
            </FormContainer>
        </div>
    );
};

export default withRouter(Auth);