import React from 'react'
import GoogleLogin from 'react-google-login';

const clientId = process.env.REACT_APP_TODO_APP_API_KEY
const responseGoogle = (response)=>{
    console.log(response)
}

console.log('responseGoogle', responseGoogle())

const Login = ({googleReducer}) => {
    const onSuccess = res =>{
        console.log('[Login Success] currentUser:', res.profileObj)  
        
    }
    const onFailure = res =>{
        console.log('[Login failed] res:', res)
    }
 
    const signingIn = (res) => {
        window.location.href = 'http://localhost:3000/homepage'
        console.log("HERE")
        console.log(res.profileObj)
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
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            
          /> 
          </a>
        </div>
    )
}

export default Login
