import express from 'express';
import path from 'path';
const app = express();
app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('/', async (req, res) => {
    const msg = await `Welcome to Node.js & `;
    res.status(200).json({ message: msg });
});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
    // res.send('success booking church')
});
app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000"));