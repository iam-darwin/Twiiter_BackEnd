import passport from "passport";

export const authenticate = (req, res, next) => {
  passport.authenticate("jwt", (err, user) => {
    if (err) return next(err);
    console.log("Middleware",user);
    if (!user) {
       return res.status(401).json({
        message: "Unauthorized access login again",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};
