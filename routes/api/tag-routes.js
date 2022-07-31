const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }, { model: ProductTag }]
    });
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPK(req.params.id, {
      include: [{ model: Product }, { model: ProductTag }]
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that ID!" })
    }
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
//update
});

router.put('/:id', async (req, res) => {
//update
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that ID!" })
    }
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
