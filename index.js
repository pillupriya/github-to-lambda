const { uuid } = require('uuidv4');
exports.handler = function (event, context) {
    console.log(event);
	context.succeed('hello ' + event.name);
    console.log("dependency added uuid "+uuid());
}