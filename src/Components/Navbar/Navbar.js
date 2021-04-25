import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  getItemsFromQuery,
  isAuthenticated,
} from "../../Helper/Enpoints/Endpoints";
import logo from "../Assets/logo.png";

const Navbar = ({
  cities,
  setCity,
  city,
  searchQuery,
  setSearchQuery,
  history,
  location,
  setSearchedItems,
}) => {
  const { pathname } = location;

  const handleChange = (e) => {
    for (let city of cities) {
      if (city.name === e.target.value) {
        if (pathname !== "/dashboard") {
          const newPath = pathname.split("/");
          newPath[2] = city._id;
          history.push(newPath.join("/"));
        }
        setCity(city._id);
      }
    }
  };

  const redirectToSearch = (e) => {
    e.preventDefault();
    const getAndSetItems = async () => {
      const response = await getItemsFromQuery(1, city, searchQuery);
      setSearchedItems(response);
    };
    getAndSetItems();
    history.push(`/search/${city}/${searchQuery}/${1}`);
  };

  return (
    <nav style={{ zIndex: 100 }} className="navbar-dark bg-dark">
      <div className="container-fluid d-md-flex p-2 justify-content-between">
        <div className="d-flex justify-content-between">
          <div className="navbar-brand order-0 text-success">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              <img
                style={{ width: "40px", position: "absolute", top: "8px" }}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <Link
            className="text-decoration-none"
            to={{
              pathname: isAuthenticated() ? "/dashboard" : "/login",
              state: { seller: 1 },
            }}
          >
            <button className="btn btn-outline-success d-md-none">
              {isAuthenticated() ? "Dashboard" : "Log in"}
            </button>
          </Link>
        </div>
        <div className="d-md-flex">
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ minWidth: "200px" }}
            className="mx-md-2 mt-2 mt-md-0"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="City"
              aria-label="City search"
              name="cities"
              list="cities"
              onChange={handleChange}
            />
            <datalist id="cities">
              {cities.map(({ name, _id }) => (
                <option key={_id}>{name}</option>
              ))}
            </datalist>
          </form>
          <form
            onSubmit={redirectToSearch}
            className="d-flex mx-md-2 mt-2 mt-md-0"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <Link
          to={{
            pathname: isAuthenticated() ? "/dashboard" : "/login",
            state: { seller: 1 },
          }}
          className="text-decoration-none"
          // to={isAuthenticated() ? "/dashboard" : "/login"}
        >
          <button className="btn btn-outline-success d-none d-md-block">
            {isAuthenticated() ? "Dashboard" : "Log in"}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
