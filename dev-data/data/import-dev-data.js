const fs = require("fs");
const Tour = require("../../models/toursModels");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();


const PORT = process.env.PORT || 3000;
const DB = process.env.MONGO_URI;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(con => {
    // console.log(con.connections);
    console.log("DB connected successfully");
}).catch(err => {
    console.error("DB connection error:", err);
});

// read json file 
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8"));

// IMPORT data into db
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log("Data successfully loaded")
    } catch (error) {
        console.log(error);
    }
    process.exit();
}

// script to import and delet the json file from local to mongodb using process.argv
// delete all the data from a collection 
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log("Data successfully deleted")
    } catch (error) {
        console.log(error);
    }
    process.exit();
}

if (process.argv[2] === "--import") {
    importData();
} else if (process.argv[2] === "--delete") {
    deleteData();
}

// console.log(process.argv);
