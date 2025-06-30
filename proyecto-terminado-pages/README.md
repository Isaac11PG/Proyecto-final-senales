# Mental Health Chat Application

This project is a mental health support chat application that allows users to send their concerns and receive responses managed by DeepSeek through an API. The application is built using Node.js and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mental-health-chat-app.git
   ```

2. Navigate to the project directory:
   ```
   cd mental-health-chat-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your DeepSeek API key and other necessary environment variables:
   ```
   DEEPSEEK_API_KEY=your_api_key_here
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the chat application.

3. Users can send their concerns through the chat interface, and the application will communicate with the DeepSeek API to provide responses.

## API

The application interacts with the DeepSeek API to manage chat messages. The following endpoints are available:

- `POST /api/chat/send`: Sends a user concern to the DeepSeek API.
- `GET /api/chat/receive`: Receives responses from the DeepSeek API.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.