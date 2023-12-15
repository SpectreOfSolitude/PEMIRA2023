const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = client.db('PEMIRA');
const collection = {
    Student: database.collection('Student'),
    Poll: database.collection('Poll'),
}

module.exports = collection