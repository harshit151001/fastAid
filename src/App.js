import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Dashboard from "./Routes/Dashboard";
import { getCities } from "./Helper/Enpoints/Endpoints";

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
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
