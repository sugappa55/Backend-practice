const express = require("express");
const checkValidId = require("../middlewares");

const router = express.Router();

const userModel = require("../models/user");
const { create, getList, deleteOne, updateOne, getOne } = require("./crud")(userModel);

router.get("/", getList);
router.post("/", create);
router.get("/:id", checkValidId, getOne);
router.patch("/:id", checkValidId, updateOne);
router.delete("/:id", checkValidId, deleteOne);

module.exports = router;
