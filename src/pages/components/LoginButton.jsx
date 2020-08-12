import React, { useState, useContext } from 'react';
import { useGoogleLogin } from 'react-google-login';
import ClassesContext from '../../context/classesContext';
import googleIcon from './../../images/googleIcon.svg';

// refresh token
// import { refreshTokenSetup } from './../../utils/refreshToken';
import { login } from './../../api/api';

const clientId =
    '156693441252-2qou5n94e7q74c9r51uu88fnbo4c5afp.apps.googleusercontent.com';

function LoginButton() {
    const classes = useContext(ClassesContext);
    const [user, setUser] = useState({})



    const onSuccess = async (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );

        try {
            console.log("data sent to server")
            const response = await login(res)
            const userData = response.data
            console.log(userData)
            setUser(userData)
        } catch (exception) {
            console.log("Server not responding")
        }


    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login. 😢 `
        );
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        // isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <React.Fragment>
            <button onClick={() => signIn()} className={classes.loginButton}>
                <img src={googleIcon} alt="google login" className={classes.loginIcon}></img>
                <span className={classes.loginButtonText}>{user.name || "Sign in with Google"}</span>
            </button>
        </React.Fragment>
    );
}

export default LoginButton;