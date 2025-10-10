const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js")
const{listingSchema,reviewSchema}=require("../schema.js");
const {loggedIn, isOwner}=require("../middleware.js")
const expressError=require("../utils/expressError.js")
const Listing=require("../models/listing.js");
const listingController=require("../controller/listing.js")
const{storage}=require("../cloudinaryConfig.js")
const multer  = require('multer')
const upload = multer({ storage })
const validateListing=(req,res,next)=> {
  let {error}=listingSchema.validate(req.body);
  if(error){
    let errormsg=error.details.map((el)=>el.message).join(",");
    throw new expressError(400,errormsg);
  }
  else{  
    next();
  }
};
router
   .route("/")
   .get(wrapAsync(listingController.index))
   .post(loggedIn,upload.single("image"),validateListing,wrapAsync(listingController.createListing));


router.get("/new",loggedIn,listingController.renderNewForm);

router
   .route("/:id")
   .get(wrapAsync(listingController.showListing))
   .put(loggedIn,isOwner,upload.single("image"),validateListing,wrapAsync(listingController.updateListing))
   .delete(loggedIn,isOwner,wrapAsync(listingController.destroyListing));


router.get("/:id/edit",loggedIn,isOwner,wrapAsync(listingController.renderEditForm))

module.exports=router;
