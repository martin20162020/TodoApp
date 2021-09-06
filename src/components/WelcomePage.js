import Testing from "../redux/Testing"
import GoogleAuth from "./GoogleAuth"
import GoogleAuthentication from "./GoogleAuthentication"
import Login from "./Login"
import WelcomePageContent from "./WelcomePageContent"

const WelcomePage = () => {
    return (
        <div>
            {/* <GoogleAuth/> */}
            <Login/>
            {/* <Testing/> */}
            <div className="welcomePage">
                <h1 className="welcome">Welcome! Let's start creating your to do list today.</h1>
                <WelcomePageContent/>
            </div>
        </div>
    )
}

export default WelcomePage
