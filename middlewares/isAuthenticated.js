const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const isAuthenticated = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = await jwt.verify(token, JWT_SECRET);

      if (decoded.userId !== req.params.userId) {
        return res.status(401).json({ status: "unauthorized", message: "unauthorized access" });
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, message: "not authorized,no token found" });
  }
};

module.exports = isAuthenticated;