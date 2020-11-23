import React from 'react';

const SingleEvent = (props) => {
    const {vnName, img, date, _id}  = props.event;
    const handleDelete = (e , id) => {
        fetch(`https://fast-depths-45518.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                e.offsetParent.offsetParent.offsetParent.style.display = 'none';
            }
        })
    }

    return (
        <>
            <div className="col-md-6">
                <div className="single-event">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={img} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-7">
                            <h4>{vnName}</h4>
                            <h6>Date: {date}</h6>
                            <div className="cancel">
                                <button onClick={(e) => handleDelete(e.currentTarget, _id)} className="btn btn-primary btn-cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleEvent;