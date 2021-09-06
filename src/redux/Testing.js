import React, {useEffect, useState}from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Modal } from 'react-bootstrap';
import { googleOAuth2 } from './authentication/actions';
// import { googleReducer } from './authentication/reducers';

const Testing = (isSignedOut, isSignedIn, googleReducer, dispatch, signIn, signOut) => {
  const [auth, setAuth] = useState(null);
    
  console.log('googleReducer:',googleReducer)
  console.log('googleOAth2', googleOAuth2)

  const onSuccess = res =>{
    console.log('[Login Success] currentUser:', res.profileObj)   
    
}
const onFailure = res =>{
    console.log('[Login failed] res:', res)
}

const signingIn = () => {
  window.location.href = 'http://localhost:3000/homepage'
} 

  useEffect(()=>{
    const params = {
        clientId: `${process.env.REACT_APP_TODO_APP_API_KEY}`,
        scope: 'email',
    }}, []);
    
    function LoginModal() {   
      return (
        <>  
          <GoogleLogin
            clientId={process.env.REACT_APP_TODO_APP_API_KEY}
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
        </>
      );
    }
    

    const LoggedIn = ()=> {
      return (
        <GoogleLogout
          clientId= {process.env.REACT_APP_TODO_APP_API_KEY}
          buttonText="Logout"
          onLogoutSuccess={googleOAuth2}
        />,
        window.location.href = 'http://localhost:3000/homepage'
      );
    }
    const LoggedOut = ()=> {
        return (
          <LoginModal />
        );     
      }

      const signingOut = () =>{
        window.gapi.auth2.init({
          client_id: process.env.REACT_APP_TODO_APP_API_KEY
        })
        
      }

      const onSignOutClick = () =>{
        window.gapi.auth2.getAuthInstance().signOut().then(function (){
            window.location.href = '/'
        })
    };

    const onSignInClick  = () => {
        window.gapi.auth2.getAuthInstance().signIn().then(function (){
            // window.location.href = 'https://create-a-list.herokuapp.com/homepage'
                window.location.href = 'http://localhost:3000/homepage'
        })
        
      }

    const renderAuthButton = () =>{
        if (isSignedIn === null){
            return null
        } else if (isSignedIn){
            return (
                <div>
                    <h1>Welcome! Let's start creating your to do list today.</h1>
                    <button id='googleButton' onClick={signOut} href='http://localhost:3000'>Signout</button>
                </div>
            );
        } else{
            // return <button id='googleButton' onClick={signingOut}>Sign In</button>
            return <div class="g-signin2" data-onsuccess="onSignIn" onClick={onSignInClick} >Sign In</div>
        }
    };


    const HandleAuth = ( googleUser)=> {
        const isLoggedIn = LoggedIn
      if (isLoggedIn){
        return <LoggedIn />
      }
      return <LoggedOut />;
    }

    return (
        <div>{renderAuthButton()}</div>
        // <div>{HandleAuth()}</div>
    );
}

  


  const mapStateToProps = state =>{
    return {
        ...state,
        isSignedIn: state.auth.isSignedIn, 
        name: state.auth.name,
        isSignedOut: state.auth.isSignedOut
    }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ googleOAuth2 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Testing);