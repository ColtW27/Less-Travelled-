const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateReviewInput = require('../../validation/reviews');
const Review = require("../../models/Review");

router.get("/test", (req, res) => res.json({ msg: "This is the reviews route" }));

router.get("/", (req, res) => {
    Review
        .find()
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json(err));
})

router.get("/user/:user_id", (req, res) => {
   Review
        .find({ user: req.param.user_id })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    Review
        .findById(req.params.id)
        .then(review => res.json(review))
        .catch(err => res.status(400).json(err));
})

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateReviewInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReview = new Review({
            user: req.user.id,
            text: req.body.text
        });

        newReview.save().then(review => res.json(review));
    }
);

module.exports = router;