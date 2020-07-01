const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateTalltaleInput = require('../../validation/talltales');
const Review = require("../../models/Talltale");
const Talltale = require("../../models/Talltale");

router.get("/test", (req, res) => res.json({ msg: "This is the talltales route" }));

router.get("/", (req, res) => {
    Talltale
        .find()
        .sort({ date: -1 })
        .then(talltales => res.json(talltales))
        .catch(err => res.status(400).json(err));
})

router.get("/user/:user_id", (req, res) => {
    Talltale
        .find({ user: req.param.user_id })
        .then(talltales => res.json(talltales))
        .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    Talltale
        .findById(req.params.id)
        .then(talltale => res.json(talltale))
        .catch(err => res.status(400).json(err));
})

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateTalltaleInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReview = new Talltale({
            user: req.user.id,
            text: req.body.text
        });

        newTalltale.save().then(talltale => res.json(talltale));
    }
);

module.exports = router;