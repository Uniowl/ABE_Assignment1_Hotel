const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const role = require('../helpers/role')
const authorize = require('../helpers/authorize');

// Mads was here 



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve the list of all users
 *     description: Retrieve a list of all users, and their roles
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Alexander
 *                       role:
 *                         type: string
 *                         description: The role of the user.
 *                         example: HotelManager
 */

router.route('/register')
  .post(userController.register);

router.route('/login')
  .post(userController.login);

// get all users 
router.route('/')
  .get(userController.getAllUsers, authorize(role.Admin));


  /**
 * @swagger
 * /:userId:
 *   get:
 *     summary: Get a user by userId
 *     description: Retrive a specific user.
 *     parameters: 
 *       - in: path
 *         name: userId
 *         required: true
 *         description: a unique string ID of the user to get
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Alexander
 *                       role:
 *                         type: string
 *                         description: The role of the user.
 *                         example: HotelManager
 *       400:
 *         description: The specified user ID is invalid
 *       404:
 *         description: A user with the specified ID is not found
 */

// get specific user from userId
router.route('/:userId')
  .get(userController.getUser);



   /**
 * @swagger
 * /upgradeUser/:id:
 *   put:
 *     summary: if you as a user have admin rights, change another users role
 *     description: give a user ID for the user you want to change
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         description: a unique string ID of the user you want to change
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userToChange:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Alexander
 *                       role:
 *                         type: string
 *                         description: The role of the user.
 *                         example: Admin
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Unknown server error
 */

//Upgrade user
router.route('/upgradeUser/:id', authorize(role.Admin))
  .put(userController.upgradeUser);

module.exports = router;