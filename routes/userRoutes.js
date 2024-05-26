const express = require("express");
const { getAllUsers,
    getUser,
    updateUser,
    createUsers,
    deleteUser } = require("../controllers/userControllers")

const router = express.Router();


router
    .route("/")
    .get(getAllUsers)
    .post(createUsers)

router
    .route("/:id")
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router;