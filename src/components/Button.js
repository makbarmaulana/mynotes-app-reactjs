import React from "react"
import PropTypes from 'prop-types';


function Button ({ type, className, onClickBtn, btnName }) {
    return (
        <button type={type} className={className} onClick={onClickBtn}>{btnName}</button>
    )
}


Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClickBtn: PropTypes.func,
    btnName: PropTypes.object,
};


export default Button