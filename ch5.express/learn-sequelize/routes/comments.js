const express = require('express');
//const User = require("../models/user");
const { Comment } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
   try {
       const comment = await Comment.create({
           commenter: req.body.id,
           comment: req.body.comment,
       });
       console.log(comment);
       // 201 : HTTP 성공 상태 응답 코드 요청이 성공하여 리소스를 생성했음을 나타냄
       res.status(201).json(comment);

       // //댓글 작성 후 작성자와 유저 연결
       // const user = await User.findOne({ where : { id : req.body.id }});
       // const comment = await Comment.create({
       //     comment: req.body.comment,
       // });
       // const userComment = await user.addComment(comment);
       // console.log(comment);
       // res.status(201).json(userComment);
   } catch (err) {
       console.error(err);
       next(err);
   }
});

router.route('/:id')
    .patch(async (req, res, next) => {
        try {
            const result = await Comment.update({
                comment: req.body.comment,
            }, {
                where: { id: req.params.id },
            });
            res.json(result);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .delete(async (req, res, next) => {
        try {
            const result = await Comment.destroy({ where: { id: req.params.id } });
            res.json(result);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports = router;