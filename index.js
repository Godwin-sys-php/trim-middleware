module.exports = () => {
  return (req, res, next) => {
    if (Object.keys(req.body).length > 0) {
      for (let index in req.body) {
        req.body[index] = req.body[index].trim();
      }
      next();
    } else {
      next();
    }
  }
}