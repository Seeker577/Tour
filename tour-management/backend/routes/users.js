import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/UserController.js'
const router = express.Router()

//Update user
router.put("/:id" , updateUser)

//Delete user
router.delete("/:id" , deleteUser)

//get single user
router.get("/:id" , getSingleUser)

//get all user
router.get("/" , getAllUser)

export default router