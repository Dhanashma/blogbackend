module.exports = mongoose => {
  const Blog = mongoose.model(
    "blog",
    mongoose.Schema(
      {
        title: String,
        name:String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );
  return Blog;
};