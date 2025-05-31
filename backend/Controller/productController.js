const slugify = require("slugify");
const productModel = require("../Models/productSchema");
// Create Product  !!!!!!!!!!!!!
const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, quantity, photo, shipping } =
      req.body;
    switch (true) {
      case !name:
        return res.status(500).send({
          error: "Name is require",
        });
      case !description:
        return res.status(500).send({
          error: "description is require",
        });
      case !quantity:
        return res.status(500).send({
          error: "quantity is require",
        });
      case !price:
        return res.status(500).send({
          error: "price is require",
        });
      case !photo:
        return res.status(500).send({
          error: "photo is require less them 1mb",
        });
    }
    //
    const products = await productModel.create({
      name,
      slug: slugify(name),
      description,
      price,
      quantity,
      photo,
      shipping,
    });
    await products.save();
    return res.send({
      success: true,
      message: "Product Create SuccessFully",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error In Product Create",
      error,
    });
  }
};
// Get All Product !!!!!!!!!!!!!
const getProductController = async (req, res) => {
  try {
    const products = await productModel.find({});

    return res.send({
      success: true,
      total: products.length,
      message: "All Product Get SuccessFully",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      error,
      message: "Error In Getting Product Details ",
    });
  }
};
//  Delete Product !!!!!!!!!!!!!
const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid);
    return res.send({
      success: true,
      message: "Product Delete SuccessFully",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      error,
      message: " Error in Product Deleted ",
    });
  }
};
// Update Product !!!!!!!!!!!
const updateProductController = async (req, res) => {
  try {
    const { name, slug, description, price, quantity, photo, shipping } =
      req.body;
    switch (true) {
      case !name:
        return res.status(500).send({
          error: "Name is require",
        });
      case !description:
        return res.status(500).send({
          error: "description is require",
        });
      case !quantity:
        return res.status(500).send({
          error: "quantity is require",
        });
      case !price:
        return res.status(500).send({
          error: "price is require",
        });
      case !photo:
        return res.status(500).send({
          error: "photo is require less them 1mb",
        });
    }
    //
    const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      {
        ...req.body,
        slug: slugify(name),
      },
      { new: true }
    );
    await products.save();
    return res.send({
      success: true,
      message: "Product Update SuccessFully",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error In Updating Product",
      error,
    });
  }
};
//
module.exports = {
  createProductController,
  getProductController,
  deleteProductController,
  updateProductController,
};
