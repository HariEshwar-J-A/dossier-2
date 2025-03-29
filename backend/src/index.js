const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const contactRoute = require("./routes/contact");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
