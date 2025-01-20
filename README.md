# Node Express Mongoose 

This is based on the https://github.com/kernel528/starter-express-mongoose.  This contains a simple frontend UI to list `Users` and `Quotes` from a backend API using `mongoose` connecting to a docker hosted `MongoDB`


## Features
- Express setup with route handling
- Mongoose integration with MongoDB for database operations
- Example schema and models for managing data
- HTML/CSS/JavaScript for simple Front-end UI

### ToDo
- Setup frontend as a REACT based app.

### Project Structure
```markdown
/frontend
         ├── index.html
         ├── style.css
         └── script.js
/node_modules
/src
    /errors
           |__ methodNotAllowed.js
    /quotes
           |__ quotes.controller.js
           |__ quotes.model.js
           |__ quotes.router.js
    /users
           |__ users.controller.js
           |__ users.model.js
           |__ users.router.js
    |__ app.js
    |__ server.js
|__ .env
|__ .gitignore
|__ package.json
|__ package-lock.json
|__ README.md
```

### Installation

1. Clone the repository:
   ```bash
   git clone `TBD`
   ```
2. Navigate to the project directory:
   ```bash
   cd `REPO TBD`
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file and include your MongoDB URI:
     ```
     DATABASE_URL=<your-mongo-database-URI>
     ```

5. Run the application:
   ```bash
   npm start
   ```

### Usage
This is just a basic structure for building RESTful APIs. You can extend it by adding more routes, controllers, and Mongoose models.

## Local Setup with Docker
- Uses custom image: [kernel528/mongodb-community-server](https://hub.docker.com/repository/docker/kernel528/mongodb-community-server/tags)
- MongoDB Docker Source Repo:  [mongodb-docker](https://github.com/kernel528/mongo-docker)
  - This image and source contain sample seed data in the `mongo-seed` folder for testing purposes.
- Deploy container based on the `mongo-docker` image and follow the steps to seed data (optional).

#### Technologies
- **Express**: Web framework for Node.js.
- **Mongoose**: ODM library for MongoDB.
- **MongoDB**: NoSQL database.
- **HTML/CSS/JavaScript**: Front-end.
