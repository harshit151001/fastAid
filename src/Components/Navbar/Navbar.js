import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  getItemsFromQuery,
  isAuthenticated,
  getItems,
} from "../../Helper/Enpoints/Endpoints";
import logo from "../Assets/logo.png";
import Select from "react-select";
const Navbar = ({
  cities,
  setCity,
  city,
  searchQuery,
  setSearchQuery,
  history,
  location,
  cityfs,
  setCityFs,
  setSearchedItems,
}) => {
  const { pathname } = location;

  useEffect(() => {
    if (
      pathname.split("/")[1] === "home" ||
      pathname.split("/")[1] === "search"
    ) {
      setCityFs(() =>
        cities.find((element) => element._id === pathname.split("/")[2])
      );
    }
  }, [pathname, cities, setCityFs]);

  const handleChange = (item) => {
    console.log("Item", item);
    for (let city of cities) {
      if (city.name === item.name) {
        if (pathname !== "/dashboard") {
          const newPath = pathname.split("/");
          newPath[2] = item._id;
          history.push(newPath.join("/"));
        }
        setCityFs(city);
        setCity(city._id);
      }
    }
  };

  const redirectToSearch = (e) => {
    e.preventDefault();
    const getAndSetItems = async () => {
      console.log("search", searchQuery);
      if (
        searchQuery === "" ||
        searchQuery === null ||
        searchQuery === undefined
      ) {
        const response = await getItems(1, city);
        return setSearchedItems(response);
      } else {
        const response = await getItemsFromQuery(1, city, searchQuery);
        setSearchedItems(response);
      }
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
            <Select
              value={cityfs}
              onChange={handleChange}
              options={cities}
              getOptionValue={(option) => option._id}
              getOptionLabel={(option) => option.name}
            ></Select>
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
            <button
              disabled={
                searchQuery === "" ||
                searchQuery === null ||
                searchQuery === undefined
              }
              className="btn btn-outline-success"
              type="submit"
            >
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
