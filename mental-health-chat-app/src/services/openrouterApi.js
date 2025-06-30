const axios = require('axios');

async function sendToOpenRouter(message) {
    const apiKey = process.env.OPENROUTER_API_KEY;
    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: "meta-llama/llama-3-8b-instruct", // Puedes cambiar por otro modelo gratuito de OpenRouter
                messages: [
                    { role: "user", content: message }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'http://localhost:3000', // Puedes poner tu dominio si tienes uno
                    'X-Title': 'Cuida Tu Mente'
                }
            }
        );
        // El texto de respuesta está en response.data.choices[0].message.content
        return { reply: response.data.choices[0].message.content };
    } catch (error) {
        console.error('Error al llamar a OpenRouter:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { sendToOpenRouter };