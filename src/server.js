import express from "express";
import "dotenv/config";
import "./db";

const PORT = 4000;
const app = express();
const handleListen = () => {
  console.log(`✅ Server Run Port:${PORT} 🔥🔥`);
};

app.listen(PORT, handleListen);
