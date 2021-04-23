import React, { useState, useEffect } from "react";

const Item = ({
  name,
  id,
  companyName,
  city,
  contactNumber,
  stock,
  address,
}) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="col-md col-md-6">
      <div className="card shadow-sm rounded input-group p-2 px-3 my-2 card-special">
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="h4 my-0 text-success">
            <input
              type="text"
              disabled={disabled}
              placeholder="name"
              value={name}
              d
            />
          </div>
        </div>
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="text-muted mb-0">
            <input
              type="text"
              disabled={disabled}
              placeholder="Company Name"
              value={companyName}
            />
          </div>
        </div>
        <div className="mb-0">
          <strong>
            <input
              type="text"
              disabled={disabled}
              placeholder="City"
              value={city.name}
            />
          </strong>
        </div>
        <div className="mb-0">
          <input
            type="text"
            disabled={disabled}
            placeholder="Address"
            value={address}
          />
        </div>
        <div className="mb-0">
          <input
            type="text"
            disabled={disabled}
            placeholder="Contact No"
            value={contactNumber}
          />
        </div>
        <div className="mb-0">
          <input
            type="text"
            disabled={disabled}
            placeholder="Quantity"
            value={stock}
          />
        </div>
        <div className="mb-0 d-flex justify-content-start align-items-center hid-on-large">
          <button
            style={{ width: "90px" }}
            type="button"
            className="btn btn-danger p-1 mt-2 me-2"
          >
            Delete
          </button>
          <div className="my-0">
            <button
              style={{ width: "90px" }}
              type="button"
              className="btn btn-success p-1 mt-2"
              onClick={() => setDisabled(false)}
            >
              {disabled ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
