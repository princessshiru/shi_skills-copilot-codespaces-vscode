//create a web server
import { Router } from 'express';
const router = Router();
import commentsCtrl from '../controllers/comments'; //import the controller
import { authJwt } from '../middlewares'; //import the middleware
router.post('/', [authJwt.verifyToken], commentsCtrl.createComment); //create a new comment
router.get('/', [authJwt.verifyToken], commentsCtrl.getComments); //get all comments
router.get('/:id', [authJwt.verifyToken], commentsCtrl.getCommentById); //get comment by id
router.put('/:id', [authJwt.verifyToken], commentsCtrl.updateComment); //update a comment
router.delete('/:id', [authJwt.verifyToken], commentsCtrl.deleteComment); //delete a comment
export default router; //export the router