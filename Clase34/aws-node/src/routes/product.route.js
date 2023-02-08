import express from "express";
import {sns, SNS_TOPIC_ARN, dynamoDB, dynamoTableName} from "../awsConfig.js";

const router = express.Router();

//Enpoint GET all products
router.get('/', async (req, res) => {
  const params = {
    TableName: dynamoTableName
  }
  try {
    const allProducts = await scanDynamoRecords(params, []);
    const body = {
      products: allProducts
    }
    res.json(body);
  } catch(error) {
    res.status(500).send(error);
  }
});

//Endpoint GET product by id
router.get('/:id', async (req, res) => {
  const params = {
    TableName: dynamoTableName,
    Key: {
      'productId': req.params.id
    }
  }
  await dynamoDB.get(params).promise().then(response => {
    res.json(response.Item);
  }, error => {
    res.status(500).send(error);
  })
})

//Endpoint POST new product
router.post('/', async (req, res) => {
  const params = {
    TableName: dynamoTableName,
    Item: req.body
  }
  await dynamoDB.put(params).promise().then(() => {
    const body = {
      Operation: 'SAVE',
      Message: 'SUCCESS',
      Item: req.body
    }
    const prod = JSON.stringify(body);
    //Luego de guardar, enviamos un mensaje con la notificación
    return sns.publish({
      Message: `nuevo producto agregado! ${prod}`,
      Subject: 'nuevo producto',
      TopicArn: SNS_TOPIC_ARN
    }).promise()
  }, error => {
    res.status(500).send(error);
  })
  .then(data => {
    console.log('se notificó')
    const body = {
      Operation: 'SAVE',
      Message: 'SUCCESS',
      Item: req.body
    }
    res.json(body);
  })
  .catch(error => {
    console.error('Ocurrió un error: ', error);
    res.status(500).end(error);
  })
});

//Endpoint PUT product by Id
router.put('/:id', async (req, res) => {
  const item = {
    ...req.body,
    productId: req.params.id
  }
  const params = {
    TableName: dynamoTableName,
    Item: item
  }
  await dynamoDB.put(params).promise().then(response => {
    const body = {
      Operation: 'UPDATE',
      Message: 'SUCCESS',
      UpdatedAttributes: response
    }
    res.json(body);
  }, error => {
    res.status(500).send(error);
  })
})

//Endpoint DELETE product by Id
router.delete('/:id', async (req, res) => {
  const params = {
    TableName: dynamoTableName,
    Key: {
      'productId': req.params.id
    },
    ReturnValues: 'ALL_OLD'
  }
  await dynamoDB.delete(params).promise().then(response => {
    const body = {
      Operation: 'DELETE',
      Message: 'SUCCESS',
      Item: response
    }
    res.json(body);
  }, error => {
    res.status(500).send(error);
  })
});

async function scanDynamoRecords(scanParams, itemArray) {
  try {
    const dynamoData = await dynamoDB.scan(scanParams).promise();
    itemArray = itemArray.concat(dynamoData.Items);
    if (dynamoData.LastEvaluatedKey) {
      scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
      return await scanDynamoRecords(scanParams, itemArray);
    }
    return itemArray;
  } catch(error) {
    throw new Error(error);
  }
}

export {router};