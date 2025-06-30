const express = require('express');
const router = express.Router();
const { sendToOpenRouter } = require('../services/openrouterApi');

router.post('/', async (req, res) => {
    try {
        const { message } = req.body;
        const reply = await sendToOpenRouter(message);
        res.json(reply);
    } catch (err) {
        res.status(500).json({ error: 'Error al conectar con OpenRouter' });
    }
});

module.exports = router;