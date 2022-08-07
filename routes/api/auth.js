const express = require('express');

const ctrlAuth = require("../../controllers/auth");

const {ctrlWrapper} = require('../../helpers/')

const {validation, authenticate, upload} = require('../../middlewares');

const {schemas} = require('../../models/user');

const router = express.Router();

// register
router.post('/register', validation(schemas.register), ctrlWrapper(ctrlAuth.register));

// login
router.post('/login', validation(schemas.login), ctrlWrapper(ctrlAuth.login))

// logout
router.get('/logout', authenticate, ctrlWrapper(ctrlAuth.logout));

// /users/current
router.get('/current', authenticate, ctrlWrapper(ctrlAuth.getCurrent));

// update subscription user
router.patch('/', validation(schemas.updateSubscription), authenticate, ctrlWrapper(ctrlAuth.updateSubscription))

// upload avatars
router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrlAuth.updateAvatar));

module.exports = router;