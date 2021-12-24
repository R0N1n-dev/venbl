module.exports = {
  mongoUri:
    process.env.MONGO_URI || "mongodb://localhost:27017/bucketListItems", //process.env.MONGO_URI,
  PORT: process.env.PORT || 3000,
};
