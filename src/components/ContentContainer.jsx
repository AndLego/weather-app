import React from 'react';
import "../styles/ContentContainer.css";

const ContentContainer = ({children}) => {
    return (
        <div className="Main-container sunny">
            {children}
        </div>
    );
}

export {ContentContainer};