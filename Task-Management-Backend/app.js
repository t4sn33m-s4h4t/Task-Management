const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
 
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Task Management API is running...');
});

module.exports = app;