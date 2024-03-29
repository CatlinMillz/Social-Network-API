const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
  updateUser
} = require('../../controllers/userController');

//get users
router.route('/').get(getUsers).post(createUser);

//get single user by id
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

//user's friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;