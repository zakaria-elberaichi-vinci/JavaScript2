import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmsRouter from "./routes/films";
import drinkRouter from "./routes/drinks"


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Middleware to count the number of GET requests */

let requestCounter = 0;

app.use((req,_res,next) => {
  if(req.method === "GET" ) {
    requestCounter++;
    console.log(`GET COUNTER :  +${requestCounter} `);
  }
  next();
})




app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films", filmsRouter);
app.use("/drinks", drinkRouter);


export default app;
