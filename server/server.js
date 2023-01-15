//require express
const express = require("express");
//create an instance of express and store in variable called app
const app = express();
//require morgan logger at top of server.js

//require db pool
const db = require("./db");

const morgan = require("morgan");
//use morgan and will auto call next() middleware “dev” is how much info can be “tiny” etc check morgan docs
app.use(morgan("dev"))

//built in with express, when we send a request will take body of request and attach to req.body and store as an object
app.use(express.json())

//.env to manage environment variables for port/db info instead
require("dotenv").config();


//create middleware and explicitly to send req to next() middleware or final route handler
//middleware for this route needs to be defined at top then send to next route
//if middleware is at the bottom of the page, will not hit middleware will get route api/v1/restaurants before middleware bc of express
// app.use((req, res, next) => {
//   console.log("middleware")
//   res.status(404).json({
//     status: "fail",
//   });
// });
// app.use((req, res, next) => {
//   console.log("middleware")
//   next();
// });



//route to render retrieve restaurant info with url that http is sent to
//http://localhost:4000/getRestaurants
//app.get(2 params, url, callback fn (req, res)) is route handler
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants")
    console.log(results)
    //respond with json data browser displays json
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      }
    });

  } catch (err) {
    console.log(err);
  }
  //query from db and will return promise
});


//route to get info of one restaurant localhost:4000/api/v1/restaurants/1234
//console.log(req.params) to find params object of {id: '1234'}
//express knows because we gave it name :id (req.param.id) in url
app.get("/api/v1/restaurants/:id", async (req, res) => {
  //req.params.id = id of restaurant
  //console.log(req.params.id);
  try {
    const results = await db.query(
      "SELECT * FROM restaurants WHERE id = $1", [req.params.id]);
    // console.log(results.rows[0]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
    });
  } catch (err) {
    console.log(err);
  }
});



//route to create restaurant
//{
//   "name": "taco bell",
//   "location": "surrey",
//   "price_range": 4
// }
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;", [req.body.name, req.body.location, req.body.price_range])
    console.log('req.body', req.body)
    console.log('results', results)

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
    });
  } catch (err) {
    console.log(err)
  }
});


//route to update a restaurant
//{
//   "name": "taco bell",
//   "location": "burnaby",
//   "price_range": 3
// }
//req.params.id for the :id restaurant on ln101
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *;", [req.body.name, req.body.location, req.body.price_range, req.params.id])
    //req.params.id is the api/v1/restaurants/:id
    console.log(req.params.id);
    //req.body is the data body
    console.log(req.body);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: "wendys"
      }
    });
  } catch (err) {
    console.log(err)
  }
});


//route to delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM restaurants WHERE id = $1 RETURNING *;", [req.params.id])
    console.log('results', results);
    res.status(204).json({
      status: "success"
    });
  } catch (err) {
    console.log(err)
  }
});



//specify port for app to listen to, 3001 is default
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server up and listening on port ${port}`)
});


//routes:
//Retrieve all restaurants // GET /api/v1/restaurants
//Retrieve ONE restaurants // GET /api/v1/restaurants/:id
//Create restaurant // POST /api/v1/restaurants
//Update restaurant // PUT /api/v1/restaurants/:id
//Delete restaurant // DELETE /api/v1/restaurants/:id
