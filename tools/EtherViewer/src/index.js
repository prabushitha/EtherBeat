const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const blockRouter = require('./routes/blocks');
app.use("/api/blocks", blockRouter);

app.listen(port);