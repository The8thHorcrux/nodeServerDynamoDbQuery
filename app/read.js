var AWS = require("aws-sdk");
var awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIAJMI4TLPSTF6JA5WQ", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

var docClient = new AWS.DynamoDB.DocumentClient();
fetchOneByKey = function () {
    var params = {
        TableName: "sampletable",
        Key: {
            "name": "John Mayo-Smith",
            "city": "New York"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log(JSON.stringify(data, null, 2));
        }
    })
}
module.exports.fetchOneByKey = fetchOneByKey
