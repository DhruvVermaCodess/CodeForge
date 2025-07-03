const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/UserControllers');
const auth = require('../middlewares/AuthMiddleware')
const router = express.Router();

router.get('/profile', auth,  getUserProfile)
router.put('/profile', auth, updateUserProfile)

module.exports = router;