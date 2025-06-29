const express = require('express');
const router = express.Router();
const { createURL, getUrlById } = require('../controllers/urlController');

router.post('/shorten', createURL);
router.get('/:shortUrl', getUrlById);

module.exports = router;