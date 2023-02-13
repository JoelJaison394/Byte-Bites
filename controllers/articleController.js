const Article = require('../models/articleModel');

exports.createArticle = async (req, res, next) => {
  try {
    const { title, content, author, isPublished, slug, image, tags } = req.body;

    const article = new Article({
      title,
      content,
      author,
      isPublished,
      slug,
      image,
      tags
    });

    // Save the article to the database
    await article.save();

    // Return the newly created article
    return res.status(201).json({
      message: 'Article created successfully!',
      article
    });

  } catch (error) {
    return next(error);
  }
}

exports.getAllArticles = async (req, res) => {
    try {
      const articles = await Article.find();
    //   .populate('author', 'name email').populate('comments').exec();
      res.json(articles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


exports.getArticle = async (req ,res )=>{
    try {
        const article = await Article.findById(req.params.id);
    //   .populate('author', 'name email')
    //   .populate('comments', 'content createdAt')
    //   .exec();
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.updateArticle = async (req, res) => {
    try {
      const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(article);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

exports.deleteArticle = async (req,res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
          return res.status(404).send({ error: 'Article not found' });
        }
        res.send({ message: 'Article deleted successfully' });
      } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Server error' });
      }
}
  