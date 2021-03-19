import React from 'react';
import './Login.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="login-form shadow p-3 mb-5 bg-body rounded">
                            <form>
                                <h3>Login</h3>
                                <br/>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
                                </div>
                                <div className="d-flex justify-content-between mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label> <a className="text-success" href="#">Forgot password</a>
                                </div><br/>
                                <button className="btn input-block-level form-control btn btn-success" type="submit">Log In</button><br/>
                                <div id="emailHelp" className="form-text text-center ">
                                    <p>Don't have an account ? <Link className="text-success" to="/createAccount">Create an account</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;