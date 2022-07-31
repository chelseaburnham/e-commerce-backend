const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const categoryData = await Product.findByPK(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that ID!" })
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
//update
  
});

router.put('/:id', (req, res) => {
//update
});

router.delete('/:id', (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that ID!" })
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
