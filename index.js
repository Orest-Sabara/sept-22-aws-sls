module.exports.getUsers = async (event) => {
  return {
    statusCode: 200,
    body:  JSON.stringify([{id:1, name: "Bober", age: 13}]),
  };
};

module.exports.getCars = async (event) => {
  return {
    statusCode: 200,
    body:  JSON.stringify([{id:1, brand: "BMW", model: "X3"}]),
  };
};