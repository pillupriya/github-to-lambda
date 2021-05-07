const timestamp = require('time-stamp');

exports.handler = function (event, context) {
    console.log('first build test pipeline');
    console.log(JSON.parse(event));
	context.succeed('hello ' + event.name);
    console.log('timestamp :'+timestamp());
}