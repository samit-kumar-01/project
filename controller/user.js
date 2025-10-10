const User=require("../models/user.js")

module.exports.renderSignUpForm=(req, res) => {
    res.render("user/signupform.ejs")
}
module.exports.signUp=async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({ username, email });
        let registerdUser = await User.register(newUser, password);
        req.login(registerdUser,(err)=>{
            if(err){
                return next(err);
            }
        req.flash("success", "Welcome to wanderLust");
        res.redirect("/listings");
        })
    }
    catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup")
    }
}
module.exports.renderLogInForm=(req, res) => {
    res.render("user/login.ejs")
}
module.exports.login= async (req, res) => {
    req.flash("success", "Welcome to WanderLust");
    let redirectUrl=res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl)
}
module.exports.logout=(req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success","Log out successfully")
        res.redirect("/listings");
    })
}