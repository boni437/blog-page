import express from 'express';
import { createPost, deletePost, getPosts, updatePost, getPost } from '../controllers/postController.js';

const router = express.Router();

router.post('/create', createPost)
router.get('/getposts', getPosts)
router.get("/getpost/:id", getPost)
router.delete('/deletepost/:id', deletePost)
router.put("/updatepost/:id", updatePost);


export default router;