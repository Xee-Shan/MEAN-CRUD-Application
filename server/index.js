const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config(); 

//setup server

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start at port ${PORT}`));

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MDB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
     (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
});

// all routes
app.use("/api", require("./router/employeeRouter"));