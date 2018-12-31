import React from 'react';

const HomeCard = (props) => {
    return (

        <
        div className = "col-12 col-ms-4" >
        <
        div className = "card"
        style = {
            { width: '20rem', marginTop: '10px' } } >
        <
        img className = "card-img-top mx-auto d-block"
        style = {
            { paddingTop: '3px' } }
        src = { props.img }
        alt = "Card image cap" / >
        <
        div className = "card-block" >
        <
        h5 classsName = "card-title" > { props.title } < /h5> <
        p className = "card-text" > { props.text } < /p> <
        a href = "#"
        className = "btn btn-info"
        onClick = { props.action } > Go Somewhere < /a> <
        /div> <
        /div> <
        /div>
    );
}

export default HomeCard;