iconst express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hi rapyder');
});

pp.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

