import React from "react";

const Item = ({
  name,
  id,
  companyName,
  city,
  contactNumber,
  stock,
  address,
}) => {
  return (
    <div className="col-md col-md-6">
      <div className="card shadow-sm rounded input-group p-2 px-3 my-2 card-special">
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="h4 my-0 text-success">{name}</div>
          <div className="my-0">
            <button id={id} type="button" className="btn btn-danger">
              Report
            </button>
          </div>
        </div>
        <div className="text-muted mb-0">{companyName}</div>
        <div className="mb-0 lead">
          <strong>{city.name}</strong>
        </div>
        <div className="mb-0 lead">{address}</div>
        <div className="mb-0 lead">Contact Information: {contactNumber}</div>
        <div className="mb-0 text-success lead">
          <strong>{stock} Available</strong>
        </div>
      </div>
    </div>
  );
};

export default Item;
