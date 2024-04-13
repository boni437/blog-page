import express from "express";
import Post from "../models/postModel.js"

// create new post
export const createPost = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.image ||
      !req.body.description
    ) {
      return res.status(400).send({
       message: 'Send all required fields: title, author, image, description',
      });
    }

     // const newPost = new Post( {
    //   title,
    //   author,
    //   image ,
    //   description ,
    // });
    // const post = await newPost.save(); 
    
    const newPost = {
      title: req.body.title,
      author: req.body.author,
      image: req.body.image,
      description: req.body.description,
    };
   
    const post = await Post.create(newPost);

    return res.status(201).send(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get All Posts from database
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({
      countPosts: posts.length,
      data: posts,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Update a Post Item
export const updatePost = async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        // !req.body.image ||
        !req.body.description
      ) {
        return res.status(400).send({
          message: 'Send all required fields: title, author, image, description',
        });
      }
      const updatedPost = {
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        description: req.body.description,
      };
  
      const { id } = req.params;
  
      const result = await Post.findByIdAndUpdate(id, updatedPost);
  
      if (!result) {
        return res.status(404).json({ message: 'Post item not found' });
      }
  
      return res.status(200).send({ message: 'Post Item updated successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  };


// Delete a post item
export const deletePost =  async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Post.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({message: 'Post item not found' });
      }
  
      return res.status(200).send({message: 'Post item deleted successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  };


  // get single post

  export const getPost = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Post.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};