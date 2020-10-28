import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ url, label, onChange, placeholder, value, error }) => {
    let wrapperClass = "form-group";
    if (error && error.length > 0){
        wrapperClass += " " + "has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={url}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default TextInput;