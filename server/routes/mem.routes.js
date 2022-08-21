const memController = require("../controllers/mem.controller");

module.exports = (app) => {
  app.get("/api/mems", memController.getMems);
  app.get("/api/mems/:id", memController.getMemById);
  app.get("/api/mems-by-user/:userName", memController.getMemsByUser);
  app.post("/api/mems/new", memController.createMem);
  app.put("/api/mems/:id", memController.updateMem);
  app.delete("/api/mems/:id", memController.deleteMem);
};
