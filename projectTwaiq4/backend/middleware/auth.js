const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const header = req.headers["authorization"]
  const token = header && header.split(" ")[1]
  if (token == null) return res.sendStatue(401)

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatue(403)
    req.user = user
    next()
  })
}
module.exports = auth;
