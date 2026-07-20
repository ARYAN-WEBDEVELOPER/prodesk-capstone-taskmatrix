const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // Check Authorization Header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract Token
      token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // Save user id for next middleware/controller
      req.user = {
        id: decoded.id,
      };

      next();
    } catch (error) {
      return res.status(401).json({
        message: "Invalid or Expired Token",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      message: "Access Denied. No Token Provided",
    });
  }
};

module.exports = protect;