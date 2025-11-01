const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from MERN CI/CD Backend!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; 
