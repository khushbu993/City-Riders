import React from 'react';
import './SearchResult.css';
import Header from '../Header/Header';
import googleMap from '../../images/Map.png';
import people from '../../images/peopleicon.png';

const SearchResult = () => {
    return (
        <div>
            <Header></Header>
            <div className="container search">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-4">
                        <div className="search-result shadow p-3 mb-5 bg-body rounded">
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-info m-3">
                                    <p className="card-text">Mirpur-1</p>
                                    <p className="card-text">Dhanmondi</p>
                                </div>
                            </div>

                            <div className="card text-white bg-success mb-3">
                                <div className="card-info m-3 d-flex">
                                    <p>Car</p>
                                    <img src={people} alt="" /><p>4</p>
                                    <p className="card-text">  $67</p>
                                </div>
                            </div>

                            <div className="card text-white bg-success mb-3">
                                <div className="card-info m-3">
                                    <p className="card-text">$67</p>
                                </div>
                            </div>

                            <div className="card text-white bg-success mb-3">
                                <div className="card-info m-3">
                                    <p className="card-text">$67</p>
                                </div>
                            </div>
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

export default SearchResult;