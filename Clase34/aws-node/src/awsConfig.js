import AWS from "aws-sdk";

//configuracion de AWS
AWS.config.update({
    region: 'agregar region'
});

//configuracion de dynamoDB
const dynamoDB = new AWS.DynamoDB.DocumentClient(); //instancia de la base de datos de dyanmoDB
const dynamoTableName = "agregar nombre de la tabla";

//configuracion del servicio de mensajeria SNS
const sns = new AWS.SNS(); //instancia del servicio SNS
const SNS_TOPIC_ARN = "agregar token arn sns";

export {
    dynamoDB,
    dynamoTableName,
    sns,
    SNS_TOPIC_ARN
};