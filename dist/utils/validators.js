import { body } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        const errors = [];
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                errors.push(...result.array());
            }
        }
        if (errors.length > 0) {
            console.log("Validation errors:", errors);
            return res.status(422).json({ errors });
        }
        console.log("All validations passed.");
        return next();
    };
};
const loginValidator = [
    body("email").trim().isEmail().withMessage("A valid email is required"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password should be at least 6 characters long")
];
const signupValidator = [
    body("name").notEmpty().withMessage("A name is required"),
    ...loginValidator
];
export { validate, loginValidator, signupValidator };
//# sourceMappingURL=validators.js.map