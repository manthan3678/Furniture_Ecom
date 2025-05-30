const slugify = require("slugify");
const productModel = require("../Models/productSchema");
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
      case !category:
        return res.status(500).send({
          error: "category is require",
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
    return res.send({
      success: false,
      message: "Error In Product Create",
      error,
    });
  }
};

module.exports = { createProductController };
