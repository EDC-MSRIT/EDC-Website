const app = require("./dist/app").app;

app.listen(process.env.PORT || 3000, process.env.IP, function () {
  console.log("The EDC server has started");
});
