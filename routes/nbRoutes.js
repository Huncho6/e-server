const { Router } = require("express");
const {
  createNb,
  getNb,
  // getAlbumByCriteria,
  deleteNb,
} = require("../controllers/nbController");

const router = Router();

router.post("/nb", createNb);
// router.get("/albums/search", getAlbumByCriteria);
router.get("/nb", getNb);
router.delete("/nb/:id", deleteNb);

module.exports = router;
