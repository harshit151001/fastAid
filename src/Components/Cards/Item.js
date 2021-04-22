import React from "react";

const Item = ({ name, id, company, city, contact, quantity }) => {
  return (
    <div className="col-md col-md-6">
      <div className="card shadow-sm rounded input-group p-2 px-3 my-2 card-special">
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="h4 my-0 text-success">name</div>
          <div className="my-0">
            <button type="button" class="btn btn-danger">
              Report
            </button>
          </div>
        </div>
        <div className="text-muted mb-0">company name</div>
        <div className="mb-0">
          <strong>city</strong>
        </div>
        <div className="mb-0">address</div>
        <div className="mb-0">contact no</div>
        <div className="mb-0">quantity</div>
      </div>
    </div>
  );
};

export default Item;
