import React, { useState, useEffect } from "react";
import Item from "../Components/Cards/Item";
import ItemsList from "../Components/Lists/ItemsList";
import { withRouter, Link } from "react-router-dom";
import { getItemsFromQuery } from "../Helper/Enpoints/Endpoints";
import Select from "react-select";

const Search = (props) => {
  const { cityId, searchQuery, page } = props.match.params;
  const [items, setItems] = useState([]);
  const filterOptions = [{ _id: "likes", name: "Most Liked" }];

  const [selectedFilter, setSelectedFilter] = useState("");

  const onchangeSelect = (filter) => {
    setSelectedFilter(filter);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const getAndSetItems = async () => {
        const response = await getItemsFromQuery(
          page,
          cityId,
          searchQuery,
          selectedFilter._id
        );
        console.log(response);
        setItems(response);
      };
      getAndSetItems();
    }
    return () => (mounted = false);
  }, [cityId, page, searchQuery, selectedFilter]);

  return (
    <div style={{ background: "#fafafa" }}>
      <div
        style={{ paddingTop: "8px", paddingBottom: "8px" }}
        className="alert d-md-flex alert-success mt-0 mb-1 justify-content-between align-items-center"
        role="alert"
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="lead order-1 pe-3">Know some resources? </div>
          <Link
            className="order-2"
            to={{ pathname: "/login", state: { seller: 0 } }}
          >
            <button className="btn btn-success">Add Info</button>
          </Link>
        </div>
        <div className="pt-2 d-flex align-items-center">
          <div className="text-success lead pe-3">Sort By: </div>
          <div style={{ minWidth: "200px" }} className="col">
            <Select
              value={selectedFilter}
              onChange={onchangeSelect}
              options={filterOptions}
              getOptionValue={(option) => option._id}
              getOptionLabel={(option) => option.name}
            />
          </div>
        </div>
      </div>
      <ItemsList>
        {items.length > 0 ? (
          items.map(
            ({
              name,
              stock,
              _id,
              contactNumber,
              address,
              companyName,
              city,
              likes,
              dislikes,
              createdAt,
              updatedAt,
            }) => (
              <Item
                name={name}
                stock={stock}
                key={_id}
                id={_id}
                likes={likes}
                dislikes={dislikes}
                city={city}
                companyName={companyName}
                address={address}
                contactNumber={contactNumber}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
            )
          )
        ) : (
          <div className="p-4">
            <p class="display-4 text-center">
              Sorry, No items matched your search.
            </p>
          </div>
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
