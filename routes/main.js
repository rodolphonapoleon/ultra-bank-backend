const { indextest } = require("./default");
const { Router } = require("express");

const router = Router();

router.get("/", indextest);

module.exports = router;
