const { Router } = require("express");
const {
  createYeezy,
  getYeezy,
  // getAlbumByCriteria,
  deleteYeezy,
} = require("../controllers/yeezyController");

const router = Router();

router.post("/yeezy", createYeezy);
// router.get("/albums/search", getAlbumByCriteria);
router.get("/yeezy", getYeezy);
router.delete("/yeezy/:id", deleteYeezy);

module.exports = router;
