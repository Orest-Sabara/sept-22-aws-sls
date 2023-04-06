// const { MongoClient } = require("mongodb")
//
// const {configs} = require("../configs");
const {dbConnection} = require("../mongo.client");

const getTodos = async () => {
    const todos = await dbConnection.collection("todos").find({});

    return {
        statusCode: 200,
        body:  JSON.stringify(todos),
    };
};

module.exports = {
    handler: getTodos,
}