import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import { useForm } from "react-hook-form";
import './Register.css'
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {

    const {id} = useParams();
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [volunteer, setVolunteer] = useState({});

    useEffect(() => {
        fetch("https://fast-depths-45518.herokuapp.com/volunteer/"+ id)
        .then(res => res.json())
        .then(data => {
            setVolunteer(data);
        })
    }, [id])
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = userData => {
        const {name, img} = {...volunteer}
        const registerDetail = {name, img , ...userData};
        fetch("https://fast-depths-45518.herokuapp.com/addRegister", { 
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerDetail)
          })
          .then(res => res.json())
          .then(data =>{
            if(data){
                history.push("/events")
            }
        })
    }

    return (
        <>
            <div className="register-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="register-inner text-center mt-4">
                                <Link to="/">
                                    <img src={logo} alt="" className="img-fluid"/>
                                </Link> 
                                <div className="row mt-5">
                                    <div className="col-md-6 mx-auto">
                                        <div className="register-form">
                                            <h4>Register as a Volunteer</h4>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <input className="form-control" type="text" name="name" defaultValue={loggedInUser.name} placeholder="Full Name" ref={register({ required: true })} />
                                                {errors.name && <span>Name is required</span>}
                                                <input className="form-control" placeholder="UserName or Email" defaultValue={loggedInUser.email} type="email" name="email" ref={register({ required: true })} />
                                                {errors.email && <span>UserName or Email is required</span>}
                                                <input className="form-control" placeholder="Date" type="date" name="date" ref={register({ required: true })} />
                                                {errors.date && <span>Date is required</span>}
                                                <input className="form-control" placeholder="Description" type="text" name="description" ref={register({ required: true })} />
                                                {errors.description && <span>Description is required</span>} 
                                                <input className="form-control" placeholder="Organize books at the library." type="text" defaultValue={volunteer.name} name="vnName" ref={register({ required: true })} />
                                                {errors.vnName && <span>Volunteer name is required</span>}
                                                <input type="submit" className="btn btn-primary register-btn" value="Register"/>
                                            </form>                                            
                                        </div>
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

export default Register;