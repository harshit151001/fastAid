import React from "react";

const Input = () => {
  return (
    <div className="col-md-4">
      <label for="validationCustom01" className="form-label">
        First name
      </label>
      <input
        type="text"
        className="form-control"
        id="validationCustom01"
        value="Mark"
        required
      />
    </div>
  );
};

export default Input;
