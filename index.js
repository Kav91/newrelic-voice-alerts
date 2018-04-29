const pino = require('pino')({timestamp:false});
const AWS = require('aws-sdk');
const connect = new AWS.Connect();

exports.handler = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    //uncomment if you want to log incoming payload
    //pino.info(data)  

    //format your voice message, see sample payload or below link
    //https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/customize-your-webhook-payload#variables
    let message = `${data.condition_name}, ${data.details}` 

    let params = {
        ContactFlowId: 'yyyyyyy-xxxx-xxxx-xxxx-qqqqqqqqqq',
        DestinationPhoneNumber: '+61122334456',
        InstanceId: 'yyyyyyy-xxxx-xxxx-xxxx-qqqqqqqqqq',
        Attributes: { message: message },
        SourcePhoneNumber: '+611800123456'
    };

    await connect.startOutboundVoiceContact(params).promise().then(data => pino.info(data)).catch(err => pino.error(err));

    const response = { statusCode: 200, body: JSON.stringify({ params: params }) };
    callback(null, response);

};