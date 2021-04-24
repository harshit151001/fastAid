import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Helper/Enpoints/Endpoints';

const Navbar = ({ cities, setCity, city }) => {
  const handleChange = e => {
    for (let city of cities) {
      if (city.name === e.target.value) {
        setCity(city._id);
      }
    }
  };

  return (
    <nav style={{ zIndex: 100 }} className="navbar-dark bg-dark">
      <div className="container-fluid d-md-flex p-2 justify-content-between">
        <div className="d-flex justify-content-between">
          <div className="navbar-brand order-0 text-success">
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
              FastAid
            </Link>
          </div>
          <Link className="text-decoration-none" to={isAuthenticated() ? '/dashboard' : '/login'}>
            <button className="btn btn-outline-success d-md-none">{isAuthenticated() ? 'Dashboard' : 'Log in'}</button>
          </Link>
        </div>
        <div className="d-md-flex">
          <form className="d-flex mx-md-2 mt-2 mt-md-0">
            <input className="form-control me-2" type="search" placeholder="City" aria-label="City search" name="cities" list="cities" onChange={handleChange} />
            <datalist id="cities">
              {cities.map(({ name, _id }) => (
                <option key={_id}>{name}</option>
              ))}
            </datalist>
          </form>
          <form className="d-flex mx-md-2 mt-2 mt-md-0">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <Link className="text-decoration-none" to={isAuthenticated() ? '/dashboard' : '/login'}>
          <button className="btn btn-outline-success d-none d-md-block">{isAuthenticated() ? 'Dashboard' : 'Log in'}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
