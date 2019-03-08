var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send("Hello World REST API");
  });

  app.get("/api/test", function(req, res) {
    res.status(200).json({ status: "ok" });
  });
};

module.exports = appRouter;
