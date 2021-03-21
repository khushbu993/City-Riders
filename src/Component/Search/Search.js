import React, { useEffect, useState } from 'react';
import './Search.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import googleMap from '../../images/Map.png';


const Search = () => {
    return (
        <div>
            <Header></Header>
            <div className="container search">
                <div className="row">
                    <div className="col-md-4">
                        <div className="search-form shadow p-3 mb-5 bg-body rounded">

                            <form>
                                <h3>Pick Form</h3>
                                <br />

                                <div className="mb-3">
                                    <label for="exampleInputText" className="form-label">Pick From</label>
                                    <input type="text" name="name" className="form-control" id="exampleInputText" placeholder="Location" required />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputText" className="form-label">Pick To</label>
                                    <input type="text" name="name" className="form-control" id="exampleInputText" placeholder="Location" required />
                                </div><br />

                                <Link to="/searchResult">
                                    <button className="btn input-block-level form-control btn btn-success" type="submit">Search</button>
                                </Link>
                            </form>

                        </div>
                        
                    </div>
                    <div className="col-md-8">
                        <div className="google-map">
                            <img src={googleMap} alt="googleMap" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;