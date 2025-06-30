class Message {
    constructor(userId, content) {
        this.userId = userId;
        this.content = content;
        this.timestamp = new Date();
    }
}

module.exports = Message;