import Product from "../models/product.js";
import { customError } from "../config/error.js";
import data from "../sampledata.js";
import User from "../models/auth.js";

// send sample data to mongodb

export const sendProductToDB = async (req, res) => {
  await Product.deleteMany({});
  const products = await Product.insertMany(data.products);
  res.status(200).json(products);
};

export const getIsFeaturedProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ isFeatured: true });
    if (!products)
      return next(customError(404, "can't find featured products"));
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductsByCondition = async (req, res) => {
  try {
    const products = await Product.find({ condition: "New" });
    const preOrder = await Product.find({ condition: "Preorder" });
    const allProducts = [products, preOrder];
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductByCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName;
    const categorys = await Product.find({ category: categoryName });
    res.status(200).json(categorys);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneproduct = async (req, res) => {
  const slugTitle = req.params.slugTitle;
  try {
    const product = await Product.findOne({ slug: slugTitle });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const searchProduct = async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const products = await Product.find({
      title: { $regex: searchQuery, $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const likeProduct = async (req, res) => {
  const id = req.user.id;
  const productId = req.params.productId;
  try {
    await Product.findByIdAndUpdate(productId, { $addToSet: { likes: id } });
    res.status(200).json("product liked");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const dislikeProduct = async (req, res) => {
  const id = req.user.id;
  const productId = req.params.productId;
  try {
    await Product.findByIdAndUpdate(productId, { $pull: { likes: id } });
    res.status(200).json("product disliked");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSavedProducts = async (req, res) => {
  const { username } = req.params;
  const id = req.user.id;
  try {
    const user = await User.findOne({ username });
    if (!user) return next(customError(500, "Can't find user"));
    if (user) {
      const liked = await Product.find({ likes: id });
      res.status(200).json(liked);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.status(200).json("Product deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
}

export const createNewProduct = async(req, res) =>{
  try {
    const product = await Product.insertMany(req.body)
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json(error);
  }
}

