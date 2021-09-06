import React from 'react'
import GoogleLogout from 'react-google-login'

const clientId = process.env.REACT_APP_TODO_APP_API_KEY
const responseGoogle = (response)=>{
    console.log(response)
}
export const Logout = () => {
    const onSuccess = () =>{
        console.log('Logged out Successfully')
    }

    const signingOut = () => {
        window.location.href = 'http://localhost:3000'
    } 
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
            render={renderProps => (
                <button onClick={renderProps.onClick, signingOut} disabled={renderProps.disabled}>
                    Google Logout
                </button>
            )}
                buttonText="Logout"
                onLogoutSuccess={responseGoogle}
            />
        </div>
    )
}

export default Logout;