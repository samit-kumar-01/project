const Listing = require("./models/listing");
const Review = require("./models/review");

module.exports.loggedIn =(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must be loggedIn");
        return res.redirect("/login");
    }
    next();
}

module.exports.redirecturl=(req,res,next)=>{
    if( req.session.redirectUrl){
        res.locals.redirectUrl= req.session.redirectUrl;
    }
       next();
}

module.exports.isOwner=async(req,res,next)=>{
    let{id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("You are not owner");
       return res.redirect(`/listings${id}`);
    }
    next();
}
module.exports.isAuthor=async(req,res,next)=>{
    let{id,reviewid}=req.params;
    let review=await Review.findById(reviewid);  
    if(!review.author.equals(res.locals.currUser._id)){
       req.flash("error","You did not create this!");
       return res.redirect(`/listings/${id}`);
    }
    next();
}  
