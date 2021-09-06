import React from "react";

class GoogleAuthentication extends React.Component{
    insertGapiScript(){
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js'
        script.onload = () =>{
            this.initializeGoogleSignIn()
        }
        document.body.appendChild(script)
    }
    initializeGoogleSignIn(){
        window.gapi.load('auth2', ()=>{
            window.gapi.auth2.init({
                client_id: process.env.REACT_APP_TODO_APP_API_KEY
            })
            console.log('API INITED')

            window.gapi.load('signIn2', ()=>{
                const params ={
                    onSuccess: () =>{
                        console.log('User has finished signing up')
                    }
                }
                window.gapi.signin2.render('loginButton', params)
            })
        })
    }
    componentDidMount(){
        console.log('Loading')

        this.insertGapiScript()
    }
    render(){
        return(
            <div>
                <h1>Google Login</h1>
                <a class="g-signin2" data-onsuccess="onSignIn">Sign In with Google</a>
            </div>
        )
    }
}

export default GoogleAuthentication
