import React from 'react';

export default (props) => (
    <div className="project">
        <img src={props.image}/>
        <div className="info">
            <h3>{props.title}</h3>
            {props.description}
            <a href={props.link}><i className="fa fa-link link-icon"/> {props.linkTitle}</a>
        </div>
    </div>
);