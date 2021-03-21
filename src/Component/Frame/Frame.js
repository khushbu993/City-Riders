import React from 'react';
import { Link } from 'react-router-dom';
import './Frame.css';

const Frame = (props) => {
    const { image, vehicle, id } = props.ride;
    return (
        <div className="col-md-3">
            <Link to={`/search/${id}`}>
                <div className="ride-card">
                    <div class="card">
                        <img src={image} class="card-img-top" alt="" />
                        <div class="card-body text-center">
                            <h5 class="card-text">{vehicle}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Frame;