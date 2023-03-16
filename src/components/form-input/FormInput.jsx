import React from 'react';
import './form-input.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      {label && (
        <label
          htmlFor="name"
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
