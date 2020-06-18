import express from 'express';
const app = express();
app.get('/', async (req, res) => {
    const msg = await `Welcome to Node.js & `;
    res.status(200).json({ message: msg });
});
app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000"));