const express = require("express");
const webpack = require("webpack");

const app = express();
const port = 5000;

app.get("/");

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
