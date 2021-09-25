const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/userDetails', (req, res) => {
   return res.status(200).json(db.userDetails);
});
app.get('/categories', (req, res) => {
   return res.status(200).json(db.categories);
});

//* ?catId = 2
app.get('/items', (req, res) => {
   const { catId } = req.query;
   return res.status(200).json(db.items.filter((item) => item.catId.toString() === catId));
});

//* labelId = 2
app.get('/labels', (req, res) => {
   const { labelId } = req.query;
   return res.status(200).json(db.items.filter((item) => item.labelId.toString() === labelId));
});

app.put('/items/:itemId', (req, res) => {});

app.delete('/items/:itemId', (req, res) => {
   db.items = db.items.filter((item) => item.id.toString() == req.params.itemId);
   return res.status(200).json(db.items);
});

app.get('*', (req, res) => {
   return res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
   console.log('server is running on port', process.env.PORT || 5000);
});
