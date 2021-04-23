import React from "react";

const Item = ({ name, id, company, city, contact, quantity }) => {
  return (
    <div className="col-md col-md-6">
      <div className="card shadow-sm rounded input-group p-2 px-3 my-2 card-special">
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="h4 my-0 text-success">
            <input type="text" placeholder="name" />
          </div>
        </div>
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="text-muted mb-0">
            <input type="text" placeholder="Company Name" />
          </div>
        </div>
        <div className="mb-0">
          <strong>
            <input type="text" placeholder="City" />
          </strong>
        </div>
        <div className="mb-0">
          <input type="text" placeholder="Address" />
        </div>
        <div className="mb-0">
          <input type="text" placeholder="Contact No" />
        </div>
        <div className="mb-0">
          <input type="text" placeholder="Quantity" />
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
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
