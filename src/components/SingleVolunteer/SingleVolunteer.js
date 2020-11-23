import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SingleVolunteer.css'

const SingleVolunteer = (props) => {
    const {name, img, _id} = props.vn;
    const image = "https://i.ibb.co/VSdRmB3/animal-Shelter.png";

    const history = useHistory();
    const handleSubmit = (id) => {
        history.push("/register/"+ id)
    }
    return (
        <>
            <div className="col-md-3">
                <div onClick={() => handleSubmit(_id)} className="sn-volunteer">
                    <img src={img || image} alt="" className="img-fluid"/>
                    <h3>{name}</h3>
                </div>
            </div>
        </>
    );
};

export default SingleVolunteer;