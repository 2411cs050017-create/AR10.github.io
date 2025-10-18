const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/bus', require('./routes/bus'));
app.use('/announcements', require('./routes/announcements'));
app.use('/schedule', require('./routes/schedule'));
app.use('/documents', require('./routes/documents'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));