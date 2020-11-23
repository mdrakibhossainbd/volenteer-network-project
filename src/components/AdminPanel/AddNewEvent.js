import React from 'react';
import './AdminPanel.css';
import logo from '../../images/logo.svg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddNewEvent = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = userData => {
        fetch("https://fast-depths-45518.herokuapp.com/addProduct", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data =>{
            alert("success")
        })
    }

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
                                    <Link to="/admin">Volunteer register list</Link>
                                </li>
                                <li>
                                    <Link  style={{color: '#207FEE'}} to="/addevent">Add event</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 px-0">
                        <div className="admin-main">
                            <h2>Volunteer register list</h2>
                            <div className="admin-lists">
                                <div className="admin-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="name">Event Title</label>
                                                <input className="form-control" type="text" name="name" placeholder="Enter title" ref={register({ required: true })} />
                                                {errors.name && <span>Name is required</span>}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="date">Event Date</label>
                                                <input className="form-control" placeholder="Date" type="date" name="date" ref={register({ required: true })} />
                                                {errors.date && <span>Date is required</span>}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="description">Description</label>
                                                <input className="form-control" placeholder="Description" type="text" name="description" ref={register({ required: true })} />
                                                {errors.description && <span>Description is required</span>}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="image">Description</label><br/>
                                                <input className="form_custom" placeholder="Banner"  ref={register()} type="file" name="image" />
                                            </div>                                            
                                        </div>
                                        <input type="submit" className="btn btn-primary event-btn" value="Register"/>
                                    </form> 
                                </div>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNewEvent;