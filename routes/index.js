const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

/**
 * @returns User
 */
router.get('/users/:userName', (req, res) => {
    console.log('Fetching user' + req.params.userName)
    // TODO: Implement fetch by 'Name' of user from Users collection

    // Return of type User
})

module.exports = router
