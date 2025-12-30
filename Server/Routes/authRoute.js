import express from 'express'
import { googleAuth, signin, signup,refreshAccessToken} from '../Controllers/authController.js'
const router=express.Router()


router.post('/signup',signup)
router.post('/signin',signin)
router.post('/google',googleAuth)
router.post("/refresh-token", refreshAccessToken);

export default router;