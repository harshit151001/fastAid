import React, { useState, useEffect, useMemo } from "react";
// import { date } from "yup";
import EditableCard from "../Components/Cards/EditableCard";
import ItemsList from "../Components/Lists/ItemsList";
import { getItemsForUser, isAuthenticated } from "../Helper/Enpoints/Endpoints";

const zIndex = 100;

const Dashboard = ({ cities, categories }) => {
  const {
    user: { _id },
    token,
  } = useMemo(() => isAuthenticated(), []);

  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const getAndSetItems = async () => {
        const response = await getItemsForUser(_id, token);
        setItems(response);
      };
      getAndSetItems();
    }
    return () => (mounted = false);
  }, [_id, token]);

  const pushEmptyProduct = () => {
    setItems((items) => [
      ...items,
      {
        _id: Date.now(),
        companyName: "",
        city: "",
        name: "",
        contactNumber: "",
        stock: "",
        address: "",
        create: true,
      },
    ]);
  };

  return (
    <div style={{ background: "#fafafa", zIndex: 0 }} className="bg-light">
      <div
        className="alert alert-success mt-0 mb-2 d-flex justify-content-between align-items-center"
        role="alert"
      >
        <button
          onClick={pushEmptyProduct}
          type="button"
          className="btn btn-success order-2"
        >
          Add Resource
        </button>
        <span className="lead order-1">No of products: {items.length}</span>
      </div>
      <ItemsList>
        {items.map(
          (
            {
              name,
              stock,
              _id,
              contactNumber,
              address,
              companyName,
              city,
              create,
              category,
            },
            index
          ) => (
            <EditableCard
              zIndex={zIndex - index}
              name={name || ""}
              stock={stock || ""}
              key={_id}
              id={_id}
              city={city || ""}
              companyName={companyName || ""}
              address={address || ""}
              contactNumber={contactNumber || ""}
              setItems={setItems}
              create={create}
              cities={cities}
              categories={categories}
              category={category}
            />
          )
        )}
      </ItemsList>
    </div>
  );
};

export default Dashboard;
