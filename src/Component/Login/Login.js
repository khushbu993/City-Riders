import React, { useContext, useState } from 'react';
import './Login.css';
import Header from '../Header/Header';
import { Link, useHistory, useLocation } from 'react-router-dom';
import singleLineBorder from '../../images/single-line-border.png';
import github from '../../images/github.png';
import google from '../../images/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        newUser: false,
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
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log('sign in user info', res.user);
                    const { displayName, email } = res.user;
                    const signedInUser = { name: displayName, email }
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                    console.log(signedInUser);
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
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="login-form shadow p-3 mb-5 bg-body rounded">

                            <form onSubmit={handleSubmit}>
                                <h3>Login</h3>
                                <br />

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" name="email" onBlur={handleBlur} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" required />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" name="password" onBlur={handleBlur} className="form-control" id="exampleInputPassword1" placeholder="Enter your password" required />
                                </div>

                                <div className="d-flex justify-content-between mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label> <Link className="text-success" to="/forgotPassword">Forgot password</Link>
                                </div>
                                <br />

                                <button className="btn input-block-level form-control btn btn-success" type="submit">Log In</button>
                                <br />

                                <div id="emailHelp" className="form-text text-center ">
                                    <p>Don't have an account ? <Link className="text-success" to="/createAccount">Create an account</Link></p>
                                </div>
                            </form>

                            <p style={{ color: 'red' }}>{user.error}</p>
                            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} SuccessFully</p>}

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

export default Login;