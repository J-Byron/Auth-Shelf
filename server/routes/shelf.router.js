const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log('authenticated', req.isAuthenticated());
        let queryText = 'SELECT * FROM "item";';
        pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log(error);
        })
    } else {
        res.sendStatus(403);
    }
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log(req.user);
    if(req.isAuthenticated()){
       const queryString = `INSERT INTO item (description,image_url,person_id) VALUES ($1,$2,$3);`; 
       const values = [req.body.description, req.body.image, req.user.id];

       pool.query(queryString,values).then(result =>{
        res.sendStatus(204);
       }).catch(err =>{
        res.sendStatus(500)
       })
    }else{
        res.sendStatus(403)
    }
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // if(req.isAuthenticated()){
        let id = req.params.id;
        const queryString = 'DELETE FROM "item" WHERE "id" = $1;';
        pool.query(queryString, [id])
        .then(result => {
            res.sendStatus(204)
        })
        .catch(error => {
            res.sendStatus(500)
        })
    // } else {
        // res.sendStatus(403);
    // } 
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;