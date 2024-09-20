
# Real-Time Chat Application

This is a full-stack real-time chat application built using the MERN (MongoDB, Express, React, and Node.js) stack. It allows users to create accounts, log in, log out, and engage in instant messaging with other users.

## Features

- **User Authentication**: Sign up, log in, and log out functionality.
- **Real-Time Messaging**: Send and receive messages instantly.
- **Socket.io Integration**: For real-time communication between users.
- **MongoDB Database**: Stores user data and chat messages.
- **Secure Communication**: Uses JWT for user authentication.

## Tech Stack

- **Frontend**: 
  - React.js
  - HTML, CSS (Tailwind CSS)
  - Socket.io-client

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Socket.io
  - JWT (JSON Web Token) for authentication

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed locally or a MongoDB Atlas account for cloud-based database hosting.

### Steps

1. Clone the repository:

```bash
git clone https://github.com/gopalkatiyar/chat-app.git
```

2. Navigate to the project directory:

```bash
cd chat-app
```

3. Install server dependencies:

```bash
npm install
```

4. Install client dependencies:

```bash
cd ../frontend
npm install
```

5. Create a `.env` file in the backend directory and add the following environment variables:

```bash
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
SOCKET_PORT=your-socket-server-port
```

6. Run the backend server:

```bash
npm run server
```

7. Run the frontend:

```bash
cd ../frontend
npm run dev
```

8. Open the browser and navigate to `http://localhost:3000` to access the app.



- **backend**: Contains all the server-side logic, including routes, models, controllers, and the server configuration.
- **frontend**: Contains the React client-side code for rendering the chat UI.

## Features Breakdown

1. **Authentication**: 
   - JWT-based user authentication.
   - Password hashing with bcrypt for security.

2. **Real-Time Communication**:
   - Uses Socket.io for establishing WebSocket connections for real-time messaging.
   - Each user has a unique chat session.

3. **Message Persistence**:
   - Chat messages are stored in MongoDB, allowing users to view their chat history.

## Future Improvements
- Add group chat functionality.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Socket.io Documentation](https://socket.io/docs/)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
