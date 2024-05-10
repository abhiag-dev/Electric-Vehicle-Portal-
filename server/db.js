const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(
      "mongodb+srv://abhishekag64064:7l8bmaaCTvD20gsh@cluster0.2iqr2uj.mongodb.net/vehicles"
    )
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
