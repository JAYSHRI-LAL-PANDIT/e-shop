const express = require("express");
const productController = require("../controllers/product.controller");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.post("/create", authenticate, productController.createProduct);
router.put("/update/:id", authenticate, productController.updateProduct);
router.delete("/delete/:id", authenticate, productController.deleteProduct);

module.exports = router;
