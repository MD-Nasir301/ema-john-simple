import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth()
    console.log("chhhhhhhhh", auth.user);
    return (
        
        <div>
            <h1>This is login</h1>
            {
                auth.user ? <button onClick={auth.signOutUser}>sign out</button> :
                <button onClick={auth.signInUser}>Sign In</button>
            }

            {
                auth.user  ? <h1> {auth.user.name} </h1> : <h1>None</h1>
            }
            
        </div>
    );
};

export default Login;