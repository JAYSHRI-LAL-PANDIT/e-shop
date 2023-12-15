const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./configs/db.config");

//dotenv config
dotenv.config();
//database calling
connectDB();

const app = express();

//test route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to e-shopping application.</h1>");
});

//middlewares
app.use(express.json());

// auth routes
const authRoutes = require("./routes/auth.routes");
app.use("/dev/api/v1/auth", authRoutes);

// user routes
const userRoutes = require("./routes/user.routes");
app.use("/dev/api/v1/user", userRoutes);

// cart routes
const cartRoutes = require("./routes/cart.routes");
app.use("/dev/api/v1/cart", cartRoutes);

// cart item routes
const cartItemRoutes = require("./routes/cartItem.routes");
app.use("/dev/api/v1/cartItem", cartItemRoutes);

// product routes
const productRoutes = require("./routes/product.routes");
app.use("/dev/api/v1/product", productRoutes);

// order routes
const orderRoutes = require("./routes/order.routes");
app.use("/dev/api/v1/order", orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} mode on ${process.env.PORT} port.`
      .bgMagenta.white
  );
});
