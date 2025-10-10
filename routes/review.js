const express=require("express");
const router=express.Router({mergeParams:true});
const{listingSchema,reviewSchema}=require("../schema.js");
const wrapAsync=require("../utils/wrapAsync.js")
const expressError=require("../utils/expressError.js")
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const { loggedIn, isAuthor } = require("../middleware.js");
const reviewController=require("../controller/review.js")
const validateReview=(req,res,next)=> {
  let {error}=reviewSchema.validate(req.body);
  if(error){
    let errormsg=error.details.map((el)=>el.message).join(",");
    throw new expressError(400,errormsg);
  }
  else{
    next();
  }
};

// Post route for review
router.post("/",loggedIn,validateReview,wrapAsync(reviewController.createReview))
// Delete route for review
router.delete("/:reviewid",loggedIn,isAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;