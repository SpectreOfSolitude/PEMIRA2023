const collection = require('../db');

const insertStudent = async (NIM, uniqueCode) => {
    const isVote = false;
    const query = { NIM, uniqueCode, isVote };

    await collection.Student.insertOne(query);

    return uniqueCode;
}

module.exports = insertStudent;
