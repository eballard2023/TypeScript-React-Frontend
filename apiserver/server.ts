

import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({
        name: 'ChatGPT',
        description: 'A model trained by OpenAI',
        imageURL: 'URL_of_image_here' // Replace with the actual image URL if you have one.
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});