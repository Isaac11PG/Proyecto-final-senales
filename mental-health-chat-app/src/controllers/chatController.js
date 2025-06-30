class ChatController {
    constructor(deepSeekService) {
        this.deepSeekService = deepSeekService;
    }

    async sendMessage(req, res) {
        const { userId, content } = req.body;

        if (!userId || !content) {
            return res.status(400).json({ error: 'User ID and content are required.' });
        }

        try {
            const response = await this.deepSeekService.sendConcern(userId, content);
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error sending message:', error);
            return res.status(500).json({ error: 'Failed to send message.' });
        }
    }

    async receiveMessage(req, res) {
        try {
            const messages = await this.deepSeekService.getMessages();
            return res.status(200).json(messages);
        } catch (error) {
            console.error('Error receiving messages:', error);
            return res.status(500).json({ error: 'Failed to retrieve messages.' });
        }
    }
}

export default ChatController;