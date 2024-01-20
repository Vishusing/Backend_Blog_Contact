 ### Project Overview

This project is a simple Express.js application that sets up a RESTful API with MongoDB as the database. It includes two routes, `/api/contact` and `/api/blog`, which can be used to manage contacts and blog posts, respectively.

### Prerequisites

To run this project, you will need the following:

- Node.js and npm installed on your system.
- A MongoDB database instance running locally or on a remote server.
- A text editor or IDE for writing code.

### Installation

1. Clone the project repository to your local machine.

```
git clone https://github.com/username/express-mongodb-api.git
```

2. Change directory into the project folder.

```
cd express-mongodb-api
```

3. Install the project dependencies using npm.

```
npm install
```

### Configuration

1. Create a `.env` file in the project root directory.

2. Add the following environment variables to the `.env` file:

```
PORT=3000
MONGO_URL=mongodb://localhost:27017/express-mongodb-api
```

- `PORT`: The port on which the Express application will listen for requests.
- `MONGO_URL`: The connection string for the MongoDB database.

### Running the Application

1. Start the MongoDB database instance.

2. In the project directory, run the following command to start the Express application:

```
npm start
```

The application will start listening for requests on the specified port (default: 3000).

### API Routes

The application includes two API routes:

- `/api/contact`: This route can be used to manage contacts. It supports the following operations:
  - `GET /api/contact`: Retrieve all contacts.
  - `POST /api/contact`: Create a new contact.
  - `PUT /api/contact/:id`: Update an existing contact.
  - `DELETE /api/contact/:id`: Delete an existing contact.
- `/api/blog`: This route can be used to manage blog posts. It supports the following operations:
  - `GET /api/blog`: Retrieve all blog posts.
  - `POST /api/blog`: Create a new blog post.
  - `PUT /api/blog/:id`: Update an existing blog post.
  - `DELETE

