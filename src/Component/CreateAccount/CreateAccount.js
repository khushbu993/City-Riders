import React, { useContext, useState } from 'react';
import './CreateAccount.css'
import Header from '../Header/Header';
import { Link, useHistory, useLocation } from 'react-router-dom';
import singleLineBorder from '../../images/single-line-border.png';
import github from '../../images/github.png';
import google from '../../images/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const CreateAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
    //Google Sign In
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(signedInUser);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            });
    }

    //GitHub Sign In 
    const handleGitHubSignIn = () => {
        const gitHubProvider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(gitHubProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(signedInUser);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            });
    }

    //Email & Password Authentication
    //handleBlur
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isFieldValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            //state up[date
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    //handleSubmit
    const handleSubmit = (e) => {
        // console.log(user.email, user.password);
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // Signed in 
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    //Update user Name
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user name updated successfully');
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <Header></Header>
            <div className="container mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="create-account-form shadow p-3 mb-5 bg-body rounded">

                            <form onSubmit={handleSubmit}>
                                <h3>Create an Account</h3>
                                <br />

                                <div className="mb-3">
                                    <label for="exampleInputText" className="form-label">Name</label>
                                    <input type="text" name="name" onBlur={handleBlur} className="form-control" id="exampleInputText" placeholder="Enter your Name" required />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">User Name or Email</label>
                                    <input type="email" name="email" onBlur={handleBlur} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" required />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" name="password" onBlur={handleBlur} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" name="password" onBlur={handleBlur} className="form-control" id="exampleInputPassword1" placeholder=" Confirm password" required />
                                </div>
                                <br />

                                <button className="btn input-block-level form-control btn btn-success" type="submit">Create an account</button><br />

                                <div id="emailHelp" className="form-text text-center ">
                                    <p>Already have an account ? <Link className="text-success" to="/login">Log In</Link></p>
                                </div>
                            </form>

                            <p style={{ color: 'red' }}>{user.error}</p>
                            {user.success && <p style={{ color: 'green' }}>User created SuccessFully</p>}

                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="bottom-text d-flex justify-content-center">
                            <img src={singleLineBorder} alt="" />
                            <p>Or</p>
                            <img src={singleLineBorder} alt="" />
                        </div>
                        <div className="social-media-button mt-4">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline-secondary btn-block form-control rounded-pill btn-lg" type="submit">
                                <img style={{ width: '30px', margin: '-9px 0 0 -107px' }} src={google} alt="" />    Continue with Google
                            </button>
                            <button onClick={handleGitHubSignIn} className="btn btn-outline-info btn-block form-control rounded-pill btn-lg" type="submit">
                                <img style={{ width: '45px', margin: '-9px 0 0 -87px' }} src={github} alt="" />    <span>Continue with GitHub</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;