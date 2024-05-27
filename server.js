const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

const app = require("./app")

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


app.listen(PORT, () => {
    console.log(`Server is running smoothly at ${PORT}`);
})