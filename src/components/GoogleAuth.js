import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as AuthorizationAction from '../redux/authorization'

const GoogleAuth =  ({dispatch, isSignedIn}) =>{
    const [auth, setAuth] = useState(null);

    useEffect(()=>{
        const params = {
            clientId: `${process.env.REACT_APP_TODO_APP_API_KEY}`,
            scope: 'email',
        };

    window.gapi.load('client:auth2', ()=>{
        window.gapi.client.init(params).then(()=>{
            setAuth(window.gapi.auth2.getAuthInstance());
            onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange)    
        })
    })
    }, []);

    const onAuthChange = isSignedIn =>{
        if (isSignedIn){
            dispatch(
                AuthorizationAction.signIn(
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
            window.location.href = '/'
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
                    <h1>{`Start creating your list`}</h1>
                    <button id='googleButton' onClick={onSignOutClick}>Signout</button>
                </div>
            );
        } else{
            return <button id='googleButton' onClick={onSignInClick}>Sign In</button>
        }
    };
    
    return <div>{renderAuthButton()}</div>

}

const mapStateToProps = state =>{
    return {isSignedIn: state.auth.isSignedIn, 
        name: state.auth.name,
    }
}

export default connect(mapStateToProps)(GoogleAuth)






