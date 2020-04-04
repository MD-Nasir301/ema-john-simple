// import React from 'react';
// import Auth from './useAuth';

// const Login = () => {
//     const auth = Auth()
//     return (
        
//         <div>
//             <h1>This is login</h1>
//             {
//                 auth.user ? <button onClick={auth.signOutUser}>sign out</button> :
//                 <button onClick={auth.signInUser}>Sign In</button>
//             }

//             {
//                 auth.user  ? <h1> {auth.user.name} </h1> : <h1>None</h1>
//             }
            
//         </div>
//     );
// };

// export default Login;

import React from 'react';
import Auth from './useAuth';
// import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const handleSignIn = () =>{
        auth.signInUser()
        .then(res => {
            window.location.pathname = '/review';
        })
    }
    const handleSignOut = () => {
        auth.signOutUser()
        .then(res => {
            window.location.pathname = '/';
        });
    }
    return (
        <div>
            <h1>Join the Party !!!</h1>
            {
                auth.user ? <button onClick={handleSignOut}>Sign out</button> :
                <button onClick={handleSignIn}>Sign in with Google</button>
            }
        </div>
    );
};

export default Login;