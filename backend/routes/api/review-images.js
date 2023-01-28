// backend/routes/api/review-images.js
const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot,Review,ReviewImage,Booking,User,SpotImage,sequelize} = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Delete a review image
// Requires Authentication
// User must own the review
// Complete
router.delete('/:imageId', requireAuth, async(req,res) => {
    const image = await ReviewImage.findAll({where:{id:req.params.imageId},include:[{model:Review}]})

    if(image[0]){
        if(image[0].Review.userId == req.user.id){
            delete image[0].Review
            await image[0].destroy()
            res.statusCode = 200
            res.json({"message":"Successfully deleted","statusCode":res.statusCode})
        }else{
            res.statusCode = 404
            res.json({"message":"You do not own this review","statusCode":res.statusCode})
        }
    }else{
        res.statusCode = 404
        res.json({"message":"Review Image couldn't be found","statusCode":res.statusCode})
    }
    
})



module.exports = router;