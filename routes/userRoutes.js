import express from "express"
import userController from "../controllers/userController.js"

const router = express.Router()

router.post(
    "/",
    userController.createUser
)

router.get(
    "/",
    userController.getAllUsers
)

router.get(
    "/:id",
    userController.getUserById
)


router.get(
    "/search/:nome",
    userController.searchUsersByName
)

router.delete(
    "/:id",
    userController.deleteUser
)

router.get(
    "/email/:email",
    userController.getUserByEmail
)

router.put(
    "/:id",
    userController.updateUser
)

router.get(
    "/count",
    userController.countUsers
)

export default router;