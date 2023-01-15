//AddRestaurant.jsx
//short snippet cmd rafce
import React from "react";
//short snippet for form-row. <TAB-key> auto complete
//short snippet for input <TAB-key> auto complete
//short snippet for div class with col is .col <TAB-key>
const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};
 
export default AddRestaurant;
