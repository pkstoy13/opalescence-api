import express, {
  type Request,
  type Response,
  type Application,
} from "express";

//const express = require("express");
const app: Application = express();
const port = 3000;

// Define a basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
