const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token =
    req.cookies.authToken || req.headers.authorization?.split(" ")[1]; // Check for "authToken" instead of "token"

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { isAuthenticated };
