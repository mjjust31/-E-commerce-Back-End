const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
//Right now, don't worry about combining. Worry about the routes can include join later.

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    // req.body, {

    // include: [{model: Product}]
    // });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const singleCategoryData = await Category.findByPk(req.params.id);
    if (!singleCategoryData) {
      res.status(404).json({ message: "No category with that ID" });
      return;
    }
    res.status(200).json(singleCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
