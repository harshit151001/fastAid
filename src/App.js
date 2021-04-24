import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AskForHelp from './AskForHelp';
import HelpPeople from './HelpPeople';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Dashboard from './Routes/Dashboard';
import { getCities } from './Helper/Enpoints/Endpoints';
import PrivateRoute from './Helper/Auth/Privateroute';
import Footer from './Components/Footer/Footer';
import Search from './Routes/Search';

const App = () => {
  const [city, setCity] = useState('60825bf9e03e88eae79f5b75');
  const [cities, setCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedItems, setSearchedItems] = useState([]);

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
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} cities={cities} city={city} setCity={setCity} setSearchedItems={setSearchedItems} />
      <Switch>
        <Route exact path="/">
          <Redirect to={`/home/60825bf9e03e88eae79f5b75/1`} />
        </Route>
        <Route exact path="/home/:cityId/:page">
          <Home city={city} />
        </Route>
        <Route exact path="/help-people">
          <HelpPeople city={city} />
        </Route>
        <Route exact path="/ask-help">
          <AskForHelp city={city} />
        </Route>
        <Route exact path="/search/:cityId/:searchQuery/:page">
          <Search city={city} searchedItems={searchedItems} setSearchedItems={setSearchedItems} />
        </Route>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard">
          <Dashboard cities={cities} />
        </PrivateRoute>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
