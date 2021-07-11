const express = require('express');
const router = express.Router();
router.get('/', (req, res)=> res.send("Api v1 online"))

module.exports = router;