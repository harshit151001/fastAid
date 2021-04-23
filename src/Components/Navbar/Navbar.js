import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Helper/Enpoints/Endpoints';

const Navbar = ({ cities, setCity, city }) => {
  const handleChange = e => {
    setCity(e.target.value);
  };
  console.log(isAuthenticated());
  return (
    <nav className="navbar-dark bg-dark">
      <div className="container-fluid d-md-flex p-2 justify-content-between">
        <div className="d-flex justify-content-between">
          <div className="navbar-brand order-0 text-success">FastAid</div>
          <Link className="text-decoration-none" to="/login">
            <button className="btn btn-outline-success d-md-none" type="submit">
              Log in
            </button>
          </Link>
        </div>
        <div className="d-md-flex">
          <form className="d-flex mx-md-2 mt-2 mt-md-0">
            <select value={city} onChange={handleChange} className="form-select" aria-label="Default select example">
              {cities.map(({ name, _id }) => (
                <option key={_id} value={_id}>
                  {name}
                </option>
              ))}
            </select>
          </form>
          <form className="d-flex mx-md-2 mt-2 mt-md-0">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <Link className="text-decoration-none" to="/login">
          <button className="btn btn-outline-success d-none d-md-block" type="submit">
            Log in
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
