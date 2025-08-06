import secret from "../config/config.js";

export const globalError = (err, req, res, next) => {
    const statusCode = err.status || 500;
    let message = "Something went Wrong. Please try again";
    if (secret.NODE_ENV === "development") {
        res.locals.error = err;
        message = err.message || message;
        console.log(err.stack);
    }

    console.error(err.stack);

    if (statusCode === 404) {
        return res.status(404).render("404", { message });
    }

    res.status(statusCode).render("error", { message });
};

export const globalFlash = (req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
};

export const notFound = (req, res, next) => {

    const error = new Error("Page Not Found");
    error.status = 404;
    next(error);

};

export const reqLogger = (req, res, next) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request url: ${req.url}`);

    next();
};
