import React from 'react';
import './CreateAccount.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import singleLineBorder from '../../images/single-line-border.png';
import facebook from '../../images/facebook.png';
import google from '../../images/google.png';

const CreateAccount = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="create-account-form shadow p-3 mb-5 bg-body rounded">
                            <form>
                                <h3>Create an Account</h3>
                                <br/>
                                <div className="mb-3">
                                    <label for="exampleInputText" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleInputText" placeholder="Enter your Name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">User Name or Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" Confirm password"/>
                                </div><br/>
                                <button className="btn input-block-level form-control btn btn-success" type="submit">Create an account</button><br/>
                                <div id="emailHelp" className="form-text text-center ">
                                    <p>Already have an account ? <Link className="text-success" to="/login">Log In</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="bottom-text d-flex justify-content-center">
                            <img src={singleLineBorder} alt=""/>
                            <p>Or</p>
                            <img src={singleLineBorder} alt=""/>
                        </div>
                        <div className="social-media-button mt-4">
                        <button className="btn btn-outline-secondary btn-block form-control rounded-pill btn-lg" type="submit">
                            <img style={{width: '45px',margin:'-9px 0 0 -87px'}} src={facebook} alt=""/>    <span>Continue with Facebook</span>
                        </button>
                        <button className="btn btn-outline-secondary btn-block form-control rounded-pill btn-lg" type="submit">
                            <img style={{width: '30px',margin:'-9px 0 0 -107px'}} src={google} alt=""/>    Continue with Google
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;