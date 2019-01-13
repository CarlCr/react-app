import React from 'react';

const Cards = (props) => {
    return (
        <div className={'homecard'}>
            <div className="col-md-4">
            <div className="card" style={{width:'20rem',marginTop:'10px'}}>
            <img className="card-img-top mx-auto d-block"   src={props.img} alt="Card image cap"/>
            <div className="card-block">
                <h5 className="card-title">{props.title }</h5>
                <p className ="card-text" >{props.text}</p>
                <a href="#" className="btn btn-info btn-go" onClick ={props.action}> Learn More </a>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Cards;