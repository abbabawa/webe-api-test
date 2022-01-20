import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Facebook from './FacebookLogin';

const clientId = "293068939315-j9sg0k19mnep7mepfrs7vtkmt3n0lqfo.apps.googleusercontent.com";

function Login() {
    const [urlPrefix, setUrlPrefix] = useState('https://webe-api.herokuapp.com')
    useEffect(()=>{
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            // development build code
            setUrlPrefix("http://localhost:3001")
            console.log("dev")
        } else {
            // production build code
            setUrlPrefix("https://webe-api.herokuapp.com/")
            console.log("prod")
        }
    }, [])
//https://webe-api.herokuapp.com/api/auth/google/
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = async (googleData) => {
        console.log('Login Success:', googleData.profileObj);
        console.log(urlPrefix, googleData.tokenId)
        const res = await fetch(urlPrefix+"/api/auth/google/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
            token: googleData.tokenId
          }),
          headers: {
            "Content-Type": "application/json",
            'Accept': '*',
            "Access-Control-Allow": "*",
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "*"
          }
        }) 
        const data = await res.json()
        // console.log("data "+data)
        console.log(data)
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <>
            <div>
                { showloginButton ?
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign In"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null}

                { showlogoutButton ?
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Sign Out"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </GoogleLogout> : null
                }
            </div>
            <div>
                <Facebook urlPrefix={urlPrefix} />
            </div>
        </>
    );
}
export default Login;