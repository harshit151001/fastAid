import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Dashboard from "./Routes/Dashboard";
import { getCities } from "./Helper/Enpoints/Endpoints";
import PrivateRoute from "./Helper/Auth/Privateroute";

const App = () => {
  const [city, setCity] = useState("60825bf9e03e88eae79f5b75");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const getAndSetCities = async () => {
        const response = await getCities();
        setCities(response);
      };
      getAndSetCities();
    }
    return () => (mounted = false);
  }, []);

  return (
    <Router>
      <Navbar cities={cities} city={city} setCity={setCity} />
      <Switch>
        <Route exact path="/">
          <Home city={city} />
        </Route>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard">
          <Dashboard cities={cities} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;

// option=>data list ( for cities )
// Home screen: List of cities ( in cards )
// Change text Please login to add resources => Have any supplier info? button
// Differentiate b/w supplier and general public
// Populate db
// Logo
// Cards eliviation and background
// Beside search add category selector ( fixed initial categories )
// Hospital beds link :gimic
