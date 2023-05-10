import {GoogleLogin} from 'react-google-login'

const clientId = "553859060156-h3632svbkihq01qs1p68uakep7glhs2a.apps.googleusercontent.com"

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login failed! res : " ,res);
    }

    return <div id='signInButton'>
        <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div>
}

export default Login