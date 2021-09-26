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
   return res.status(200).json(db.items.filter((item) => item.catId == catId));
});

//* catId = 2
app.get('/labels', (req, res) => {
   const { catId } = req.query;
   return res.status(200).json(db.labels.filter((label) => label.catId == catId));
});

app.put('/items/:itemId', (req, res) => {
   const { type } = req.query; //* type = "bookmark" or "favorite"
   const { itemId } = req.params;
   db.items = db.items.map((item) => {
      let obj = item;
      if (item.id == itemId) {
         if (type === 'bookmark') {
            obj.isBookmarked = !obj.isBookmarked;
         } else {
            obj.isFavorite = !obj.isFavorite;
         }
      }
      return obj;
   });
   return res.status(200).json(db.items);
});

app.delete('/items/:itemId', (req, res) => {
   db.items = db.items.filter((item) => item.id != req.params.itemId);
   return res.status(200).json(db.items);
});

app.get('*', (req, res) => {
   return res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
   console.log('server is running on port', process.env.PORT || 5000);
});
