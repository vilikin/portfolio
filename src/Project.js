import React from 'react';

export default (props) => (
    <div className="project">
        <img src={props.image} alt=""/>
        <div className="info">
            <h3>{props.title}</h3>
            {props.description}
            {
                props.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank"><i className="fa fa-chevron-right link-icon"/> {link.title}</a>
                ))
            }
        </div>
    </div>
);