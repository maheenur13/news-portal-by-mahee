import React,{useContext} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from '@material-ui/core';
import {userContext} from '../../App';
import firebaseConfig from './firebase.config';
const SignIn = () => {
    const {loggedInAdminInfo}=useContext(userContext);
    const [loggedInAdmin, setLoggedInAdmin]= loggedInAdminInfo;
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleSignIn =()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
    const newAdminInfo = {...user};
    newAdminInfo.name =user.displayName;
    newAdminInfo.photo =user.photoURL;
    setLoggedInAdmin(newAdminInfo);
    
    console.log(loggedInAdmin)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
 
}
const handleLogOut = () => {
    setLoggedInAdmin([]);
}
    return (
        <div>
           {!loggedInAdmin.name? 
           <Button onClick={handleSignIn}>Sign In As Admin</Button>
        :
        <Button onClick={handleLogOut}>Log Out</Button>
        }
        </div>
    );
};

export default SignIn;