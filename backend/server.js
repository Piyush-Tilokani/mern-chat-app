import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongodb from "./db/connectToMongodb.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res)=>{
	res.send("Hellow World"); 	
})

app.listen(PORT,  ()=>{
	connectToMongodb();
	console.log(`Server is running on port ${PORT}`);
});