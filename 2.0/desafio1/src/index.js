const express = require('express');
const app = express();
const router = express.Router();

router.get('/', async (req, res) => {
    return res.send("Maratona Full Cycle 2.0");
});

app.use('/', router);

app.listen(3000);