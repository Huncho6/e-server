const { Router } = require("express");
const {
  createNike,
  getNike,
  // getAlbumByCriteria,
  deleteNike,
} = require("../controllers/nikeController");

const router = Router();

router.post("/nike", createNike);
// router.get("/albums/search", getAlbumByCriteria);
router.get("/nike", getNike);
router.delete("/nike/:id", deleteNike);

module.exports = router;
