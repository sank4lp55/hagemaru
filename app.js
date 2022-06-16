const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('fdskhfjkasdhkjf');
});

app.get('/products', (req, res) => {
    res.status(200).json([
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        },
        {
            prodName: "djskhfkjladshf",
            price: 2434353453,
            age: 18
        }
    ]);
});

app.listen(3000, () => {
    console.log('server running on 127.0.0.1');
});