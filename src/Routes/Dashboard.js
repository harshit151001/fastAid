import React from "react";
import EditableCard from "../Components/Cards/EditableCard";
import ItemsList from "../Components/Lists/ItemsList";

const Home = () => {
  return (
    <div className="bg-light">
      <div
        // style={{ marginTop: "0", marginBottom: "20px" }}
        className="alert alert-success mt-0 mb-2 d-flex justify-content-between align-items-center"
        role="alert"
      >
        <button type="button" className="btn btn-success order-2">
          Add Product
        </button>
        <span className="lead order-1">No of products: 20</span>
      </div>
      <ItemsList>
        <EditableCard />
        <EditableCard />
        <EditableCard />
        <EditableCard />
        <EditableCard />
        <EditableCard />
      </ItemsList>
    </div>
  );
};

export default Home;
