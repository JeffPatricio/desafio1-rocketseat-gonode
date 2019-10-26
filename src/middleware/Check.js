module.exports = {
  checkAge(req, res, next) {
    return (req.body.age) ? next() : res.redirect("/erro");
  }
}
