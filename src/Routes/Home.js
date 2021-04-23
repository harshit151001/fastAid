import React, { useState, useEffect } from "react";
import Item from "../Components/Cards/Item";
import ItemsList from "../Components/Lists/ItemsList";
import { getItems } from "../Helper/Enpoints/Endpoints";

const Home = ({ city }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const getAndSetItems = async () => {
        const response = await getItems(city);
        setItems(response);
      };
      getAndSetItems();
    }
    return () => (mounted = false);
  }, [city]);

  return (
    <div className="bg-light">
      <div
        className="alert alert-success mt-0 mb-2 d-flex justify-content-between align-items-center"
        role="alert"
      >
        <span className="lead order-1">Please login to add resources</span>
      </div>
      <ItemsList>
        {items.map(
          ({ name, stock, _id, contactNumber, address, companyName, city }) => (
            <Item
              name={name}
              stock={stock}
              key={_id}
              id={_id}
              city={city}
              companyName={companyName}
              address={address}
              contactNumber={contactNumber}
            />
          )
        )}
      </ItemsList>
    </div>
  );
};

export default Home;

// name,
//   id,
//   companyName,
//   city,
//   contactNumber,
//   stock,
//   address,
