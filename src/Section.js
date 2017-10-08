import React from 'react';

export default (props) => (
    <div className="section">
        <h2>{props.header}</h2>

        {props.children}
    </div>
);