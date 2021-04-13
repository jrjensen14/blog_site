const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    include: [User],
  })
  //   attributes: [
  //     'id',
  //     'post_url',
  //     'title',
  //     'created_at',
  //   ],
  //   include: [
  //     {
  //       model: Comment,
  //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
  //       include: {
  //         model: User,
  //         attributes: ['username']
  //       }
  //     },
  //     {
  //       model: User,
  //       attributes: ['username']
  //     }
  //   ]
  // })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/post/:id', (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })
  // Post.findOne({
  //   where: {
  //     id: req.params.id
  //   },
  //   attributes: [
  //     'id',
  //     'post_url',
  //     'title',
  //     'created_at',
  //   ],
  //   include: [
  //     {
  //       model: Comment,
  //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
  //       include: {
  //         model: User,
  //         attributes: ['username']
  //       }
  //     },
  //     {
  //       model: User,
  //       attributes: ['username']
  //     }
  //   ]
  // })
    .then(dbPostData => {
      if (dbPostData) {
      const post = dbPostData.get({ plain: true });
      res.render('single-post', { post });
      } else {
        res.status(404).json(err);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;