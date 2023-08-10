const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Hello from Render!"));

app.get("/concatenate", (req, res) => {
    const words = req.query.words; // e.g. /concatenate?words=hello&words=world
    if (!words || !Array.isArray(words)) {
        return res.status(400).send({ error: 'Please provide words as query parameters.' });
    }
    const concatenatedWords = words.join('');
    res.send({ result: concatenatedWords });
});

const server = app.listen(port, () => console.log(`App listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
