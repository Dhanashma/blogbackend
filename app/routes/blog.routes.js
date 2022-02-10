const blogModel = require("../models/blog.model.js");

module.exports = app => {
    const blog = require("../controllers/blog.controller.js");
    var router = require("express").Router();
    // Create a new blog
    router.post("/", blog.create);
    // Retrieve all blog
    router.get("/", blog.findAll);
    // Retrieve a single blog with id
    router.get("/blog/:id", blog.findOne);
    // Update a blog with id
    // router.put("/:id", blogModel.update);
    // Delete a blog with id
    router.delete("/blog/:id", blog.delete);
    // Create a new blog
    router.delete("/", blog.deleteAll);
    app.use('/api/blog', router);
  };