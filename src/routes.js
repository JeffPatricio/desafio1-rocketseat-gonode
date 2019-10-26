const Express = require("express");
const Routes = Express.Router();
const Middleware = require("./middleware/Check");

const historico = [];

Routes.get("/", (req, res) => {
  return res.render("form", { historico });
});

Routes.post("/check", Middleware.checkAge, (req, res) => {
  const { age } = req.body;
  if (age >= 18) {
    return res.redirect(`/major/${age}`);
  }
  return res.redirect(`/minor/${age}`);
});

Routes.get("/major/:age", (req, res) => {
  const { age } = req.params;
  historico.push(age);
  return res.render("major", { age });
});

Routes.get("/minor/:age", (req, res) => {
  const { age } = req.params;
  historico.push(age);
  return res.render("minor", { age });
});

Routes.get("/erro", (req, res) => {
  return res.render("erro");
});

module.exports = Routes;
