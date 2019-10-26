const Express = require("express");
const Routes = require("./routes");
const Nunjucks = require("nunjucks");
const Cors = require("cors");

const server = Express();

Nunjucks.configure('src/views', {
  autoescape: true,
  express: server,
  watch: true
});

server.set("view engine", "njk");
server.use(Express.urlencoded({ extended: false }));
server.use(Routes);
server.use(Cors);

server.listen(8080, () => {
  console.log("Server running in port 8080...");
});
