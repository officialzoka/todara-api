const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const Todo = require("./routes/Todo");

require("dotenv").config();

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/todo", Todo);

app.listen(process.env.PORT);
