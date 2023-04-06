// const {dbConnection} = require("../mongo.client");

const createTodo = async (event) => {
    const {todo} = JSON.parse(event.body);

    // const date = new Date().toISOString();
    //
    // const newTodo = {
    //     createdAt: date,
    //     updatedAt: date,
    //     completed: false
    // }
    //
    // await dbConnection.collection('todos').insertOne(newTodo);

    console.log(todo)

    return {
        statusCode: 201,
        body: JSON.stringify('Created 2'),
    };
};

module.exports = {
    handler: createTodo,
}