import React, { useState, useEffect } from "react";
import Item from "../Components/Cards/Item";
import ItemsList from "../Components/Lists/ItemsList";
import { withRouter } from "react-router-dom";
import { getItemsFromQuery } from "../Helper/Enpoints/Endpoints";

const Search = (props) => {
  const { cityId, searchQuery, page } = props.match.params;
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const getAndSetItems = async () => {
        const response = await getItemsFromQuery(page, cityId, searchQuery);
        setItems(response);
      };
      getAndSetItems();
    }
    return () => (mounted = false);
  }, [cityId, page, searchQuery]);

  return (
    <div style={{ background: "#fafafa" }}>
      <div
        className="alert alert-success mt-0 mb-1 d-flex justify-content-between align-items-center"
        role="alert"
      >
        <span className="lead order-1">Please login to add resources</span>
      </div>
      <ItemsList>
        {items &&
          items.map(
            ({
              name,
              stock,
              _id,
              contactNumber,
              address,
              companyName,
              city,
            }) => (
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
      <div className="d-flex align-items-center justify-content-center p-4">
        <button
          disabled={page === 1}
          onClick={() =>
            props.history.push(
              `/search/${cityId}/${searchQuery}/${
                +page > 1 ? +page - 1 : +page
              }`
            )
          }
          className="btn btn-success mx-2"
        >
          Back
        </button>
        <button
          onClick={() =>
            props.history.push(`/search/${cityId}/${searchQuery}/${+page + 1}`)
          }
          className="btn btn-success mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default withRouter(Search);
