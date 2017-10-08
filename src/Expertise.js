import React from 'react';

export default (props) => (
    <div className="expertise">
        <div className="expertise-title">
            {props.title}
        </div>
        <div className="expertise-description">
            {props.description}
        </div>
    </div>
);