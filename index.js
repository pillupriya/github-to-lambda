const { v4: uuidv4 } = require('uuid');
exports.handler = function (event, context) {
    console.log('first build test');
    console.log(JSON.parse(event));
	context.succeed('hello ' + event.name);
    console.log("dependency added uuid "+uuidv4());
}