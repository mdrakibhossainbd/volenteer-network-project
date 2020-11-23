import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import logo from '../../images/logo.svg';
import SingleAdminEvents from './SingleAdminEvents';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`https://fast-depths-45518.herokuapp.com/allEvents`)
        .then(res => res.json())
        .then(data => {
            setEvents(data)
        })
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 px-0">
                        <div className="admin-sidebar">
                            <Link to="/">
                                <img src={logo} alt="" className="img-fluid"/>
                            </Link>
                            <ul className="list-unstyled toggle-list lists">
                                <li>
                                    <Link  style={{color: '#207FEE'}} to="/admin">Volunteer register list</Link>
                                </li>
                                <li>
                                    <Link to="/addevent">Add event</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 px-0">
                        <div className="admin-main">
                            <h2>Volunteer register list</h2>
                            <div className="admin-lists">
                                <ul className="list-unstyled">
                                    <li>Name</li>
                                    <li>Email ID</li>
                                    <li>registration date</li>
                                    <li>Volunteer list</li>
                                    <li>Action</li>
                                </ul>
                                    {
                                        events.map(event => <SingleAdminEvents event={event} key={event._id}></SingleAdminEvents>)
                                    }                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;