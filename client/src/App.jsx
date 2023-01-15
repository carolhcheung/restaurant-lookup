//App.jsx parent that wraps entire application
import React from "react";
//import BrowserRouter from react-router-dom
//switch is older don’t use
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//USE THIS instead!!!
//import BrowserRouter from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Home, UpdatePage, RestaurantDetailPage
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";

//NEWER with Routes and Element
//setup routing define router tags
//switch prevents react router from loading multiple components
const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/restaurants/:id/update"
            element={<UpdatePage />}
          />
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetailPage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
