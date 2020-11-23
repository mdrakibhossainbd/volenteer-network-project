import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    return (
        <>
            <div className="home-wrapper">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-12 text-center">
                            <h1 className="upper">I grow by helping people in need.</h1>
                            <div className="row">
                                <div className="col-md-6 mx-auto mt-4">
                                    <div className="search-box">
                                        <input id="query" type="text" className="form-control" placeholder="Search...." />
                                        <Link to=" " >
                                            <button className="btn btn-primary search-btn btn-rounded">Search</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;