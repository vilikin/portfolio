import React from 'react';

export default (props) => (
    <div className="project">
        <img src={props.image} alt=""/>
        <div className="info">
            <h3>{props.title}</h3>
            {props.description}
            {
                props.links.map(link => (
                    <a href={link.url} target="_blank"><i className="fa fa-link link-icon"/> {link.title}</a>
                ))
            }
        </div>
    </div>
);