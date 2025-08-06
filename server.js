import express from 'express';
import app from './src/app.js';
import secret from './src/config/config.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});