import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

const handleOpen = () => console.log(`✅ connect DB`);
const handleError = (error) => console.log(`❌ DB Error`, error);

db.on("error", handleError);
db.once("open", handleOpen);
