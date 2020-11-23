import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './EventTask.css'
import SingleEvent from './SingleEvent';

const EventTask = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`https://fast-depths-45518.herokuapp.com/events?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setEvents(data)
        })
    }, [])

    return (
        <>
            <Header />
            <div className="event-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto px-0">
                            <div className="event-inner">
                                <div className="row">
                                    {
                                        events.map(event => <SingleEvent key={event._id} event={event}></SingleEvent>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventTask;