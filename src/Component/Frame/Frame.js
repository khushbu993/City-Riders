import React from 'react';
import frame from '../../images/Frame.png';
import frame1 from '../../images/Frame-1.png';
import frame2 from '../../images/Frame-2.png';
import frame3 from '../../images/Frame-3.png';

const Frame = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around" style= {{marginTop: '200px'}}>
                    <div className="card col-md-2">
                            <div className="text-center mt-2">
                             <img style= {{width: '150px'}} src={frame}alt="frame"/>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text" style={{fontWeight: 'bolder', color: 'salmon'}}>BIKE</p>
                            </div>
                    </div>

                    <div className="card col-md-2">
                            <div className="text-center mt-2">
                             <img style= {{width: '150px'}} src={frame1}alt="frame"/>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text" style={{fontWeight: 'bolder', color: 'yellowgreen'}}>BUS</p>
                            </div>
                    </div>

                    <div className="card col-md-2">
                            <div className="text-center mt-2">
                             <img style= {{width: '150px'}} src={frame2}alt="frame"/>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text" style={{fontWeight: 'bolder', color: 'navy'}}>CAR</p>
                            </div>
                    </div>

                    <div className="card col-md-2">
                            <div className="text-center mt-2">
                             <img style= {{width: '150px'}} src={frame3}alt="frame"/>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text" style={{fontWeight: 'bolder', color: '#2c7df7'}}>TRAIN</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frame;