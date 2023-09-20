import express from "express";
import {
  sendProductToDB,
  getProductsByCondition,
  getAllProduct,
  getProductByCategory,
  getOneproduct,
  searchProduct,
  likeProduct,
  dislikeProduct,
  getSavedProducts,
  createNewProduct,
  deleteProduct,
  getIsFeaturedProducts,
} from "../controllers/product.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

//post
router.post("/sendproducts", sendProductToDB);

//get
router.get("/condition", getProductsByCondition);
router.get("/", getAllProduct);
router.get("/:categoryName", getProductByCategory);
router.get("/title/:slugTitle", getOneproduct);
router.get("/search/product", searchProduct);
router.get("/featured/product", getIsFeaturedProducts);
router.get("/usersaved/:username", verifyToken, getSavedProducts);

//put
router.put("/:productId/like", verifyToken, likeProduct);
router.put("/:productId/dislike", verifyToken, dislikeProduct);
export default router;

//delete
router.delete("/delete/:id", verifyToken, deleteProduct);

//create
router.post("/create", verifyToken, createNewProduct);
