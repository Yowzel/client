import { GoogleLogout } from "react-google-login";

const clientId ='553859060156-h3632svbkihq01qs1p68uakep7glhs2a.apps.googleusercontent.com'

function Logout () {
    const onSuccess = () => {
        console.log("Logout successful!")
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess = {onSuccess}
            />  
        </div>
    )
}

export default Logout