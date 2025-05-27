const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
//
const HomeRouter = require("./Routes/homepage");
const UserRouter = require("./Routes/auth");
const cartRouter = require("./Routes/cart");
const address = require("./Routes/address");
//
const app = express();
const PORT = 5000;
const { connectMongoDB } = require("./Utils/connection"); //mongodb connection
const { checkUserAuth } = require("./middleware/auth-middleware");
dotenv.config(); //dotenv k file ko use krne k liye use krte hai dotenv.config()
// !!!!!!!!! pele bodyParser ka use krte thai jisse user se data le paye jo ki ab khtm hogya deprocaded, ap express.json ko use krte

// express.urlencoded ko use krnahi kuki vhi se send krre hai isiliye
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//########################################################################
app.use(cors({ origin: "http://localhost:5173" }));
// *********#########mongodb connection ######****************
connectMongoDB(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDb is Connected ");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", HomeRouter);
app.use("/api/auth", UserRouter);
//get routes for cart
app.use("/api", checkUserAuth, cartRouter);
//
app.use("/api", checkUserAuth, address);
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
