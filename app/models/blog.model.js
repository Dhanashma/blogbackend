module.exports = mongoose => {
    const Blog = mongoose.model(
      "blog",
      mongoose.Schema(
        {
            name:String,
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
    return Blog;
  };