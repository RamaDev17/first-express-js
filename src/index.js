import express from "express";
import userRoutes from "./routes/users.js";
// import auth from "./middleware/auth.js";
import logRequest from "./middleware/logs.js";
import 'dotenv/config'


const app = express();

//midlleware
app.use(logRequest)
app.use(express.json())
app.use('/assets', express.static('public/images'))

//routing
app.use('/users', userRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server berhasil di runnning di port http://localhost:${process.env.PORT}`);
});
