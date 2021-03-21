import React, { useEffect, useState } from 'react';
import Frame from '../Frame/Frame';

const Rides = () => {
    const [ride, setRide] = useState([]);

    useEffect(() => {
        fetch('https://api.mocki.io/v1/9a2657cf')
            .then(res => res.json())
            .then(data => setRide(data))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        ride.map(ride => <Frame ride={ride}></Frame>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rides;