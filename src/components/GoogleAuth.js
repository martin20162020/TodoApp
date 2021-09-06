import React, { useEffect, useState} from 'react';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import * as AuthorizationAction from '../redux/authentication/authorization';
import '../styles/GoogleAuth.css';
import { googleOAuth2 } from '../redux/authentication/actions';
import Login from './Login';
import Logout from './Logout';

const googleLogins = res =>{
    console.log(res)
}


const GoogleAuth =  ({dispatch, isSignedIn, isSignedOut, userAuth, signIn, signOut, googleReducer}) =>{
    const [auth, setAuth] = useState(null);
    const [res, setRes] = useState(null);

    const clientId = process.env.REACT_APP_TODO_APP_API_KEY
    useEffect(()=>{
        const params = {
            clientId: clientId,
            scope: 'email',
        };

    window.gapi.load('client:auth2', ()=>{
        window.gapi.client.init(params).then(()=>{
            setAuth(window.gapi.auth2.getAuthInstance());
            onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
            window.gapi.auth2.getAuthInstance().currentUser.get()
                .getBasicProfile().getName()
        })
    })
    }, []);

    const onAuthChange = (isSignedIn) =>{
        if (isSignedIn){
            let userName = 
                window.gapi.auth2.getAuthInstance().currentUser.get()
                .getBasicProfile().getName()
            dispatch(
                AuthorizationAction.signIn(
                    userName
                ),
            )
        } else {
            dispatch(
                AuthorizationAction.signOut(),
                );
        }
    };

    const onSignInClick  = () => {
        auth.signIn().then(function (){
            // window.location.href = 'https://create-a-list.herokuapp.com/homepage'
                window.location.href = 'http://localhost:3000/homepage'
        })
        
      } 
      

    const onSignOutClick = () =>{
        auth.signOut().then(function (){
            window.location.href = '/'
        })
    };

    const renderAuthButton = () =>{
        if (isSignedIn === null){
            return null
        } else if (isSignedIn){
            return (
                <div>
                    <h1>Welcome! Let's start creating your to do list today.</h1>
                    <button id='googleButton' onClick={onSignOutClick} href='http://localhost:3000'>Signout</button>
                </div>
            );
        } else{
            return <button id='googleButton' onClick={onSignInClick} href='http://localhost:3000/homepage'>Sign In</button>
        }
    };

    const onSuccess = res =>{
        console.log('[Login Success] currentUser:', res.profileObj)  
        console.log(res.profileObj.name)
    }

    console.log('usegooglelogin')

    const onFailure = res =>{
        console.log('[Login failed] res:', res)
    }
 
    const signingIn = (res) => {
        window.location.href = 'http://localhost:3000/homepage'
        console.log("HERE")
    } 

    return (
        <div><a href='http://localhost:3000/homepage'>
            <GoogleLogin
            clientId={clientId}
            render={renderProps => (
                <button onClick={renderProps.onClick, signingIn} disabled={renderProps.disabled}>
                    Google Login
                </button>
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            
          /> 
          </a>

          {renderAuthButton()}
        <Logout isSignedOut={isSignedOut} isSignedIn={isSignedIn}/>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        isSignedIn: state.auth.isSignedIn, 
        name: state.auth.name,
        isSignedOut: state.auth.isSignedOut
    }
}

export default connect(mapStateToProps)(GoogleAuth)






