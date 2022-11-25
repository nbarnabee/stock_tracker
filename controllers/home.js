// const mongoConnect = require("../config/database");

module.exports = {
  getIndex: (req, res) => {
    res.sendFile("./index.html");
  },
};
