import React from 'react';
import PropTypes from 'prop-types';

const ErrorView = (props) =>{
    return (<div>
        <h1>{props.errorCode}</h1>
        <h3>{props.errorMessage}</h3>
    </div>);
}

ErrorView.propTypes = {
    errorCode:PropTypes.number.isRequired,
    errorMessage:PropTypes.string
}

export default ErrorView;