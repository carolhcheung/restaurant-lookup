//Home.jsx
//short snippet cmd rafce
import React from 'react'
//import Header, AddRestaurant, RestaurantList
import Header from "../components/Header"; 
import AddRestaurant from "../components/AddRestaurant"; 
import RestaurantList from '../components/RestaurantList';
 
//Home.jsx
const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  )
}

export default Home;