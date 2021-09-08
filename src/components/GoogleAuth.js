import React from 'react';
import '../styles/GoogleAuth.css';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/authentication/actions';

class GoogleAuth extends React.Component { 
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
          window.gapi.client
            .init({
              clientId: process.env.REACT_APP_TODO_APP_API_KEY,
              scope: 'email',
            })
            .then(() => {
              this.auth = window.gapi.auth2.getAuthInstance();
              this.onAuthChange(this.auth.isSignedIn.get());
              this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
      }

    onAuthChange = (isSignedIn, e) =>{
        if (isSignedIn) {
            this.props.signIn(window.gapi.auth2.getAuthInstance().currentUser.get()
            .getBasicProfile().getName(),
              )           
        } else {
            this.props.signOut(
              
            )
          }
    };

    onSignInClick = () => {
        this.auth.signIn().then(function(){
          window.location.href = 'https://create-a-list.herokuapp.com/homepage'
        })
    }

    onSignOutClick = ()=>{
        this.auth.signOut().then(function(){
          window.location.href = '/'
        })
    } 

    renderAuthButton() {
        if (this.props.isSignedIn === null){
            return (
              null
              )
        } else if (this.props.isSignedIn){
            return (
                <div>
                    <h1>Welcome! Let's start creating your to do list today.</h1>
                    <button id='googleButton' onClick={this.onSignOutClick}>Sign Out</button>
                </div>
            );
        } else{
            return <button id='googleButton' onClick={this.onSignInClick}>Sign In</button>
        }
    };

    render(){
        return(
           <div>
                {this.renderAuthButton()}
           </div>
        ) 
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
  };
  
  export default connect(
    mapStateToProps,
    { signIn, signOut }
  )(GoogleAuth);






