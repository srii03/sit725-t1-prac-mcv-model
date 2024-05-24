const express = require('express');
const path = require('path');
const indexController = require('./controllers/indexController');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', indexController.getIndexPage);
app.get('/addtwonumbers', indexController.addTwoNumbers);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
