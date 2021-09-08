import GoogleAuth from "./GoogleAuth"
import WelcomePageContent from "./WelcomePageContent";

const WelcomePage = () => {
    return (
        <>
        <div>
            <GoogleAuth/>
            <div className="welcomePage">
                <h1 className="welcome">Welcome! Let's start creating your to do list today.</h1>
                <WelcomePageContent/>
            </div>
        </div>
        </>
    )
}

export default WelcomePage
