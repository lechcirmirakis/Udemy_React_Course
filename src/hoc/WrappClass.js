import React from 'react';

const wrappClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
}

export default wrappClass;