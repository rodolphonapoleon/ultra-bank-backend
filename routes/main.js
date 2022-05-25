const { indextest } = require("./default");
const { Router } = require("express");

const router = Router();
//for test
router.get("/", indextest);

module.exports = router;
