export const dataChecking = (req, res, next) => {
    const { fname, lname, email, password } = req.body;

    if (!fname || !lname || !email || !password) {
        req.flash("error", "All Fields are Required");
        return res.redirect("/signup");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        req.flash("error", "Invalid email format.");
        return res.redirect("/signup");
    }

    if (password.length < 6) {
        req.flash("error", "Password must be atleast 6 characters long");
        return res.redirect("\signup");
    }
    next();
};