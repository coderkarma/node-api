//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Hello karma, Connected to MongoDB Server');


    // db.collection('Todos').find({
    //     _id: new ObjectID('5c425ba2b4eaa89980ff6f8')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined));
    // }, (err) => {
    //     console.log('unable to fetch todos', err)
    // })
    //client.close()


    // const db = client.db('TodoApp')
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);

    // }, (err) => {
    //     console.log('unable to fetch todos', err)
    // })
    const db = client.db('TodoApp');
    db.collection('Users').find({
        name: 'Karma'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })

});