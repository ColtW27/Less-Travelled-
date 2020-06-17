const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateAttractionInput = require('../../validation/attractions');
const Attraction = require("../../models/Attraction");

router.get("/test", (req, res) => res.json({ msg: "This is the attractions route"}));

router.get("/", (req, res) => {
    Attraction
        .find()
        .then(attractions => res.json(attractions))
        .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    Attraction
        .findById(req.params.id)
        .then(attraction => res.json(attraction))
        .catch(err => res.status(400).json(err));
})

router.post("/",
    passport.authenticate('jwt', { session:false }),
    (req, res) => {
        const { isValid, errors } = validateAttractionInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        const newAttraction = new Attraction({
            user: req.user.id,
            address: req.body.address,
            location_data: req.body.location_data,
            description: req.body.description,
            rating: req.body.rating
        });

        newAttraction.save().then(attraction => res.json(attraction));
    }
)

module.exports = router;